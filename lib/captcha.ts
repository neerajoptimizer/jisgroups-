import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

// Self-hosted arithmetic captcha: the answer never reaches the browser — only an HMAC-signed,
// expiring token. Set CAPTCHA_SECRET in the hosting environment.
const SECRET = process.env.CAPTCHA_SECRET || "jis-group-captcha-fallback-secret";
const TTL_MS = 15 * 60_000;

const sign = (s: string) => createHmac("sha256", SECRET).update(s).digest("base64url");

export function createCaptcha() {
  const a = 2 + Math.floor(Math.random() * 9);
  const b = 1 + Math.floor(Math.random() * 9);
  const plus = Math.random() < 0.7 || a <= b;
  const answer = plus ? a + b : a - b;
  const payload = `${Date.now() + TTL_MS}.${randomBytes(8).toString("base64url")}`;
  return { question: `What is ${a} ${plus ? "+" : "−"} ${b}?`, token: `${payload}.${sign(`${answer}.${payload}`)}` };
}

export function verifyCaptcha(token: unknown, answer: unknown): boolean {
  if (typeof token !== "string" || (typeof answer !== "string" && typeof answer !== "number")) return false;
  const parts = token.split(".");
  if (parts.length !== 3 || Number(parts[0]) < Date.now()) return false;
  const given = String(answer).trim();
  if (!/^-?\d{1,3}$/.test(given)) return false;
  const expected = Buffer.from(sign(`${Number(given)}.${parts[0]}.${parts[1]}`));
  const actual = Buffer.from(parts[2]);
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}
