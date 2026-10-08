import { CtaBand, Faq, PageHero } from "@/components/sections";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "FAQs — Security, Housekeeping & Manpower Outsourcing",
  description: "Answers to common questions about JIS security guard services, housekeeping, facility management, manpower outsourcing, pricing, compliance and deployment.",
  path: "/faq",
});

const general = [
  { q: "Is JIS a placement agency?", a: "No. JIS Business Solutions is a facility management and manpower outsourcing company. Staff remain on JIS rolls and we manage them throughout the contract. There is no placement fee." },
  { q: "Where do you provide services?", a: "We are headquartered in Noida (Delhi NCR) and have PAN India service capability, including metros, state capitals and industrial cities." },
  { q: "How is pricing calculated?", a: "Pricing depends on the role, number of staff, shift length, applicable state minimum wages, statutory contributions (PF, ESIC, bonus) and whether consumables or equipment are included. We share a transparent, itemised proposal within 24 hours." },
  { q: "What is your minimum order?", a: "We work with organisations of all sizes — from a single guard post to multi-site contracts. Share your requirement and we will advise the best engagement model." },
  { q: "How do you ensure quality?", a: "Through verified hiring, role-based training, on-site supervisors, surprise checks, daily reporting and monthly review meetings with a dedicated account manager." },
];

export default function FaqPage() {
  const all = [...general, ...services.flatMap((s) => s.faqs)];
  return (
    <>
      <PageHero eyebrow="Help centre" title="Frequently Asked Questions" subtitle="Everything you need to know about working with JIS." crumbs={[{ name: "FAQs", path: "/faq" }]} />
      <Faq faqs={all} title="Your questions, answered" />
      <CtaBand />
    </>
  );
}
