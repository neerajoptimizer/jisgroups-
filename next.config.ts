import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Keep Vercel image-optimisation usage small and bounded (Hobby plan has a monthly cap):
  // one output format, a short list of widths and one quality = a fixed, small set of
  // variants per image, each cached for 31 days so it is generated at most once a month.
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [64, 128, 256, 384],
    qualities: [75],
    minimumCacheTTL: 2678400,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
