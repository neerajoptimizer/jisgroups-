"use client";

import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { RefreshCw, ShieldCheck } from "lucide-react";

export type CaptchaHandle = { refresh: () => void };

type Challenge = { provider: "recaptcha"; siteKey: string } | { provider: "math"; question: string; token: string };

type Grecaptcha = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => number;
  reset: (id?: number) => void;
};
declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
    __jisRecaptchaReady?: Promise<Grecaptcha>;
  }
}

/** Loads Google's reCAPTCHA script once for the whole page. */
function loadRecaptcha(): Promise<Grecaptcha> {
  if (!window.__jisRecaptchaReady) {
    window.__jisRecaptchaReady = new Promise((resolve, reject) => {
      (window as unknown as Record<string, unknown>).__jisRecaptchaOnload = () => resolve(window.grecaptcha!);
      const s = document.createElement("script");
      s.src = "https://www.google.com/recaptcha/api.js?onload=__jisRecaptchaOnload&render=explicit&hl=en";
      s.async = true;
      s.defer = true;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  return window.__jisRecaptchaReady;
}

/**
 * Renders Google reCAPTCHA ("I'm not a robot") when the server has keys configured, otherwise a
 * simple arithmetic question. Either way it writes `captchaToken` (and `captchaAnswer` for the
 * arithmetic version) into the parent form.
 */
export const Captcha = forwardRef<CaptchaHandle, { id: string; labelClassName?: string }>(function Captcha({ id, labelClassName = "text-ink-900" }, ref) {
  const [c, setC] = useState<Challenge | null>(null);
  const [answer, setAnswer] = useState("");
  const [token, setToken] = useState("");
  const box = useRef<HTMLDivElement>(null);
  const widget = useRef<number | null>(null);

  const fetchChallenge = useCallback(() => {
    setAnswer("");
    fetch("/api/captcha", { cache: "no-store" })
      .then((r) => r.json())
      .then(setC)
      .catch(() => setC(null));
  }, []);

  useEffect(fetchChallenge, [fetchChallenge]);

  useEffect(() => {
    if (c?.provider !== "recaptcha" || !box.current || widget.current !== null) return;
    loadRecaptcha().then((g) => {
      if (!box.current || widget.current !== null) return;
      widget.current = g.render(box.current, {
        sitekey: c.siteKey,
        callback: (t: string) => setToken(t),
        "expired-callback": () => setToken(""),
        "error-callback": () => setToken(""),
      });
    });
  }, [c]);

  const refresh = useCallback(() => {
    if (c?.provider === "recaptcha") {
      setToken("");
      if (widget.current !== null) window.grecaptcha?.reset(widget.current);
    } else fetchChallenge();
  }, [c, fetchChallenge]);

  useImperativeHandle(ref, () => ({ refresh }), [refresh]);

  if (c?.provider === "recaptcha") {
    return (
      <div>
        <div ref={box} id={id} className="min-h-[78px]" />
        <input type="hidden" name="captchaToken" value={token} />
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={id} className={`mb-1.5 flex items-center gap-1.5 text-sm font-medium ${labelClassName}`}>
        <ShieldCheck className="h-4 w-4" aria-hidden="true" /> Security check: {c ? c.question : "loading…"} *
      </label>
      <div className="flex gap-2">
        <input
          id={id}
          name="captchaAnswer"
          required
          inputMode="numeric"
          autoComplete="off"
          pattern="-?[0-9]{1,3}"
          placeholder="Your answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="field"
        />
        <button type="button" onClick={fetchChallenge} aria-label="New question" className="shrink-0 rounded-lg border border-ink-100 bg-white px-3 text-ink-500 hover:text-brand-600">
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>
      <input type="hidden" name="captchaToken" value={c?.provider === "math" ? c.token : ""} />
    </div>
  );
});
