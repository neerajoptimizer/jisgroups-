import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { EnquiryForm } from "./EnquiryForm";
import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";
import { CityPills, ClientMarquee, CtaBand, Faq, PageHero, SectionHeading, TrustPoints } from "./sections";
import { services, type Service } from "@/lib/services";
import { industries } from "@/lib/industries";
import { cities, nearbyCities, type City } from "@/lib/locations";
import { serviceCityFaqs, serviceCityIntro } from "@/lib/local";
import { serviceSchema } from "@/lib/seo";
import { site } from "@/lib/site";

export function ServiceDetail({ service, city }: { service: Service; city?: City }) {
  const where = city ? ` in ${city.name}` : "";
  const path = city ? `/services/${service.slug}/${city.slug}` : `/services/${service.slug}`;
  const intro = city ? serviceCityIntro(service, city) : service.intro;
  const faqs = city ? serviceCityFaqs(service, city) : service.faqs;
  const relatedIndustries = industries.filter((i) => i.services.includes(service.slug));
  const otherServices = services.filter((s) => s.slug !== service.slug);
  const crumbs = city
    ? [
        { name: "Services", path: "/services" },
        { name: service.name, path: `/services/${service.slug}` },
        { name: city.name, path },
      ]
    : [
        { name: "Services", path: "/services" },
        { name: service.name, path },
      ];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `${service.name}${where}`,
          description: service.summary,
          path,
          area: city ? { name: city.name, state: city.state } : undefined,
        })}
      />
      <PageHero
        eyebrow={city ? `${city.name}, ${city.state}` : "Our Services"}
        title={`${service.name}${where}`}
        subtitle={
          city
            ? `Verified, trained and supervised ${service.shortName.toLowerCase()} for offices, industries and institutions across ${city.name}. Proposal within 24 hours.`
            : service.summary
        }
        crumbs={crumbs}
        image={service.image}
      />

      {/* Overview + sticky form */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">Overview</p>
            <h2 className="h2 mt-3">
              {city ? `Trusted ${service.keyword} company in ${city.name}` : `Professional ${service.keyword} by JIS`}
            </h2>
            <div className="lead mt-6 space-y-5">
              {intro.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <div className="mt-10">
              <TrustPoints items={service.highlights} />
            </div>

            {city && (
              <div className="mt-10 rounded-2xl border border-ink-100 p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  <MapPin className="h-5 w-5 text-brand-600" aria-hidden="true" /> Areas we serve in {city.name}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {city.areas.map((a) => (
                    <li key={a} className="rounded-full bg-ink-50 px-3 py-1.5 text-sm text-ink-700">
                      {a}
                    </li>
                  ))}
                  <li className="rounded-full bg-brand-50 px-3 py-1.5 text-sm text-brand-700">+ all of {city.name}</li>
                </ul>
              </div>
            )}

            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl">
              <Image src={service.image} alt={`${service.name}${where} — JIS staff on duty`} fill sizes="(min-width:1024px) 58vw, 100vw" className="object-cover" />
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-28 rounded-3xl border border-ink-100 bg-white p-6 shadow-2xl shadow-ink-900/10 sm:p-8">
              <p className="font-display text-2xl font-bold">
                Get a quote for {service.shortName.toLowerCase()}
                {where}
              </p>
              <p className="mt-1 mb-6 text-sm text-ink-500">Response in 24 hours · No placement fee</p>
              <EnquiryForm source={`service-${service.slug}${city ? `-${city.slug}` : ""}`} defaultService={service.name} defaultCity={city?.name} compact />
              <a href={site.phoneHref} className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-ink-50 py-3 text-sm font-semibold text-ink-900">
                <Phone className="h-4 w-4 text-brand-600" /> Prefer to talk? {site.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Roles */}
      <section className="section bg-ink-950">
        <div className="container-x">
          <SectionHeading
            light
            eyebrow="Staff we deploy"
            title={`${service.shortName} roles${where}`}
            text="Every role is filled with background-checked, trained and uniformed staff, supervised by JIS."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.roles.map((r) => (
              <div key={r.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <Icon name={service.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{r.title}</h3>
                <p className="mt-2 text-sm text-white/65">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + process */}
      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Benefits</p>
            <h2 className="h2 mt-3">Why businesses{where} choose JIS</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {service.benefits.map((b) => (
                <div key={b.title} className="card">
                  <CheckCircle2 className="h-6 w-6 text-brand-600" aria-hidden="true" />
                  <h3 className="mt-4 font-bold">{b.title}</h3>
                  <p className="mt-1 text-sm text-ink-500">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Our process</p>
            <h2 className="h2 mt-3">From enquiry to deployment</h2>
            <ol className="relative mt-8 space-y-6 border-l-2 border-brand-100 pl-8">
              {service.process.map((p, i) => (
                <li key={p} className="relative">
                  <span className="absolute top-0 -left-[45px] flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="pt-1 font-medium text-ink-900">{p}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section bg-ink-50">
        <div className="container-x">
          <SectionHeading eyebrow="Industries" title={`${service.name} for every sector`} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedIndustries.map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}`} className="card flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-white">
                  <Icon name={i.icon} className="h-6 w-6" />
                </span>
                <span className="font-semibold text-ink-900">{i.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Locations"
            title={city ? `${service.name} near ${city.name}` : `${service.name} across India`}
            text={city ? `We also provide ${service.keyword} in these nearby cities.` : `Find ${service.keyword} in your city.`}
          />
          <div className="mt-10 flex justify-center">
            <CityPills cities={city ? nearbyCities(city, 12) : cities} serviceSlug={service.slug} />
          </div>
          {city && (
            <div className="mt-12 rounded-2xl bg-ink-50 p-8">
              <h3 className="text-center text-lg font-bold">Other services in {city.name}</h3>
              <ul className="mt-5 flex flex-wrap justify-center gap-3">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}/${city.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:underline">
                      {s.name} in {city.name} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <ClientMarquee title="Organisations that trust JIS" />
      <Faq faqs={faqs} title={`${service.shortName}${where}: FAQs`} />

      {!city && (
        <section className="section">
          <div className="container-x">
            <SectionHeading eyebrow="More services" title="Explore other JIS services" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {otherServices.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="card flex flex-col items-start gap-3">
                  <Icon name={s.icon} className="h-7 w-7 text-brand-600" />
                  <span className="font-semibold text-ink-900">{s.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand title={`Need ${service.shortName.toLowerCase()}${where}?`} />
    </>
  );
}
