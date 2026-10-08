import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Montserrat, Poppins } from "next/font/google";
import { FileText, Phone } from "lucide-react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { organizationSchema, websiteSchema } from "@/lib/seo";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Security, Housekeeping & Facility Management Services in India | JIS Business Solutions",
    template: "%s | JIS Business Solutions",
  },
  description: site.description,
  applicationName: site.shortName,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Business Services",
  keywords: [
    "security guard services",
    "housekeeping services",
    "facility management company",
    "manpower outsourcing",
    "security agency in Noida",
    "housekeeping services in Delhi NCR",
    "facility management services India",
    "lift operator services",
    "JIS Business Solutions",
  ],
  formatDetection: { telephone: true, email: true, address: true },
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    url: site.url,
    title: "JIS Business Solutions — Security, Housekeeping & Facility Management Across India",
    description: site.description,
    images: [{ url: "/images/hero-banner.jpg", width: 945, height: 702, alt: site.name }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#d91414",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="font-sans">
        <a href="#main" className="sr-only z-[100] rounded bg-brand-600 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-2 focus:left-2">
          Skip to content
        </a>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Header />
        <main id="main" className="pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        {/* Mobile sticky action bar */}
        <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-ink-100 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden">
          <a href={site.phoneHref} className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-ink-900">
            <Phone className="h-4 w-4 text-brand-600" /> Call Now
          </a>
          <Link href="/get-a-quote" className="flex items-center justify-center gap-2 bg-brand-600 py-4 text-sm font-semibold text-white">
            <FileText className="h-4 w-4" /> Get Free Quote
          </Link>
        </div>
      </body>
    </html>
  );
}
