"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { careerRoles } from "@/lib/careers";


export function CareersForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(new FormData(form).entries()), source: "careers", page: "/careers" }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("done");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "done")
    return (
      <div className="flex flex-col items-center rounded-2xl bg-brand-50 p-10 text-center" role="status">
        <CheckCircle2 className="h-14 w-14 text-brand-600" />
        <p className="mt-4 font-display text-2xl font-bold">Application received</p>
        <p className="mt-2 text-ink-500">Our HR team will call you if your profile matches an open position.</p>
      </div>
    );

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-ink-900">Full Name *</label>
        <input id="c-name" name="name" required maxLength={80} className="field" autoComplete="name" />
      </div>
      <div>
        <label htmlFor="c-phone" className="mb-1.5 block text-sm font-medium text-ink-900">Mobile Number *</label>
        <input id="c-phone" name="phone" type="tel" required pattern="[0-9+\-\s()]{8,16}" className="field" autoComplete="tel" />
      </div>
      <div>
        <label htmlFor="c-role" className="mb-1.5 block text-sm font-medium text-ink-900">Position *</label>
        <select id="c-role" name="role" required defaultValue="" className="field">
          <option value="" disabled>- Select -</option>
          {careerRoles.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="c-city" className="mb-1.5 block text-sm font-medium text-ink-900">Preferred City *</label>
        <input id="c-city" name="city" required maxLength={80} className="field" autoComplete="address-level2" />
      </div>
      <div>
        <label htmlFor="c-exp" className="mb-1.5 block text-sm font-medium text-ink-900">Experience</label>
        <select id="c-exp" name="experience" defaultValue="" className="field">
          <option value="">- Select -</option>
          <option>Fresher</option>
          <option>1 – 2 years</option>
          <option>3 – 5 years</option>
          <option>5+ years</option>
        </select>
      </div>
      <div>
        <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium text-ink-900">Email (optional)</label>
        <input id="c-email" name="email" type="email" className="field" autoComplete="email" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="c-msg" className="mb-1.5 block text-sm font-medium text-ink-900">About you</label>
        <textarea id="c-msg" name="message" rows={3} maxLength={1000} className="field" placeholder="Education, previous employer, languages known…" />
      </div>
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <input name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="sm:col-span-2">
        {status === "error" && <p role="alert" className="mb-3 text-sm text-brand-700">{error}</p>}
        <button type="submit" className="btn-primary" disabled={status === "loading"}>
          {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />} Apply Now
        </button>
      </div>
    </form>
  );
}
