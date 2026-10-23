"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Send } from "lucide-react";
import { services } from "@/lib/services";
import { quantityOptions } from "@/lib/site";

type Variant = "dark" | "red" | "light";

const labelCls: Record<Variant, string> = {
  dark: "text-white",
  red: "text-white",
  light: "text-ink-900",
};

export function EnquiryForm({
  variant = "light",
  defaultService = "",
  defaultCity = "",
  source = "website",
  compact = false,
}: {
  variant?: Variant;
  defaultService?: string;
  defaultCity?: string;
  source?: string;
  compact?: boolean;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source, page: window.location.pathname }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please call us instead.");
      form.reset();
      router.push("/thank-you");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const L = ({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) => (
    <label htmlFor={htmlFor} className={`mb-1.5 block text-sm font-medium ${labelCls[variant]}`}>
      {children}
    </label>
  );
  const id = (n: string) => `${source}-${n}`;

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2" noValidate={false}>
      <div>
        <L htmlFor={id("company")}>Company Name *</L>
        <input id={id("company")} name="company" required maxLength={120} className="field" autoComplete="organization" />
      </div>
      <div>
        <L htmlFor={id("name")}>Contact Person Name *</L>
        <input id={id("name")} name="name" required maxLength={80} className="field" autoComplete="name" />
      </div>
      {!compact && (
        <div>
          <L htmlFor={id("designation")}>Designation (Admin / HR / Facility Manager) *</L>
          <input id={id("designation")} name="designation" required maxLength={80} className="field" autoComplete="organization-title" />
        </div>
      )}
      <div>
        <L htmlFor={id("email")}>Email *</L>
        <input id={id("email")} name="email" type="email" required maxLength={120} placeholder="you@company.com" className="field" autoComplete="email" />
      </div>
      <div>
        <L htmlFor={id("phone")}>Phone *</L>
        <input
          id={id("phone")}
          name="phone"
          type="tel"
          required
          inputMode="tel"
          pattern="[0-9+\-\s()]{8,16}"
          placeholder="+91 98xxxxxxxx"
          className="field"
          autoComplete="tel"
        />
      </div>
      <div>
        <L htmlFor={id("city")}>City / Location *</L>
        <input id={id("city")} name="city" required maxLength={80} defaultValue={defaultCity} className="field" autoComplete="address-level2" />
      </div>
      <div>
        <L htmlFor={id("service")}>Our Services *</L>
        <select id={id("service")} name="service" required defaultValue={defaultService} className="field">
          <option value="" disabled>
            - Select -
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Multiple / Integrated Services">Multiple / Integrated Services</option>
        </select>
      </div>
      <div>
        <L htmlFor={id("quantity")}>Manpower Quantity *</L>
        <select id={id("quantity")} name="quantity" required defaultValue="" className="field">
          <option value="" disabled>
            - Select Quantity -
          </option>
          {quantityOptions.map((q) => (
            <option key={q} value={q}>
              {q}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <L htmlFor={id("message")}>Your message</L>
        <textarea id={id("message")} name="message" rows={compact ? 3 : 4} maxLength={2000} className="field resize-y" placeholder="Shifts, site details, start date…" />
      </div>
      {/* Honeypot: hidden from humans, bots fill it */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={id("website")}>Website</label>
        <input id={id("website")} name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="flex flex-col items-start gap-3 sm:col-span-2">
        {status === "error" && (
          <p role="alert" className={`text-sm font-medium ${variant === "light" ? "text-brand-700" : "text-white"}`}>
            {error}
          </p>
        )}
        <button type="submit" disabled={status === "loading"} className={variant === "red" ? "btn-dark" : "btn-primary"}>
          {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {status === "loading" ? "Sending…" : "BOOK NOW"}
        </button>
        <p className={`text-xs ${variant === "light" ? "text-ink-500" : "text-white/70"}`}>
          We respect your privacy. Your details are used only to respond to this enquiry.
        </p>
      </div>
    </form>
  );
}
