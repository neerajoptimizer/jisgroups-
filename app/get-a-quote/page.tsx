import { BadgeCheck, Clock, IndianRupee, ShieldCheck } from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ClientMarquee, HowItWorks, PageHero } from "@/components/sections";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Get a Free Quote — Staffing Proposal Within 24 Hours",
  description:
    "Request a free, customised proposal for security guards, housekeeping, facility management or manpower outsourcing. Response within 24 hours. No placement fee.",
  path: "/get-a-quote",
});

const perks = [
  { icon: Clock, title: "Response in 24 hrs", text: "Staff profiles, cost structure & deployment plan." },
  { icon: IndianRupee, title: "No placement fee", text: "Transparent, attendance-linked monthly billing." },
  { icon: ShieldCheck, title: "No compliance burden", text: "Wages, PF, ESIC & replacements handled by us." },
  { icon: BadgeCheck, title: "Verified people", text: "Background-checked, trained, uniformed staff." },
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Book now"
        title="Get a Customised Staffing Proposal Within 24 Hours"
        subtitle="No placement fee. No compliance burden. Just reliable people."
        crumbs={[{ name: "Get a Quote", path: "/get-a-quote" }]}
      >
        <span />
      </PageHero>
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold">What you get</h2>
            <ul className="mt-6 space-y-5">
              {perks.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <p.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-semibold text-ink-900">{p.title}</span>
                    <span className="text-sm text-ink-500">{p.text}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-2xl bg-ink-900 p-6 text-white">
              <p className="text-sm text-white/70">Prefer to talk?</p>
              <a href={site.phoneHref} className="mt-1 block font-display text-2xl font-bold">
                {site.phone}
              </a>
              <p className="mt-2 text-sm text-white/70">{site.hours}</p>
            </div>
          </div>
          <div className="rounded-3xl bg-brand-600 p-6 sm:p-10 lg:col-span-8">
            <h2 className="text-3xl font-extrabold text-white">Tell us about your requirement</h2>
            <p className="mt-2 mb-8 text-white/85">Fields marked * are required.</p>
            <EnquiryForm variant="red" source="get-a-quote" />
          </div>
        </div>
      </section>
      <HowItWorks />
      <ClientMarquee />
    </>
  );
}
