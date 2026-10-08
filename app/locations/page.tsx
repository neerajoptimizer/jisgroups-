import Link from "next/link";
import { MapPin } from "lucide-react";
import { CtaBand, PageHero, SectionHeading } from "@/components/sections";
import { cities, regions } from "@/lib/locations";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Locations — Security & Housekeeping Services Across India",
  description:
    "JIS Business Solutions provides security guards, housekeeping and facility management services PAN India — Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune, Chennai, Kolkata and more.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="PAN India"
        title="Serving Businesses Across India"
        subtitle="Headquartered in Noida, JIS deploys verified security, housekeeping and facility staff in metros, state capitals and industrial cities across the country."
        crumbs={[{ name: "Locations", path: "/locations" }]}
      />
      <section className="section">
        <div className="container-x space-y-14">
          {regions.map((r) => {
            const list = cities.filter((c) => c.region === r);
            if (!list.length) return null;
            return (
              <div key={r}>
                <h2 className="flex items-center gap-3 text-2xl font-bold">
                  <span className="h-8 w-1.5 rounded bg-brand-600" /> {r}
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((c) => (
                    <div key={c.slug} className="card">
                      <h3 className="flex items-center gap-2 text-lg font-bold">
                        <MapPin className="h-5 w-5 text-brand-600" aria-hidden="true" />
                        <Link href={`/locations/${c.slug}`} className="hover:text-brand-600">
                          {c.name}
                        </Link>
                        {c.hq && <span className="rounded-full bg-brand-600 px-2 py-0.5 text-[10px] font-bold tracking-wider text-white uppercase">Head office</span>}
                      </h3>
                      <p className="mt-1 text-xs text-ink-500">{c.state}</p>
                      <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
                        {services.slice(0, 4).map((s) => (
                          <li key={s.slug}>
                            <Link href={`/services/${s.slug}/${c.slug}`} className="text-xs text-ink-500 hover:text-brand-600 hover:underline">
                              {s.shortName}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="section bg-ink-50">
        <div className="container-x">
          <SectionHeading
            title="Don't see your city?"
            text="We regularly deploy teams in new locations for multi-site clients. Share your requirement and we will confirm coverage within 24 hours."
          />
          <div className="mt-8 text-center">
            <Link href="/get-a-quote" className="btn-primary">Check availability</Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
