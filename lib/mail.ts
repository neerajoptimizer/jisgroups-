import nodemailer, { type Transporter } from "nodemailer";
import { site } from "./site";

/**
 * SMTP delivery — defaults to Gmail. Set in the hosting environment:
 *   SMTP_USER  = jagdeeps5572@gmail.com
 *   SMTP_PASS  = 16-character Gmail App Password (not the normal Gmail password)
 * Optional: SMTP_HOST / SMTP_PORT (other providers), ENQUIRY_TO_EMAIL (defaults to SMTP_USER).
 */
export const smtpConfigured = () => Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);

let transporter: Transporter | null = null;
function transport() {
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT || 465);
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port,
      secure: port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS?.replace(/\s+/g, "") },
    });
  }
  return transporter;
}

const from = () => `"${site.name}" <${process.env.SMTP_USER}>`;
export const ownerInbox = () => process.env.ENQUIRY_TO_EMAIL || process.env.SMTP_USER || "";

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

const LABELS: Record<string, string> = {
  company: "Company",
  name: "Contact person",
  designation: "Designation",
  email: "Email",
  phone: "Phone",
  city: "City / Location",
  service: "Service",
  quantity: "Manpower quantity",
  role: "Position",
  experience: "Experience",
  message: "Message",
  page: "Submitted from",
};

function layout(title: string, body: string) {
  return `<!doctype html><html><body style="margin:0;background:#f6f6f7;font-family:Arial,Helvetica,sans-serif;color:#33333a">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f6f7;padding:24px 12px"><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden">
<tr><td style="background:#16161a;padding:20px 28px">
<img src="${site.url}/images/logo.png" width="44" height="44" alt="JIS" style="vertical-align:middle;border-radius:8px;background:#fff">
<span style="color:#fff;font-size:20px;font-weight:bold;vertical-align:middle;margin-left:10px">${esc(site.name)}</span></td></tr>
<tr><td style="height:4px;background:#d91414"></td></tr>
<tr><td style="padding:28px">
<h1 style="margin:0 0 16px;font-size:22px;color:#16161a">${esc(title)}</h1>
${body}
</td></tr>
<tr><td style="background:#f6f6f7;padding:18px 28px;font-size:12px;color:#6b6b74;line-height:1.6">
<strong style="color:#33333a">${esc(site.legalName)}</strong><br>${esc(site.address.full)}<br>
Phone: <a href="${site.phoneHref}" style="color:#d91414">${site.phone}</a> · <a href="${site.url}" style="color:#d91414">${site.url.replace(/^https?:\/\//, "")}</a>
</td></tr></table></td></tr></table></body></html>`;
}

function table(rows: [string, string][]) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:9px 12px;border:1px solid #ececee;background:#fafafa;width:38%;font-weight:bold;vertical-align:top">${esc(
          k,
        )}</td><td style="padding:9px 12px;border:1px solid #ececee;white-space:pre-wrap">${esc(v)}</td></tr>`,
    )
    .join("")}</table>`;
}

type Data = Partial<Record<string, string>>;
const rowsOf = (d: Data) => Object.entries(LABELS).filter(([k]) => d[k]).map(([k, label]) => [label, d[k]!] as [string, string]);

/** Notification to the business inbox. */
export async function sendOwnerNotification(kind: "enquiry" | "careers", d: Data) {
  const subject =
    kind === "careers"
      ? `New job application: ${d.role} — ${d.name} (${d.city})`
      : `New enquiry: ${d.service} × ${d.quantity} — ${d.company} (${d.city})`;
  const heading = kind === "careers" ? "New job application" : "New business enquiry";
  const html = layout(
    heading,
    `<p style="margin:0 0 16px;font-size:14px">Received ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST via the website.</p>
${table(rowsOf(d))}
<p style="margin:20px 0 0">
<a href="tel:${esc((d.phone || "").replace(/[^0-9+]/g, ""))}" style="display:inline-block;background:#d91414;color:#fff;text-decoration:none;padding:10px 18px;border-radius:8px;font-weight:bold">Call ${esc(d.name || "")}</a>
${d.email ? `&nbsp;<a href="mailto:${esc(d.email)}" style="display:inline-block;background:#16161a;color:#fff;text-decoration:none;padding:10px 18px;border-radius:8px;font-weight:bold">Reply by email</a>` : ""}
</p>`,
  );
  const text = `${heading}\n\n${rowsOf(d).map(([k, v]) => `${k}: ${v}`).join("\n")}`;
  await transport().sendMail({ from: from(), to: ownerInbox(), replyTo: d.email || undefined, subject, html, text });
}

/** Confirmation to the person who filled in the form. */
export async function sendCustomerConfirmation(kind: "enquiry" | "careers", d: Data) {
  if (!d.email) return;
  const first = (d.name || "").split(" ")[0] || "there";
  const isJob = kind === "careers";
  const subject = isJob ? `We've received your application — ${site.name}` : `Thank you for your enquiry — ${site.name}`;
  const intro = isJob
    ? `Thank you for applying for the <strong>${esc(d.role || "")}</strong> position with ${esc(site.name)}. Our HR team will review your details and call you if your profile matches an open position.`
    : `Thank you for contacting ${esc(site.name)}. We have received your requirement and our business team will contact you <strong>within 24 hours</strong> with a tailored proposal.`;
  const summary: [string, string][] = isJob
    ? ([["Position", d.role], ["Preferred city", d.city], ["Phone", d.phone]] as [string, string | undefined][]).filter((r): r is [string, string] => !!r[1])
    : ([["Service", d.service], ["Manpower quantity", d.quantity], ["City / Location", d.city], ["Company", d.company]] as [string, string | undefined][]).filter(
        (r): r is [string, string] => !!r[1],
      );
  const html = layout(
    isJob ? "Application received" : "We've received your enquiry",
    `<p style="margin:0 0 14px;font-size:15px;line-height:1.6">Dear ${esc(first)},</p>
<p style="margin:0 0 18px;font-size:15px;line-height:1.6">${intro}</p>
<p style="margin:0 0 8px;font-size:13px;font-weight:bold;color:#6b6b74;text-transform:uppercase;letter-spacing:1px">Your request</p>
${table(summary)}
<p style="margin:20px 0 0;font-size:15px;line-height:1.6">${
      isJob
        ? "Please note: JIS never charges candidates any fee for a job, training or uniform."
        : `Need to speak to us sooner? Call <a href="${site.phoneHref}" style="color:#d91414;font-weight:bold">${site.phone}</a> or simply reply to this email.`
    }</p>
<p style="margin:18px 0 0;font-size:15px;line-height:1.6">Warm regards,<br><strong>Team ${esc(site.name)}</strong></p>`,
  );
  const text = `Dear ${first},\n\n${intro.replace(/<[^>]+>/g, "")}\n\n${summary.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nCall ${site.phone} or reply to this email.\n\nTeam ${site.name}`;
  await transport().sendMail({ from: from(), to: d.email, replyTo: ownerInbox(), subject, html, text });
}

/**
 * Fallback when SMTP isn't configured: FormSubmit (formsubmit.co) emails the enquiry to the
 * business inbox and auto-replies to the customer. Needs a one-time "Activate Form" click in
 * that inbox. Set FORMSUBMIT_DISABLED=1 to turn it off.
 */
export const formsubmitEnabled = () => !smtpConfigured() && !process.env.FORMSUBMIT_DISABLED;

export async function sendViaFormSubmit(kind: "enquiry" | "careers", d: Data) {
  const to = process.env.ENQUIRY_TO_EMAIL || site.emails.find((e) => e.endsWith("@gmail.com")) || site.emails[0];
  const isJob = kind === "careers";
  const payload: Record<string, string> = {
    _subject: isJob
      ? `New job application: ${d.role} — ${d.name} (${d.city})`
      : `New enquiry: ${d.service} × ${d.quantity} — ${d.company} (${d.city})`,
    _template: "table",
    _captcha: "false",
  };
  for (const [k, label] of Object.entries(LABELS)) if (d[k]) payload[label] = d[k]!;
  if (d.email) {
    payload.email = d.email; // FormSubmit sends _autoresponse to this address and sets Reply-To
    payload._autoresponse = isJob
      ? `Dear ${d.name}, thank you for applying for the ${d.role} position with ${site.name}. Our HR team will call you if your profile matches an open position. JIS never charges candidates any fee. — Team ${site.name}, ${site.phone}`
      : `Dear ${d.name}, thank you for contacting ${site.name}. We have received your requirement for ${d.service} (${d.quantity}) in ${d.city}. Our business team will contact you within 24 hours with a tailored proposal. Need us sooner? Call ${site.phone}. — Team ${site.name}, ${site.legalName}, ${site.address.full}`;
  }
  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json", Origin: site.url, Referer: `${site.url}${d.page || "/"}` },
    body: JSON.stringify(payload),
  });
  const json = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
  if (!res.ok || String(json.success) !== "true") throw new Error(`FormSubmit: ${json.message || res.status}`);
}
