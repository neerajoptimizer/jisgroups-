/** Push a conversion event to Google Tag Manager's dataLayer (no-op if GTM hasn't loaded). */
export function trackLead(form: string, extra: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: "generate_lead", form_name: form, ...extra });
}
