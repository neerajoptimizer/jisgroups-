"use client";

import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from "react";
import { RefreshCw, ShieldCheck } from "lucide-react";

export type CaptchaHandle = { refresh: () => void };

/** Renders the challenge plus hidden `captchaToken` / visible `captchaAnswer` inputs for the parent form. */
export const Captcha = forwardRef<CaptchaHandle, { id: string; labelClassName?: string }>(function Captcha({ id, labelClassName = "text-ink-900" }, ref) {
  const [c, setC] = useState<{ question: string; token: string } | null>(null);
  const [answer, setAnswer] = useState("");

  const refresh = useCallback(() => {
    setAnswer("");
    fetch("/api/captcha", { cache: "no-store" })
      .then((r) => r.json())
      .then(setC)
      .catch(() => setC(null));
  }, []);

  useEffect(refresh, [refresh]);
  useImperativeHandle(ref, () => ({ refresh }), [refresh]);

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
        <button type="button" onClick={refresh} aria-label="New question" className="shrink-0 rounded-lg border border-ink-100 bg-white px-3 text-ink-500 hover:text-brand-600">
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>
      <input type="hidden" name="captchaToken" value={c?.token ?? ""} />
    </div>
  );
});
