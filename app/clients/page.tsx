import Image from "next/image";
import { CtaBand, IndustriesGrid, PageHero, SectionHeading, TestimonialBlock } from "@/components/sections";
import { clients } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Clients — Organisations That Trust JIS",
  description:
    "Real estate developers, schools, institutes, clubs and corporates trust JIS Business Solutions for security, housekeeping and facility management services.",
  path: "/clients",
});

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="Some of Our Clients"
        subtitle="From real estate developers and premium clubs to schools and national institutes — organisations rely on JIS every day."
        crumbs={[{ name: "Clients", path: "/clients" }]}
      />
      <section className="section">
        <div className="container-x">
          <ul className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {clients.map((c) => (
              <li key={c.name} className="flex flex-col items-center justify-center rounded-2xl border border-ink-100 bg-white p-8 transition hover:shadow-xl hover:shadow-ink-900/5">
                <Image src={c.logo} alt={`${c.name} logo`} width={200} height={110} className="h-24 w-auto object-contain" />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <TestimonialBlock />
      <section className="section bg-ink-50">
        <div className="container-x">
          <SectionHeading eyebrow="Sectors" title="Industries our clients come from" />
          <div className="mt-12">
            <IndustriesGrid />
          </div>
        </div>
      </section>
      <CtaBand title="Join the organisations that trust JIS" />
    </>
  );
}
