import type { Metadata } from "next";
import { site } from "./site";

export const absoluteUrl = (path = "/") => `${site.url}${path === "/" ? "" : path}`;

export function buildMetadata({
  title,
  description,
  path,
  image = "/images/hero-banner.jpg",
  keywords,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type,
      siteName: site.name,
      locale: "en_IN",
      images: [{ url: image, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

const orgId = `${site.url}/#organization`;

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": orgId,
  name: site.name,
  alternateName: [site.shortName, site.brand, "JIS"],
  url: site.url,
  logo: absoluteUrl("/images/logo.png"),
  image: absoluteUrl("/images/hero-banner.jpg"),
  description: site.description,
  telephone: "+91-120-4216290",
  email: site.emails[0],
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  areaServed: { "@type": "Country", name: "India" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "18:30",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-120-4216290",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  hasMap: site.mapLink,
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  publisher: { "@id": orgId },
  inLanguage: "en-IN",
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.path),
  })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const serviceSchema = ({
  name,
  description,
  path,
  area,
}: {
  name: string;
  description: string;
  path: string;
  area?: { name: string; state: string };
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  serviceType: name,
  description,
  url: absoluteUrl(path),
  provider: { "@id": orgId },
  areaServed: area
    ? {
        "@type": "City",
        name: area.name,
        containedInPlace: { "@type": "State", name: area.state },
      }
    : { "@type": "Country", name: "India" },
});

export const articleSchema = ({
  title,
  description,
  path,
  image,
  date,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  date: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  image: absoluteUrl(image),
  datePublished: date,
  dateModified: date,
  mainEntityOfPage: absoluteUrl(path),
  author: { "@type": "Organization", name: site.name, url: site.url },
  publisher: { "@id": orgId },
});
