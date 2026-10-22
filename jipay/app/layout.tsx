import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "JIPAY — Payment Gateway Solution | All Payment Gateways, One Partner",
  description: site.description,
  keywords: [
    "payment gateway solution",
    "payment gateway India",
    "payment gateway onboarding",
    "UPI payment gateway",
    "payout solution",
    "JIPAY",
  ],
  alternates: { canonical: "/" },
  icons: { icon: "/logo.jpg", apple: "/logo.jpg" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: "JIPAY — Every Payment Gateway, One Partner",
    description: site.description,
    images: [{ url: "/logo.jpg", width: 1254, height: 1254, alt: "JIPAY logo" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#05060c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
