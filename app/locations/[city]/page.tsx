import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { JsonLd } from "@/components/JsonLd";
import {
  CityPills,
  ClientMarquee,
  CtaBand,
  Faq,
  HowItWorks,
  IndustriesGrid,
  PageHero,
  SectionHeading,
  ServicesGrid,
  StatsBar,
  WhyChoose,
} from "@/components/sections";
import { cities, getCity, nearbyCities } from "@/lib/locations";
import { cityFaqs, cityIntro } from "@/lib/local";
import { services } from "@/lib/services";
import { buildMetadata, serviceSchema } from "@/lib/seo";

type Props = { params: Promise<{ city: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { city: slug } = await params;
  const c = getCity(slug);
  if (!c) return {};
  return buildMetadata({
    title: `Security, Housekeeping & Facility Management Services in ${c.name}`,
    description: `Verified security guards, housekeeping staff, lift operators and facility management in ${c.name}, ${c.state}. Serving ${c.areas.slice(0, 3).join(", ")} & more. Proposal in 24 hrs.`,
    path: `/locations/${c.slug}`,
    keywords: [
      `security agency in ${c.name}`,
      `security guard services in ${c.name}`,
      `housekeeping services in ${c.name}`,
      `facility management company in ${c.name}`,
      `manpower outsourcing in ${c.name}`,
    ],
  });
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();
  const intro = cityIntro(city);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Facility Management & Security Services in ${city.name}`,
          description: intro[0],
          path: `/locations/${city.slug}`,
          area: { name: city.name, state: city.state },
        })}
      />
      <PageHero
        eyebrow={`${city.name}, ${city.state}`}
        title={`Security, Housekeeping & Facility Services in ${city.name}`}
        subtitle={`Verified, trained and supervised staff for offices, industries, hotels, hospitals and institutions across ${city.name}.`}
        crumbs={[
          { name: "Locations", path: "/locations" },
          { name: city.name, path: `/locations/${city.slug}` },
        ]}
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">JIS in {city.name}</p>
            <h2 className="h2 mt-3">Your facility &amp; manpower partner in {city.name}</h2>
            <div className="lead mt-6 space-y-5">
              {intro.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-ink-100 p-6">
              <h3 className="flex items-center gap-2 font-bold">
                <MapPin className="h-5 w-5 text-brand-600" aria-hidden="true" /> Key areas covered
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {city.areas.map((a) => (
                  <li key={a} className="rounded-full bg-ink-50 px-3 py-1.5 text-sm">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="font-bold">Services available in {city.name}</h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}/${city.slug}`} className="group flex items-center justify-between rounded-xl bg-ink-50 px-4 py-3 text-sm font-medium text-ink-900 hover:bg-brand-50 hover:text-brand-700">
                      {s.name} in {city.name}
                      <ArrowRight className="h-4 w-4 text-brand-600 transition group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="sticky top-28 rounded-3xl border border-ink-100 p-6 shadow-2xl shadow-ink-900/10 sm:p-8">
              <p className="font-display text-2xl font-bold">Get a quote in {city.name}</p>
              <p className="mt-1 mb-6 text-sm text-ink-500">Response in 24 hours</p>
              <EnquiryForm source={`city-${city.slug}`} defaultCity={city.name} compact />
            </div>
          </aside>
        </div>
      </section>

      <div className="container-x">
        <StatsBar />
      </div>

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Services" title={`Our services in ${city.name}`} />
          <div className="mt-12">
            <ServicesGrid cityLink={city.slug} />
          </div>
        </div>
      </section>

      <section className="section bg-ink-50">
        <div className="container-x">
          <SectionHeading eyebrow="Industries" title={`Industries we serve in ${city.name}`} />
          <div className="mt-12">
            <IndustriesGrid />
          </div>
        </div>
      </section>

      <WhyChoose />
      <HowItWorks />
      <ClientMarquee />
      <Faq faqs={cityFaqs(city)} title={`Services in ${city.name}: FAQs`} />

      <section className="section">
        <div className="container-x">
          <SectionHeading title={`Also serving cities near ${city.name}`} />
          <div className="mt-8 flex justify-center">
            <CityPills cities={nearbyCities(city, 12)} />
          </div>
        </div>
      </section>
      <CtaBand title={`Need staff in ${city.name}?`} />
    </>
  );
}
