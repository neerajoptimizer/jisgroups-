import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone, ShieldCheck } from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import {
  ClientMarquee,
  Faq,
  HowItWorks,
  IndustriesGrid,
  MapEmbed,
  SectionHeading,
  ServicesGrid,
  StatsBar,
  TestimonialBlock,
  WhyChoose,
} from "@/components/sections";
import { gallery, site } from "@/lib/site";
import { cities, regions } from "@/lib/locations";
import { posts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Security, Housekeeping & Facility Management Services in India | JIS Business Solutions",
  description:
    "Hire verified security guards, housekeeping staff, lift operators and admin support across India. JIS Business Solutions — PAN India facility management & manpower outsourcing. Proposal in 24 hours, no placement fee.",
  path: "/",
});

const homeFaqs = [
  {
    q: "What services does JIS Business Solutions provide?",
    a: "We provide security guard services, housekeeping services, integrated facility management, manpower outsourcing, lift operators and admin & office support staff for corporates and institutions across India.",
  },
  {
    q: "Do you provide services outside Delhi NCR?",
    a: "Yes. Our head office is in Noida, and we have PAN India service capability — deploying trained staff in metros, tier-2 cities and industrial towns with the same SOPs and centralised billing.",
  },
  {
    q: "How fast will I get a proposal?",
    a: "Our business team contacts you within 24 hours with a customised proposal covering staff profiles, cost structure and a deployment plan.",
  },
  {
    q: "Do you charge a placement fee?",
    a: "No. JIS is not a placement agency. Staff remain on our rolls and we manage them for the duration of the contract — there is no placement fee and no compliance burden on you.",
  },
  {
    q: "Are your staff verified and trained?",
    a: "Yes. Every staff member is background-checked and trained for their role — including security procedures, hygiene and safety standards, and customer-facing etiquette.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink-950">
        <Image src="/images/gallery/jis-team.jpg" alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink-950 via-ink-950/95 to-brand-800/70" />
        <div className="container-x grid items-center gap-12 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-white/90 uppercase">
              <ShieldCheck className="h-4 w-4 text-brand-500" /> PAN India Facility & Manpower Partner
            </p>
            <h1 className="mt-6 text-4xl leading-[1.1] font-extrabold text-white sm:text-5xl xl:text-6xl">
              Get a Customised <span className="text-brand-500">Staffing Proposal</span> Within 24 Hours.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              Verified security guards, housekeeping staff, lift operators and admin support for corporates and institutions
              across India. <strong className="text-white">No placement fee. No compliance burden. Just reliable people.</strong>
            </p>
            <ul className="mt-8 grid max-w-xl grid-cols-2 gap-3">
              {["Security", "Housekeeping", "Lift Operators", "Admin Support"].map((s) => (
                <li key={s} className="flex items-center gap-2 font-semibold text-white">
                  <CheckCircle2 className="h-5 w-5 text-brand-500" aria-hidden="true" /> {s}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/services" className="btn-primary">
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={site.phoneHref} className="btn-ghost">
                <Phone className="h-4 w-4" /> Call {site.phone}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-ink-800/90 p-6 shadow-2xl backdrop-blur sm:p-8">
              <p className="font-display text-2xl font-bold text-white">Request a Proposal</p>
              <p className="mt-1 mb-6 text-sm text-white/60">Response in 24 hrs · Free site assessment</p>
              <EnquiryForm variant="dark" source="home-hero" compact />
            </div>
          </div>
        </div>
      </section>

      <div className="container-x relative z-10 -mt-px pt-10">
        <StatsBar />
      </div>

      <ClientMarquee />

      {/* ABOUT INTRO */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[6/5] overflow-hidden rounded-3xl">
              <Image src="/images/housekeeping-cafeteria.jpg" alt="JIS housekeeping executive cleaning a corporate cafeteria" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -right-3 -bottom-6 hidden max-w-[240px] rounded-2xl bg-white p-5 shadow-2xl sm:block lg:-right-8">
              <p className="text-sm font-semibold text-ink-900">Not a placement agency.</p>
              <p className="mt-1 text-xs text-ink-500">Long-term service partnerships with verified organisations only.</p>
            </div>
          </div>
          <div>
            <p className="eyebrow">About JIS</p>
            <h2 className="h2 mt-3">A Trusted Partner for Your Facility &amp; Manpower Needs</h2>
            <div className="lead mt-6 space-y-5">
              <p>
                JIS Business Solutions Pvt. Ltd. is one of India&apos;s leading <strong className="text-ink-900">facility management and manpower outsourcing companies</strong>,
                offering <strong className="text-ink-900">security, housekeeping, and support staffing solutions</strong> tailored for corporates and institutions.
              </p>
              <p>
                With over a decade of experience and a <strong className="text-ink-900">PAN India presence</strong>, we help organisations maintain secure, clean,
                and efficiently managed premises — without the hassle of direct hiring or compliance burden.
              </p>
              <p>
                We are <strong className="text-ink-900">not a placement agency</strong>. We work only with verified organisations seeking long-term service partnerships.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary">
                About Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn border border-ink-100 text-ink-900 hover:border-ink-900">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section bg-ink-50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Services"
            title="Comprehensive Facility & Workforce Solutions — Tailored for Every Business"
            text={
              <>
                From security to maintenance, JIS provides <strong className="text-ink-900">complete facility outsourcing solutions</strong> under one roof.
              </>
            }
          />
          <div className="mt-14">
            <ServicesGrid />
          </div>
        </div>
      </section>

      <WhyChoose />

      {/* INDUSTRIES */}
      <section className="section bg-ink-50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Industries"
            title="Trusted Partner Across Multiple Industries"
            text="We cater to diverse sectors that demand high reliability, discipline, and professional workforce management."
          />
          <div className="mt-14">
            <IndustriesGrid />
          </div>
        </div>
      </section>

      <TestimonialBlock />

      <HowItWorks />

      {/* PAN INDIA */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="PAN India Presence"
            title="Security & Facility Services Across India"
            text="Head office in Noida, with deployment capability across metros, state capitals and industrial cities. Find services near you."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((r) => {
              const list = cities.filter((c) => c.region === r);
              if (!list.length) return null;
              return (
                <div key={r} className="rounded-2xl border border-ink-100 p-6">
                  <h3 className="flex items-center gap-2 text-lg font-bold">
                    <MapPin className="h-5 w-5 text-brand-600" aria-hidden="true" /> {r}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                    {list.map((c) => (
                      <li key={c.slug}>
                        <Link href={`/locations/${c.slug}`} className="text-sm text-ink-500 hover:text-brand-600 hover:underline">
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href="/locations" className="btn-primary">
              View all locations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section bg-ink-950">
        <div className="container-x">
          <SectionHeading eyebrow="Gallery" title="Our Teams On Site" light text="Real JIS staff, real client sites — uniformed, trained and on duty." />
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {gallery.slice(0, 8).map((g) => (
              <div key={g.src} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image src={g.src} alt={g.alt} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/gallery" className="btn-ghost">
              View full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT + FORM */}
      <section id="quote" className="grid lg:grid-cols-2">
        <div className="min-h-[420px] bg-ink-100 p-3">
          <MapEmbed className="min-h-[520px]" />
        </div>
        <div className="bg-brand-600 px-4 py-14 sm:px-10 lg:px-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Get a Free Quote for Your Business</h2>
          <p className="mt-3 mb-8 text-white/85">Our business team will contact you within 24 hours with a tailored proposal.</p>
          <EnquiryForm variant="red" source="home-quote" />
        </div>
      </section>

      <Faq faqs={homeFaqs} />

      {/* BLOG */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <SectionHeading eyebrow="Insights" title="Guides for Admin & Facility Managers" center={false} />
            <Link href="/blog" className="inline-flex items-center gap-1 font-semibold text-brand-600">
              All articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
              <article key={p.slug} className="group overflow-hidden rounded-2xl border border-ink-100 bg-white transition hover:shadow-xl hover:shadow-ink-900/5">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={p.image} alt="" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold tracking-wider text-brand-600 uppercase">{p.tags[0]}</p>
                  <h3 className="mt-2 text-lg leading-snug font-bold">
                    <Link href={`/blog/${p.slug}`} className="hover:text-brand-600">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-ink-500">{p.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
