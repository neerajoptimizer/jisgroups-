import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { cities } from "@/lib/locations";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const u = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly") => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    u("/", 1, "weekly"),
    u("/services", 0.9, "weekly"),
    u("/get-a-quote", 0.9),
    u("/contact", 0.8),
    u("/about", 0.7),
    u("/industries", 0.7),
    u("/locations", 0.8, "weekly"),
    u("/clients", 0.6),
    u("/gallery", 0.5),
    u("/careers", 0.6, "weekly"),
    u("/faq", 0.6),
    u("/blog", 0.6, "weekly"),
    u("/privacy-policy", 0.2, "yearly"),
    u("/terms", 0.2, "yearly"),
    ...services.map((s) => u(`/services/${s.slug}`, 0.9)),
    ...industries.map((i) => u(`/industries/${i.slug}`, 0.7)),
    ...cities.map((c) => u(`/locations/${c.slug}`, c.hq ? 0.9 : 0.8)),
    ...services.flatMap((s) => cities.map((c) => u(`/services/${s.slug}/${c.slug}`, c.hq ? 0.8 : 0.7))),
    ...posts.map((p) => ({ ...u(`/blog/${p.slug}`, 0.6), lastModified: new Date(p.date) })),
  ];
}
