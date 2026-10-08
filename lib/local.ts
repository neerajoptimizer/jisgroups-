import type { City } from "./locations";
import { cities } from "./locations";
import type { Service } from "./services";
import { services } from "./services";

const idx = (city: City, service?: Service) =>
  cities.findIndex((c) => c.slug === city.slug) + (service ? services.findIndex((s) => s.slug === service.slug) : 0);

const list = (arr: string[]) => (arr.length < 2 ? arr.join("") : `${arr.slice(0, -1).join(", ")} and ${arr[arr.length - 1]}`);

export function serviceCityIntro(service: Service, city: City): string[] {
  const areas = list(city.areas.slice(0, 4));
  const k = service.keyword;
  const variants = [
    [
      `Looking for reliable ${k} in ${city.name}? JIS Business Solutions Pvt. Ltd. deploys verified, trained and uniformed staff for businesses across ${city.name}, ${city.state} — from ${areas} to every major commercial and industrial pocket of the city.`,
      `${city.name} is home to ${city.economy}. These organisations need people they can trust on the ground every single day. Our ${service.shortName.toLowerCase()} teams follow the same SOPs, supervision and reporting we use for our corporate clients nationwide, with a dedicated account manager for your ${city.name} sites.`,
    ],
    [
      `JIS Business Solutions provides professional ${k} in ${city.name} for corporates, institutions and commercial establishments. Whether you operate a single office in ${city.areas[0]} or multiple sites across ${list(city.areas.slice(1, 5))}, we deliver trained staff with complete documentation and round-the-clock support.`,
      `With demand driven by ${city.economy}, businesses in ${city.name} need a partner that can deploy fast and replace quickly. That is exactly what JIS does — a customised proposal within 24 hours and staff on site within days, with no placement fee.`,
    ],
    [
      `Businesses in ${city.name} trust JIS for ${k} that is dependable, compliant and easy to manage. Our verified workforce serves clients in ${areas} and surrounding areas of ${city.state}, backed by a 24×7 operations desk.`,
      `From ${city.economy}, every ${city.name} facility has different needs. We start with a free site assessment, design a deployment plan around your shifts and footfall, and take complete responsibility for wages, statutory compliance and replacements.`,
    ],
  ];
  return variants[idx(city, service) % variants.length];
}

export function cityIntro(city: City): string[] {
  return [
    `JIS Business Solutions Pvt. Ltd. offers end-to-end security, housekeeping, facility management and manpower outsourcing services in ${city.name}, ${city.state}. ${
      city.hq
        ? `Our head office is right here in ${city.name}, so our operations team is never far from your site.`
        : `Backed by our head office in Noida and our PAN India operations network, we serve clients across ${city.name} with the same quality standards.`
    }`,
    `${city.name}'s economy is powered by ${city.economy}. We support these organisations with verified, trained and uniformed staff — from security guards and lady guards to housekeeping executives, lift operators, receptionists and facility supervisors — across ${list(city.areas)}.`,
  ];
}

export function serviceCityFaqs(service: Service, city: City) {
  return [
    {
      q: `How much do ${service.keyword} cost in ${city.name}?`,
      a: `Pricing depends on the number of staff, shift duration, skill level and the minimum wages notified for ${city.state}. Share your requirement and we will send a transparent, itemised proposal within 24 hours.`,
    },
    {
      q: `Which areas of ${city.name} do you cover?`,
      a: `We cover all of ${city.name}, including ${list(city.areas)}, and nearby industrial and residential zones.`,
    },
    {
      q: `How quickly can JIS deploy ${service.shortName.toLowerCase()} in ${city.name}?`,
      a: `You receive a customised proposal within 24 hours. Once the work order is confirmed, verified staff are typically deployed within a few days, depending on headcount.`,
    },
    {
      q: `Are your ${service.shortName.toLowerCase()} staff in ${city.name} verified?`,
      a: `Yes. Every staff member is background-checked and trained before deployment, and works under a supervisor with regular site checks and reporting.`,
    },
    ...service.faqs.slice(0, 2),
  ];
}

export function cityFaqs(city: City) {
  return [
    {
      q: `Do you provide security guards and housekeeping staff in ${city.name}?`,
      a: `Yes. JIS provides security guards, housekeeping staff, facility management teams, lift operators and admin support staff across ${city.name}, ${city.state}.`,
    },
    {
      q: `Can you manage multiple sites in ${city.name} and other cities?`,
      a: `Yes. With PAN India capability, we manage multi-site contracts with centralised billing, a single account manager and consistent SOPs across all locations.`,
    },
    {
      q: `How do I get a quotation for ${city.name}?`,
      a: `Fill in the enquiry form on this page or call ${"0120-4216290"}. Our team will share a customised proposal within 24 hours.`,
    },
  ];
}
