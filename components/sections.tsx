import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  FileText,
  MapPin,
  Phone,
  Quote,
  Rocket,
} from "lucide-react";
import { banners, clients, site, stats, steps, testimonials, whyChoose } from "@/lib/site";
import { services, type Service } from "@/lib/services";
import { industries } from "@/lib/industries";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items, light = false }: { items: Crumb[]; light?: boolean }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(all)} />
      <nav aria-label="Breadcrumb">
        <ol className={`flex flex-wrap items-center gap-1 text-sm ${light ? "text-white/70" : "text-ink-500"}`}>
          {all.map((c, i) => (
            <li key={c.path} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
              {i === all.length - 1 ? (
                <span aria-current="page" className={light ? "text-white" : "text-ink-900"}>
                  {c.name}
                </span>
              ) : (
                <Link href={c.path} className="hover:underline">
                  {c.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

export function PageHero({
  title,
  subtitle,
  crumbs,
  image = "/images/gallery/jis-team.jpg",
  eyebrow,
  children,
}: {
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
  image?: string;
  eyebrow?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      <Image src={image} alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/90 to-brand-800/60" />
      <div className="container-x py-16 sm:py-20 lg:py-24">
        <Breadcrumbs items={crumbs} light />
        {eyebrow && <p className="eyebrow mt-8 text-brand-500">{eyebrow}</p>}
        <h1 className={`${eyebrow ? "mt-3" : "mt-8"} max-w-4xl text-4xl leading-tight font-extrabold text-white sm:text-5xl lg:text-6xl`}>
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/75">{subtitle}</p>}
        {children ?? (
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/get-a-quote" className="btn-primary">
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={site.phoneHref} className="btn-ghost">
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  center = true,
  light = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  text?: React.ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && <p className={`eyebrow ${light ? "text-brand-500" : ""}`}>{eyebrow}</p>}
      <h2 className={`h2 mt-3 ${light ? "text-white" : ""}`}>{title}</h2>
      {text && <p className={`lead mt-4 ${light ? "text-white/70" : ""}`}>{text}</p>}
    </div>
  );
}

export function StatsBar() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink-100 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-white p-6 text-center">
          <p className="font-display text-3xl font-extrabold text-brand-600 sm:text-4xl">{s.value}</p>
          <p className="mt-1 text-sm text-ink-500">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

export function ServiceCard({ s, href }: { s: Service; href?: string }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-ink-900 text-white shadow-xl shadow-ink-900/10 transition hover:-translate-y-1">
      <div className="relative h-44 overflow-hidden">
        <Image src={s.image} alt={s.name} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 to-transparent" />
        <span className="absolute bottom-4 left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600">
          <Icon name={s.icon} className="h-6 w-6" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-white">
          <Link href={href ?? `/services/${s.slug}`} className="after:absolute after:inset-0">
            {s.name}
          </Link>
        </h3>
        <ul className="mt-4 flex-1 space-y-2.5">
          {s.highlights.slice(0, 4).map((h) => (
            <li key={h} className="flex gap-2.5 text-sm text-white/80">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500 group-hover:gap-2.5">
          Learn more <ArrowRight className="h-4 w-4 transition-all" />
        </span>
      </div>
    </article>
  );
}

export function ServicesGrid({ cityLink }: { cityLink?: string }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <ServiceCard key={s.slug} s={s} href={cityLink ? `/services/${s.slug}/${cityLink}` : undefined} />
      ))}
    </div>
  );
}

export function IndustriesGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {industries.map((i) => (
        <Link
          key={i.slug}
          href={`/industries/${i.slug}`}
          className="group relative flex flex-col rounded-2xl border border-ink-100 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-ink-900/5"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-ink-900 text-white transition group-hover:bg-brand-600">
            <Icon name={i.icon} className="h-7 w-7" />
          </span>
          <h3 className="mt-5 text-lg font-bold">{i.name}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{i.summary}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
            Explore <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      ))}
      <Link
        href="/get-a-quote"
        className="flex flex-col justify-between rounded-2xl bg-brand-600 p-6 text-white transition hover:-translate-y-1 hover:bg-brand-700"
      >
        <p className="font-display text-xl font-bold">Don&apos;t see your industry?</p>
        <p className="mt-2 text-sm text-white/85">We customise staffing for warehouses, factories, residential societies, events and more.</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">
          Talk to us <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </div>
  );
}

export function WhyChoose({ image = "/images/team.jpg" }: { image?: string }) {
  return (
    <section className="section">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">Why JIS</p>
          <h2 className="h2 mt-3">Why Choose JIS Business Solutions</h2>
          <p className="lead mt-5">
            Partnering with JIS means more than hiring manpower — it means having a <strong className="text-ink-900">reliable operations partner</strong> who
            understands corporate standards, compliance, and quality assurance.
          </p>
          <Link href="/contact" className="btn-primary mt-8">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative lg:col-span-4">
          <div className="relative aspect-square overflow-hidden rounded-3xl">
            <Image src={image} alt="JIS Business Solutions security and housekeeping team" fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-2xl bg-brand-600 px-6 py-4 text-white shadow-xl sm:-left-6">
            <p className="font-display text-3xl font-extrabold">10+</p>
            <p className="text-xs font-medium tracking-wide uppercase">Years of trust</p>
          </div>
        </div>
        <ol className="divide-y divide-ink-100 lg:col-span-4">
          {whyChoose.map((w, i) => (
            <li key={w.title} className="py-4 first:pt-0">
              <p className="font-display text-sm font-bold text-brand-600">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-1 text-lg font-semibold">{w.title}</h3>
              <p className="mt-1 text-sm text-ink-500">{w.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const icons = [ClipboardList, FileText, Rocket];
  return (
    <section className="section bg-ink-50">
      <div className="container-x">
        <SectionHeading eyebrow="Process" title="How It Works" text="From first call to staff on site — a simple, transparent three-step process." />
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => {
            const I = icons[i];
            return (
              <li key={s.title} className="relative rounded-2xl bg-white p-8 shadow-sm">
                <span className="absolute top-6 right-6 font-display text-6xl font-extrabold text-ink-100">{i + 1}</span>
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <I className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-ink-500">{s.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function LogoRow({ items, reverse = false }: { items: typeof clients; reverse?: boolean }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <ul
        className={`flex w-max items-center gap-5 py-2 hover:[animation-play-state:paused] ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        // ~4.5s per logo keeps the scroll calm regardless of how many logos there are
        style={{ animationDuration: `${items.length * 4.5}s` }}
      >
        {row.map((c, i) => (
          <li
            key={`${c.name}-${i}`}
            aria-hidden={i >= items.length}
            className="flex h-24 w-48 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-ink-100 bg-white p-2 shadow-sm"
          >
            <Image src={c.logo} alt={i < items.length ? `${c.name} logo` : ""} width={180} height={90} className="max-h-20 w-auto object-contain" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ClientMarquee({ title = "Some of our clients" }: { title?: string }) {
  const half = Math.ceil(clients.length / 2);
  return (
    <section className="section border-y border-ink-100 bg-ink-50 !py-14">
      <div className="container-x flex flex-col items-center gap-2 text-center">
        <p className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">{title}</p>
        <p className="text-sm text-ink-500">{clients.length}+ organisations across corporate, hospitality, education, government and real estate</p>
      </div>
      <div className="mt-10 space-y-4">
        <LogoRow items={clients.slice(0, half)} />
        <LogoRow items={clients.slice(half)} reverse />
      </div>
      <div className="mt-8 text-center">
        <Link href="/clients" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline">
          View all clients <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

export function TestimonialBlock() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Testimonials" title="Trusted by Businesses Nationwide" text="What admin heads, facility managers and security leaders say about working with JIS." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure
              key={t.org}
              className={`relative flex flex-col overflow-hidden rounded-3xl p-8 sm:p-10 ${i === 0 || i === 3 ? "bg-ink-900 text-white" : "border border-ink-100 bg-white"}`}
            >
              <Quote className={`absolute top-6 right-6 h-16 w-16 ${i === 0 || i === 3 ? "text-white/10" : "text-brand-100"}`} aria-hidden="true" />
              <blockquote className={`relative flex-1 pr-14 font-display text-lg leading-relaxed sm:text-xl ${i === 0 || i === 3 ? "text-white" : "text-ink-900"}`}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <Image src={t.photo} alt="" width={56} height={56} className="h-14 w-14 rounded-full object-cover ring-2 ring-brand-600" />
                <span>
                  <span className="block font-semibold">{t.author}</span>
                  <span className={`text-sm ${i === 0 || i === 3 ? "text-white/60" : "text-ink-500"}`}>{t.org}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BannerStrip() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {banners.map((b) => (
        <Link key={b.src} href="/get-a-quote" className="group relative block aspect-[925/698] overflow-hidden rounded-2xl shadow-lg shadow-ink-900/10">
          <Image src={b.src} alt={b.alt} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
        </Link>
      ))}
    </div>
  );
}

export function Faq({ faqs, title = "Frequently Asked Questions" }: { faqs: { q: string; a: string }[]; title?: string }) {
  return (
    <section className="section bg-ink-50">
      <JsonLd data={faqSchema(faqs)} />
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">FAQs</p>
          <h2 className="h2 mt-3">{title}</h2>
          <p className="lead mt-4">Can&apos;t find your answer? Call us on {site.phone} or send us your requirement.</p>
          <Link href="/contact" className="btn-primary mt-6">
            Ask a question
          </Link>
        </div>
        <div className="space-y-3 lg:col-span-8">
          {faqs.map((f, i) => (
            <details key={f.q} className="group rounded-2xl border border-ink-100 bg-white p-6 open:shadow-lg open:shadow-ink-900/5" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 leading-relaxed text-ink-500">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ title = "Get a Free Quote for Your Business", text }: { title?: string; text?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-600">
      <div className="absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-brand-500 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 -z-10 h-96 w-96 rounded-full bg-brand-800 blur-3xl" />
      <div className="container-x flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
          <p className="mt-3 text-lg text-white/85">
            {text ?? "Our business team will contact you within 24 hours with a tailored proposal. No placement fee. No compliance burden. Just reliable people."}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/get-a-quote" className="btn-dark">
            Book Now <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={site.phoneHref} className="btn-white">
            <Phone className="h-4 w-4" /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export function TrustPoints({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((h) => (
        <li key={h} className="flex items-start gap-3 rounded-xl bg-ink-50 p-4 text-sm font-medium text-ink-900">
          <BadgeCheck className="h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
          {h}
        </li>
      ))}
    </ul>
  );
}

export function CityPills({ cities, serviceSlug }: { cities: { slug: string; name: string }[]; serviceSlug?: string }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {cities.map((c) => (
        <li key={c.slug}>
          <Link
            href={serviceSlug ? `/services/${serviceSlug}/${c.slug}` : `/locations/${c.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-ink-100 bg-white px-4 py-2 text-sm text-ink-700 transition hover:border-brand-600 hover:text-brand-600"
          >
            <MapPin className="h-3.5 w-3.5 text-brand-600" aria-hidden="true" />
            {c.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <iframe
      title={`${site.name} location map`}
      src={site.mapEmbed}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={`h-full min-h-[380px] w-full rounded-2xl border-0 ${className}`}
    />
  );
}
