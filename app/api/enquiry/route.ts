import { NextResponse } from "next/server";

const REQUIRED = ["company", "name", "email", "phone", "city", "service", "quantity"] as const;
const FIELDS = [...REQUIRED, "designation", "message", "role", "experience", "source", "page"] as const;
type Enquiry = Partial<Record<(typeof FIELDS)[number], string>>;

const clean = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

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

  const subject =
    kind === "careers"
      ? `Job application: ${data.role} — ${data.name} (${data.city})`
      : `New enquiry: ${data.service} × ${data.quantity} — ${data.company} (${data.city})`;
  const rows = Object.entries(data).filter(([, v]) => v);
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<h2>${escapeHtml(subject)}</h2><table cellpadding="6">${rows
    .map(([k, v]) => `<tr><td><b>${escapeHtml(k)}</b></td><td>${escapeHtml(v!)}</td></tr>`)
    .join("")}</table>`;

  const deliveries: Promise<Response>[] = [];

  if (process.env.RESEND_API_KEY && process.env.ENQUIRY_TO_EMAIL) {
    deliveries.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.ENQUIRY_FROM_EMAIL || "JIS Website <onboarding@resend.dev>",
          to: process.env.ENQUIRY_TO_EMAIL.split(",").map((s) => s.trim()),
          reply_to: data.email || undefined,
          subject,
          text,
          html,
        }),
      }),
    );
  }

  if (process.env.ENQUIRY_WEBHOOK_URL) {
    deliveries.push(
      fetch(process.env.ENQUIRY_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, subject, ...data, receivedAt: new Date().toISOString() }),
      }),
    );
  }

  if (!deliveries.length) {
    console.warn("[enquiry] No delivery channel configured (set RESEND_API_KEY or ENQUIRY_WEBHOOK_URL).\n" + text);
    return NextResponse.json({ ok: true, delivered: false });
  }

  const results = await Promise.allSettled(deliveries);
  const ok = results.some((r) => r.status === "fulfilled" && r.value.ok);
  if (!ok) {
    console.error("[enquiry] delivery failed", results);
    return NextResponse.json({ error: "We couldn't send your enquiry. Please call 0120-4216290." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
