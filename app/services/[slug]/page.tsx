import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getService, services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return buildMetadata({
    title: `${s.name} in India — Verified & Trained Staff`,
    description: `${s.summary} PAN India deployment by JIS Business Solutions. Customised proposal within 24 hours.`,
    path: `/services/${s.slug}`,
    image: s.image,
    keywords: [s.keyword, `${s.keyword} company`, `${s.keyword} in India`, `${s.keyword} in Noida`, `${s.keyword} in Delhi NCR`],
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
