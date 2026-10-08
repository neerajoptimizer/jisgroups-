import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Faq, MapEmbed, PageHero } from "@/components/sections";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us — Call 0120-4216290",
  description: `Contact JIS Business Solutions Pvt. Ltd., ${site.address.full}. Call ${site.phone} or email ${site.emails[0]} for security, housekeeping and facility management services.`,
  path: "/contact",
});

const cards = [
  { icon: Phone, title: "Call us", lines: [site.phone], href: site.phoneHref },
  { icon: Mail, title: "Email us", lines: [...site.emails], href: `mailto:${site.emails[0]}` },
  { icon: MapPin, title: "Head office", lines: [site.address.full], href: site.mapLink },
  { icon: Clock, title: "Working hours", lines: [site.hours] },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Requirement"
        subtitle="Our business team will contact you within 24 hours with a tailored proposal."
        crumbs={[{ name: "Contact Us", path: "/contact" }]}
      >
        <span />
      </PageHero>

      <section className="section">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => {
              const inner = (
                <>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                    <c.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-lg font-bold">{c.title}</h2>
                  {c.lines.map((l) => (
                    <p key={l} className="mt-1 text-sm break-words text-ink-500">
                      {l}
                    </p>
                  ))}
                </>
              );
              return c.href ? (
                <a key={c.title} href={c.href} className="card" {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  {inner}
                </a>
              ) : (
                <div key={c.title} className="card">
                  {inner}
                </div>
              );
            })}
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl bg-ink-900 p-6 sm:p-10">
              <h2 className="text-3xl font-extrabold text-white">Send us your requirement</h2>
              <p className="mt-2 mb-8 text-white/70">Security, housekeeping, facility management or manpower — tell us what you need.</p>
              <EnquiryForm variant="dark" source="contact" />
            </div>
            <div className="flex flex-col">
              <MapEmbed className="flex-1" />
              <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className="btn-dark mt-4 self-start">
                <MapPin className="h-4 w-4" /> Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <Faq
        faqs={[
          { q: "How soon will you respond to my enquiry?", a: "Our business team responds within 24 hours with a tailored proposal. For urgent requirements, call us directly on 0120-4216290." },
          { q: "I am looking for a job. Whom should I contact?", a: "Please visit our Careers page and submit your details. We are not a placement agency and do not charge any fee from candidates." },
          { q: "Do you offer a free site visit?", a: "Yes. For security and facility management contracts we offer a free site assessment before finalising the proposal." },
        ]}
      />
    </>
  );
}
