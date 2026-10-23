import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

/**
 * Form captcha. Uses Google reCAPTCHA v2 ("I'm not a robot" checkbox) when RECAPTCHA_SITE_KEY and
 * RECAPTCHA_SECRET_KEY are set; otherwise falls back to a self-hosted arithmetic challenge whose
 * answer never reaches the browser — only an HMAC-signed, expiring token (CAPTCHA_SECRET).
 */
export const recaptchaSiteKey = () => (process.env.RECAPTCHA_SECRET_KEY && process.env.RECAPTCHA_SITE_KEY) || "";

const SECRET = process.env.CAPTCHA_SECRET || "jis-group-captcha-fallback-secret";
const TTL_MS = 15 * 60_000;

const sign = (s: string) => createHmac("sha256", SECRET).update(s).digest("base64url");

export function createCaptcha() {
  const siteKey = recaptchaSiteKey();
  if (siteKey) return { provider: "recaptcha" as const, siteKey };
  const a = 2 + Math.floor(Math.random() * 9);
  const b = 1 + Math.floor(Math.random() * 9);
  const plus = Math.random() < 0.7 || a <= b;
  const answer = plus ? a + b : a - b;
  const payload = `${Date.now() + TTL_MS}.${randomBytes(8).toString("base64url")}`;
  return { provider: "math" as const, question: `What is ${a} ${plus ? "+" : "−"} ${b}?`, token: `${payload}.${sign(`${answer}.${payload}`)}` };
}

function verifyMath(token: unknown, answer: unknown): boolean {
  if (typeof token !== "string" || (typeof answer !== "string" && typeof answer !== "number")) return false;
  const parts = token.split(".");
  if (parts.length !== 3 || Number(parts[0]) < Date.now()) return false;
  const given = String(answer).trim();
  if (!/^-?\d{1,3}$/.test(given)) return false;
  const expected = Buffer.from(sign(`${Number(given)}.${parts[0]}.${parts[1]}`));
  const actual = Buffer.from(parts[2]);
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}

async function verifyRecaptcha(token: unknown, ip?: string): Promise<boolean> {
  if (typeof token !== "string" || !token || token.length > 4000) return false;
  const params = new URLSearchParams({ secret: process.env.RECAPTCHA_SECRET_KEY!, response: token });
  if (ip && ip !== "unknown") params.set("remoteip", ip);
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", { method: "POST", body: params });
    const json = (await res.json()) as { success?: boolean; "error-codes"?: string[] };
    if (!json.success) console.warn("[captcha] reCAPTCHA rejected", json["error-codes"]);
    return json.success === true;
  } catch (err) {
    console.error("[captcha] reCAPTCHA verification failed", err);
    return false;
  }
}

export function verifyCaptcha(token: unknown, answer: unknown, ip?: string): Promise<boolean> {
  return recaptchaSiteKey() ? verifyRecaptcha(token, ip) : Promise.resolve(verifyMath(token, answer));
}
