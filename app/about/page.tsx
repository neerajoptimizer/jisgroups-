import Image from "next/image";
import { Eye, Handshake, Target } from "lucide-react";
import { ClientMarquee, CtaBand, HowItWorks, PageHero, SectionHeading, StatsBar, TestimonialBlock, WhyChoose } from "@/components/sections";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us — PAN India Facility Management & Manpower Outsourcing Company",
  description:
    "JIS Business Solutions Pvt. Ltd. is a Noida-headquartered facility management and manpower outsourcing company with over a decade of experience and a PAN India presence.",
  path: "/about",
  image: "/images/team.jpg",
});

const values = [
  { icon: Target, title: "Our Mission", text: "To help organisations run secure, clean and efficiently managed premises by providing reliable, verified and well-supervised people — without the hassle of direct hiring or compliance burden." },
  { icon: Eye, title: "Our Vision", text: "To be India's most trusted operations partner for facility and workforce services, known for discipline, transparency and quick response." },
  { icon: Handshake, title: "Our Promise", text: "No placement fee. No compliance burden. Just reliable people — backed by a 24×7 operations desk and a dedicated account manager." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About JIS"
        title="A Trusted Partner for Your Facility & Manpower Needs"
        subtitle="Over a decade of experience. PAN India presence. One accountable partner for security, housekeeping and support staffing."
        crumbs={[{ name: "About Us", path: "/about" }]}
        image="/images/team.jpg"
      />

      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="h2 mt-3">JIS Business Solutions Pvt. Ltd.</h2>
            <div className="lead mt-6 space-y-5">
              <p>
                JIS Business Solutions Pvt. Ltd. is one of India&apos;s leading facility management and manpower outsourcing companies, offering security,
                housekeeping, and support staffing solutions tailored for corporates and institutions.
              </p>
              <p>
                With over a decade of experience and a PAN India presence, we help organisations maintain secure, clean, and efficiently managed premises —
                without the hassle of direct hiring or compliance burden.
              </p>
              <p>
                We are not a placement agency. We work only with verified organisations seeking long-term service partnerships. Our staff remain on our rolls
                — we recruit, verify, train, supervise, pay and replace them — so you get dependable service, every shift.
              </p>
              <p>
                Headquartered in Sector-63, Noida, we serve corporate offices, hotels, builders, schools and universities, hospitals, malls and government
                institutions across India.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-3xl">
              <Image src="/images/team.jpg" alt="JIS Business Solutions team" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-3xl">
              <Image src="/images/gallery/security-guards.jpg" alt="JIS security guards" fill sizes="25vw" className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-3xl">
              <Image src="/images/gallery/housekeeping-team.jpg" alt="JIS housekeeping team" fill sizes="25vw" className="object-cover" />
            </div>
          </div>
        </div>
        <div className="container-x mt-16">
          <StatsBar />
        </div>
      </section>

      <section className="section bg-ink-950">
        <div className="container-x">
          <SectionHeading light eyebrow="What drives us" title="Mission, Vision & Promise" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <v.icon className="h-10 w-10 text-brand-500" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold text-white">{v.title}</h3>
                <p className="mt-3 text-white/70">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChoose />
      <HowItWorks />
      <TestimonialBlock />
      <ClientMarquee />
      <CtaBand />
    </>
  );
}
