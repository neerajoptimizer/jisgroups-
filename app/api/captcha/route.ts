import { NextResponse } from "next/server";
import { createCaptcha } from "@/lib/captcha";

export const dynamic = "force-dynamic";

export function GET() {
  const c = createCaptcha();
  // The reCAPTCHA response (just the public site key) is identical for everyone, so let the CDN
  // serve it — this avoids a server-function call on every page view. Arithmetic challenges are unique.
  const cache = c.provider === "recaptcha" ? "public, max-age=300, s-maxage=86400" : "no-store";
  return NextResponse.json(c, { headers: { "Cache-Control": cache } });
}
