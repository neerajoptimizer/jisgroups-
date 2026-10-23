import {
  Award,
  BadgeCheck,
  Building2,
  FileCheck2,
  Headset,
  IndianRupee,
  Lock,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import { clients, registrations, site } from "@/lib/site";

const badges = [
  { icon: ShieldCheck, title: "Police-Verified Staff", text: "Background & police verification before deployment" },
  { icon: FileCheck2, title: "PF & ESIC Compliant", text: "Wages and statutory dues handled by JIS" },
  { icon: Award, title: "10+ Years Experience", text: "Serving corporates & institutions" },
  { icon: Users, title: `${clients.length}+ Trusted Clients`, text: "Corporates, institutes, hospitality & real estate" },
  { icon: Headset, title: "24×7 Support", text: "Live operations desk & quick replacements" },
  { icon: MapPin, title: "PAN India", text: "Deployment across metros & industrial cities" },
  { icon: IndianRupee, title: "No Placement Fee", text: "Transparent, attendance-linked billing" },
  { icon: Building2, title: "Registered Company", text: site.legalName },
];

/** Grid of trust cards for content sections. */
export function TrustBadges({ dark = false }: { dark?: boolean }) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {badges.map((b) => (
        <li
          key={b.title}
          className={`flex items-start gap-3 rounded-2xl border p-4 ${dark ? "border-white/10 bg-white/5" : "border-ink-100 bg-white"}`}
        >
          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${dark ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-600"}`}>
            <b.icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            <span className={`block text-sm font-bold ${dark ? "text-white" : "text-ink-900"}`}>{b.title}</span>
            <span className={`mt-0.5 block text-xs leading-snug ${dark ? "text-white/60" : "text-ink-500"}`}>{b.text}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Compact one-line badges, e.g. under a hero or beside a form. */
export function TrustStrip({ light = false, className = "" }: { light?: boolean; className?: string }) {
  const items = badges.slice(0, 5);
  return (
    <ul className={`flex flex-wrap items-center gap-x-5 gap-y-2 ${className}`}>
      {items.map((b) => (
        <li key={b.title} className={`flex items-center gap-1.5 text-xs font-semibold ${light ? "text-white/85" : "text-ink-700"}`}>
          <b.icon className={`h-4 w-4 ${light ? "text-brand-500" : "text-brand-600"}`} aria-hidden="true" />
          {b.title}
        </li>
      ))}
    </ul>
  );
}

/** Reassurance line shown under every enquiry form. */
export function FormTrust({ light = false }: { light?: boolean }) {
  const c = light ? "text-white/75" : "text-ink-500";
  return (
    <ul className={`flex flex-wrap gap-x-4 gap-y-1 text-xs ${c}`}>
      <li className="flex items-center gap-1">
        <Lock className="h-3.5 w-3.5" aria-hidden="true" /> SSL-secured & confidential
      </li>
      <li className="flex items-center gap-1">
        <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> Protected by reCAPTCHA
      </li>
      <li className="flex items-center gap-1">
        <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" /> No spam, no placement fee
      </li>
    </ul>
  );
}

/** Licence / registration badges — only entries with a number filled in are shown. */
export function RegistrationBadges({ dark = false }: { dark?: boolean }) {
  const filled = registrations.filter((r) => r.number);
  if (!filled.length) return null;
  return (
    <ul className="flex flex-wrap gap-3">
      {filled.map((r) => (
        <li
          key={r.label}
          className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold ${
            dark ? "border-white/15 bg-white/5 text-white/85" : "border-ink-100 bg-white text-ink-900"
          }`}
        >
          <BadgeCheck className="h-4 w-4 text-brand-500" aria-hidden="true" />
          {r.label}: <span className="font-mono font-medium">{r.number}</span>
        </li>
      ))}
    </ul>
  );
}
