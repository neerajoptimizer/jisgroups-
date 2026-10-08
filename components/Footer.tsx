import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { featuredCities } from "@/lib/locations";

const company = [
  { href: "/about", label: "About Us" },
  { href: "/clients", label: "Our Clients" },
  { href: "/gallery", label: "Gallery" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Insights & Blog" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact Us" },
  { href: "/get-a-quote", label: "Get a Quote" },
];

function Col({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-semibold tracking-widest text-white uppercase">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-ink-300 transition hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="border-b border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
          <div>
            <p className="font-display text-2xl font-bold text-white">Need staff on site this week?</p>
            <p className="mt-1 text-sm text-ink-300">Get a customised staffing proposal within 24 hours. No placement fee.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/get-a-quote" className="btn-primary">
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={site.phoneHref} className="btn-ghost">
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="rounded-xl bg-white p-1.5">
              <Image src="/images/logo.png" alt="JIS logo" width={52} height={52} className="h-12 w-12" />
            </span>
            <span className="font-display text-lg font-bold text-white">{site.name}</span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed">
            One of India&apos;s trusted facility management and manpower outsourcing companies — providing security,
            housekeeping and support staffing solutions to corporates and institutions with a PAN India presence.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
              <address className="not-italic">{site.address.full}</address>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
              <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
              <span className="flex flex-col">
                {site.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="hover:text-white">{e}</a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <Col title="Services" links={services.map((s) => ({ href: `/services/${s.slug}`, label: s.name }))} />
        </div>
        <div className="lg:col-span-2">
          <Col title="Industries" links={industries.map((i) => ({ href: `/industries/${i.slug}`, label: i.name }))} />
        </div>
        <div className="lg:col-span-2">
          <Col title="Company" links={company} />
        </div>
        <div className="lg:col-span-2">
          <Col
            title="Top Cities"
            links={[
              ...featuredCities.slice(0, 9).map((c) => ({ href: `/locations/${c.slug}`, label: `Services in ${c.name}` })),
              { href: "/locations", label: "View all cities →" },
            ]}
          />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6">
          <p className="text-xs leading-relaxed text-ink-500">
            <span className="font-semibold text-ink-300">Popular searches: </span>
            {featuredCities.slice(0, 8).flatMap((c) =>
              services.slice(0, 2).map((s) => (
                <Link key={`${s.slug}-${c.slug}`} href={`/services/${s.slug}/${c.slug}`} className="mr-3 inline-block hover:text-white">
                  {s.shortName} in {c.name}
                </Link>
              )),
            )}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs md:flex-row">
          <p>© {new Date().getFullYear()} {site.name} All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
