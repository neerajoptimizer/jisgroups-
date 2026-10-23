import { NextResponse } from "next/server";
import { recaptchaSiteKey, verifyCaptcha } from "@/lib/captcha";
import { formsubmitEnabled, sendCustomerConfirmation, sendOwnerNotification, sendViaFormSubmit, smtpConfigured } from "@/lib/mail";

const REQUIRED = ["company", "name", "email", "phone", "city", "service", "quantity"] as const;
const FIELDS = [...REQUIRED, "designation", "message", "role", "experience", "source", "page"] as const;
type Enquiry = Partial<Record<(typeof FIELDS)[number], string>>;

const clean = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");

// Very small in-memory rate limit (per server instance) to deter abuse.
const hits = new Map<string, { n: number; t: number }>();
function limited(ip: string) {
  const now = Date.now();
  const h = hits.get(ip);
  if (!h || now - h.t > 10 * 60_000) {
    hits.set(ip, { n: 1, t: now });
    return false;
  }
  h.n += 1;
  return h.n > 8;
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — silently accept bot submissions without delivering them.
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return NextResponse.json({ error: "Too many requests. Please call us directly." }, { status: 429 });

  if (!(await verifyCaptcha(body.captchaToken, body.captchaAnswer, ip)))
    return NextResponse.json(
      { error: recaptchaSiteKey() ? "Please tick “I'm not a robot” and try again." : "Security check answer is incorrect or expired. Please try the new question." },
      { status: 400 },
    );

  const kind = clean(body.source) === "careers" ? "careers" : "enquiry";
  const required = kind === "careers" ? (["name", "phone", "city", "role"] as const) : REQUIRED;

  const data: Enquiry = {};
  for (const f of FIELDS) data[f] = clean(body[f], f === "message" ? 2000 : 200);

  const missing = required.filter((f) => !data[f]);
  if (missing.length) return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  if (!/^[0-9+\-\s()]{8,16}$/.test(data.phone || ""))
    return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });

  const deliveries: Promise<unknown>[] = [];

  // Primary channel: SMTP (Gmail) — notification to the business inbox.
  if (smtpConfigured()) deliveries.push(sendOwnerNotification(kind, data));
  // Fallback without SMTP credentials: FormSubmit (also auto-replies to the customer).
  else if (formsubmitEnabled())
    deliveries.push(
      sendViaFormSubmit(kind, data).catch((err: Error) => {
        // Before the one-time activation click, don't show customers an error — log it instead.
        if (/activat/i.test(err.message)) return console.error("[enquiry] FormSubmit not activated yet", data);
        throw err;
      }),
    );

  // Optional extra channel: forward the enquiry as JSON (Google Sheets, Zapier, CRM).
  if (process.env.ENQUIRY_WEBHOOK_URL) {
    deliveries.push(
      fetch(process.env.ENQUIRY_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, ...data, receivedAt: new Date().toISOString() }),
      }).then((r) => {
        if (!r.ok) throw new Error(`webhook ${r.status}`);
      }),
    );
  }

  if (!deliveries.length) {
    console.warn("[enquiry] No delivery channel configured (set SMTP_USER/SMTP_PASS or ENQUIRY_WEBHOOK_URL).", data);
    return NextResponse.json({ ok: true, delivered: false });
  }

  const results = await Promise.allSettled(deliveries);
  if (!results.some((r) => r.status === "fulfilled")) {
    console.error("[enquiry] delivery failed", results);
    return NextResponse.json({ error: "We couldn't send your enquiry. Please call 0120-4216290." }, { status: 502 });
  }

  // Confirmation to the customer — a failure here must not lose the enquiry.
  if (smtpConfigured() && data.email) {
    await sendCustomerConfirmation(kind, data).catch((err) => console.error("[enquiry] confirmation email failed", err));
  }

  return NextResponse.json({ ok: true });
}
