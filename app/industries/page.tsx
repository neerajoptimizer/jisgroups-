import { CtaBand, HowItWorks, IndustriesGrid, PageHero, TestimonialBlock } from "@/components/sections";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Industries We Serve — Corporate, Hospitality, Healthcare, Education & More",
  description:
    "JIS provides security, housekeeping and facility staff to corporate offices, hotels, construction sites, schools, hospitals, malls and government institutions across India.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Trusted Partner Across Multiple Industries"
        subtitle="We cater to diverse sectors that demand high reliability, discipline, and professional workforce management."
        crumbs={[{ name: "Industries", path: "/industries" }]}
      />
      <section className="section">
        <div className="container-x">
          <IndustriesGrid />
        </div>
      </section>
      <TestimonialBlock />
      <HowItWorks />
      <CtaBand />
    </>
  );
}
