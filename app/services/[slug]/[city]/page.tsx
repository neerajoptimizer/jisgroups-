import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getService, services } from "@/lib/services";
import { cities, getCity } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string; city: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.flatMap((s) => cities.map((c) => ({ slug: s.slug, city: c.slug })));
}

export async function generateMetadata({ params }: Props) {
  const { slug, city: citySlug } = await params;
  const s = getService(slug);
  const c = getCity(citySlug);
  if (!s || !c) return {};
  return buildMetadata({
    title: `${s.name} in ${c.name} | Verified ${s.shortName}`,
    description: `Hire trusted ${s.keyword} in ${c.name}, ${c.state}. Verified, trained & supervised staff for ${c.areas.slice(0, 3).join(", ")} and across ${c.name}. Proposal in 24 hrs — call 0120-4216290.`,
    path: `/services/${s.slug}/${c.slug}`,
    image: s.image,
    keywords: [`${s.keyword} in ${c.name}`, `${s.keyword} ${c.name}`, `${s.shortName.toLowerCase()} in ${c.name}`, `${s.keyword} company in ${c.name}`, `${s.keyword} near me`],
  });
}

export default async function ServiceCityPage({ params }: Props) {
  const { slug, city: citySlug } = await params;
  const service = getService(slug);
  const city = getCity(citySlug);
  if (!service || !city) notFound();
  return <ServiceDetail service={service} city={city} />;
}
