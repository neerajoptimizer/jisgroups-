import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Icon } from "@/components/Icon";
import { ClientMarquee, CtaBand, PageHero, SectionHeading, ServiceCard, WhyChoose } from "@/components/sections";
import { getIndustry, industries } from "@/lib/industries";
import { getService } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const i = getIndustry(slug);
  if (!i) return {};
  return buildMetadata({
    title: `Security & Facility Services for ${i.name}`,
    description: `${i.summary} PAN India coverage by JIS Business Solutions — proposal within 24 hours.`,
    path: `/industries/${i.slug}`,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  const svc = industry.services.map((s) => getService(s)!).filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow="Industry solutions"
        title={`Facility & Manpower Solutions for ${industry.name}`}
        subtitle={industry.summary}
        crumbs={[
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ]}
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ink-900 text-white">
              <Icon name={industry.icon} className="h-8 w-8" />
            </span>
            <h2 className="h2 mt-6">How JIS supports {industry.name.toLowerCase()}</h2>
            <p className="lead mt-5">{industry.intro}</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-ink-50 p-6">
                <h3 className="flex items-center gap-2 font-bold">
                  <AlertTriangle className="h-5 w-5 text-brand-600" aria-hidden="true" /> Common challenges
                </h3>
                <ul className="mt-4 space-y-3">
                  {industry.challenges.map((c) => (
                    <li key={c} className="text-sm text-ink-500">— {c}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-ink-900 p-6 text-white">
                <h3 className="flex items-center gap-2 font-bold text-white">
                  <CheckCircle2 className="h-5 w-5 text-brand-500" aria-hidden="true" /> The JIS solution
                </h3>
                <ul className="mt-4 space-y-3">
                  {industry.solutions.map((c) => (
                    <li key={c} className="text-sm text-white/75">✓ {c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="sticky top-28 rounded-3xl border border-ink-100 p-6 shadow-2xl shadow-ink-900/10 sm:p-8">
              <p className="font-display text-2xl font-bold">Talk to an industry specialist</p>
              <p className="mt-1 mb-6 text-sm text-ink-500">Proposal within 24 hours</p>
              <EnquiryForm source={`industry-${industry.slug}`} compact />
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-ink-50">
        <div className="container-x">
          <SectionHeading eyebrow="Recommended services" title={`Services for ${industry.name}`} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {svc.map((s) => (
              <ServiceCard key={s.slug} s={s} />
            ))}
          </div>
        </div>
      </section>

      <WhyChoose />
      <ClientMarquee />

      <section className="section !pt-12">
        <div className="container-x">
          <h2 className="text-center text-xl font-bold">Other industries we serve</h2>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {industries
              .filter((i) => i.slug !== industry.slug)
              .map((i) => (
                <li key={i.slug}>
                  <Link href={`/industries/${i.slug}`} className="inline-flex items-center gap-1.5 rounded-full border border-ink-100 px-4 py-2 text-sm hover:border-brand-600 hover:text-brand-600">
                    {i.name} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
