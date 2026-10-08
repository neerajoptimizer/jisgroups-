# JIS Business Solutions — Website

Next.js 16 (App Router) + Tailwind CSS 4 + TypeScript website for **JIS Business Solutions Pvt. Ltd.** — security, housekeeping, facility management and manpower outsourcing, built for PAN India SEO.

## Quick start

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL and an enquiry delivery option
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Pages (≈320, all statically generated)

| Route | Purpose |
| --- | --- |
| `/` | Home: hero + proposal form, stats, clients, about, services, why JIS, industries, testimonial, process, PAN India cities, gallery, map + quote form, FAQ, blog |
| `/about`, `/clients`, `/gallery`, `/contact`, `/get-a-quote`, `/careers`, `/faq` | Company pages |
| `/services`, `/services/[service]` | 6 detailed service pages |
| `/services/[service]/[city]` | 240 local landing pages, e.g. `/services/security-guard-services/mumbai` |
| `/industries`, `/industries/[industry]` | 7 industry pages |
| `/locations`, `/locations/[city]` | 40 city hub pages across all regions |
| `/blog`, `/blog/[slug]` | Guides for admin & facility managers |
| `/privacy-policy`, `/terms`, 404 | Legal & error pages |

## SEO built in

- Per-page `<title>`, meta description, keywords, canonical URL, Open Graph & Twitter cards
- JSON-LD: `Organization`/`LocalBusiness`, `WebSite`, `Service` (with `areaServed` city), `BreadcrumbList`, `FAQPage`, `BlogPosting`
- `sitemap.xml` (all ~311 URLs), `robots.txt`, web manifest, favicons
- Internal-linking mesh: mega-menus, footer "popular searches", nearby-city and other-service links on every local page
- Fast: static HTML, `next/image` (AVIF/WebP), `next/font`, no client JS except header & forms

## Editing content

All copy lives in `lib/`:

- `lib/site.ts` — company info, phone, emails, address, clients, gallery, testimonials, stats
- `lib/services.ts` — services, roles, benefits, process, FAQs
- `lib/industries.ts` — industries
- `lib/locations.ts` — cities (add a city here → its city page + 6 service pages + sitemap entries are generated automatically)
- `lib/blog.ts` — blog articles
- `lib/local.ts` — templates for city-specific copy

## Enquiry forms

Forms post to `/api/enquiry` (validation, honeypot, basic rate limit). Configure delivery in `.env.local`:

- **Resend email**: `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL`, `ENQUIRY_FROM_EMAIL`
- **Webhook** (Zapier / Make / Google Sheets / CRM): `ENQUIRY_WEBHOOK_URL`

Without either, submissions are logged to the server console only.

## Before going live

- Set `NEXT_PUBLIC_SITE_URL` to the real domain and add the site to Google Search Console (`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`), then submit `/sitemap.xml`
- Confirm the PIN code (the old site shows both 201307 and 201309) in `lib/site.ts`
- Update the Google Business Profile with the same name, address and phone (NAP) used on the site
