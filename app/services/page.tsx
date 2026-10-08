import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand, HowItWorks, PageHero, SectionHeading, ServicesGrid, WhyChoose } from "@/components/sections";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Services — Security, Housekeeping, Facility Management & Manpower Outsourcing",
  description:
    "Explore JIS services: security guard services, housekeeping, integrated facility management, manpower outsourcing, lift operators and admin support staff across India.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Facility & Workforce Services Under One Roof"
        subtitle="From security to maintenance, JIS provides complete facility outsourcing solutions — verified people, supervised daily, billed transparently."
        crumbs={[{ name: "Services", path: "/services" }]}
      />
      <section className="section">
        <div className="container-x">
          <ServicesGrid />
        </div>
      </section>

      <section className="section bg-ink-50">
        <div className="container-x">
          <SectionHeading eyebrow="At a glance" title="What's Included in Each Service" />
          <div className="mt-12 overflow-x-auto rounded-2xl border border-ink-100 bg-white">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-ink-900 text-white">
                <tr>
                  <th scope="col" className="p-4 font-semibold">Service</th>
                  <th scope="col" className="p-4 font-semibold">Typical roles</th>
                  <th scope="col" className="p-4 font-semibold">Best for</th>
                  <th scope="col" className="p-4" />
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100">
                {services.map((s) => (
                  <tr key={s.slug} className="align-top">
                    <th scope="row" className="p-4 font-semibold text-ink-900">{s.name}</th>
                    <td className="p-4 text-ink-500">{s.roles.slice(0, 4).map((r) => r.title).join(", ")}</td>
                    <td className="p-4 text-ink-500">{s.summary}</td>
                    <td className="p-4">
                      <Link href={`/services/${s.slug}`} className="inline-flex items-center gap-1 font-semibold whitespace-nowrap text-brand-600">
                        Details <ArrowRight className="h-4 w-4" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <WhyChoose />
      <HowItWorks />
      <CtaBand />
    </>
  );
}
