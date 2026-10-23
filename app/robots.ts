import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/thank-you"] },
      // Crawlers that add load without sending customers (SEO tools, AI training scrapers).
      {
        userAgent: ["AhrefsBot", "SemrushBot", "MJ12bot", "DotBot", "PetalBot", "Bytespider", "DataForSeoBot", "BLEXBot", "GPTBot", "CCBot", "ClaudeBot", "anthropic-ai", "Google-Extended", "PerplexityBot", "Amazonbot", "meta-externalagent"],
        disallow: "/",
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
