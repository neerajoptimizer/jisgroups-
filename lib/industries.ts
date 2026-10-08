export type Industry = {
  slug: string;
  name: string;
  icon: "briefcase" | "hotel" | "hardHat" | "graduationCap" | "hospital" | "store" | "landmark";
  summary: string;
  intro: string;
  challenges: string[];
  solutions: string[];
  services: string[]; // service slugs
};

export const industries: Industry[] = [
  {
    slug: "corporate-offices",
    name: "Corporate Offices",
    icon: "briefcase",
    summary: "Security, housekeeping, front office and pantry staff for corporate offices, IT parks and co-working spaces.",
    intro:
      "Modern offices need a workplace that is secure, spotless and welcoming from the moment employees and clients walk in. JIS provides integrated security, housekeeping, reception and admin support for corporate offices, IT/ITES campuses and co-working spaces.",
    challenges: [
      "Managing multiple vendors for security, cleaning and front desk",
      "Maintaining hygiene in high-footfall pantries and washrooms",
      "Visitor management and access control",
      "Absenteeism disrupting daily operations",
    ],
    solutions: [
      "Single-window integrated facility management",
      "Supervisor-led housekeeping with daily checklists",
      "Trained guards with visitor management SOPs",
      "Guaranteed relievers and quick replacements",
    ],
    services: ["security-guard-services", "housekeeping-services", "admin-support-staff", "facility-management-services"],
  },
  {
    slug: "hotels-resorts",
    name: "Hotels & Resorts",
    icon: "hotel",
    summary: "Hospitality-grade housekeeping, room attendants, security and bouncers for hotels, resorts, clubs and banquets.",
    intro:
      "Guests judge a hotel by its cleanliness, safety and service. JIS supplies hospitality-trained housekeeping staff, room attendants, public-area cleaners, security guards and bouncers to hotels, resorts, clubs and banquet venues.",
    challenges: ["Seasonal fluctuation in staffing needs", "Hospitality-standard grooming and etiquette", "Guest safety and crowd control at events", "High attrition in housekeeping roles"],
    solutions: ["Flexible short- and long-term staffing", "Staff trained in hospitality housekeeping standards", "Security guards and bouncers for events", "Ready pool of replacements"],
    services: ["housekeeping-services", "security-guard-services", "manpower-outsourcing-services", "lift-operator-services"],
  },
  {
    slug: "construction-sites",
    name: "Builders & Construction Sites",
    icon: "hardHat",
    summary: "Site security, material-gate control, helpers and post-construction cleaning for builders and real-estate developers.",
    intro:
      "Construction sites carry high-value material, constant vehicle movement and rotating labour. JIS protects builder sites and real-estate projects with trained security guards, material-gate control, CCTV monitoring support and post-construction cleaning before handover.",
    challenges: ["Material theft and pilferage", "Unauthorised entry on open sites", "Vehicle and material movement records", "Cleaning before possession handover"],
    solutions: ["24×7 guards with gate registers", "Night patrolling and supervisor checks", "Inward/outward material verification", "Deep cleaning for show flats and possession"],
    services: ["security-guard-services", "manpower-outsourcing-services", "housekeeping-services", "facility-management-services"],
  },
  {
    slug: "educational-institutions",
    name: "Schools, Colleges & Universities",
    icon: "graduationCap",
    summary: "Campus security, lady guards, housekeeping and support staff for schools, colleges, universities and coaching institutes.",
    intro:
      "Parents and students trust institutions to keep campuses safe and clean. JIS provides trained campus security including lady guards, hygiene-focused housekeeping, and administrative support staff for schools, colleges, universities and hostels.",
    challenges: ["Student safety and controlled entry", "Hygiene in classrooms, labs and washrooms", "Managing peak hours at gates", "Hostel and campus-wide coverage"],
    solutions: ["Male & female guards for gates and hostels", "Frequency-based housekeeping schedules", "Traffic & crowd management at dispersal", "Campus-wide supervisors and reporting"],
    services: ["security-guard-services", "housekeeping-services", "admin-support-staff", "manpower-outsourcing-services"],
  },
  {
    slug: "hospitals-healthcare",
    name: "Hospitals & Healthcare Facilities",
    icon: "hospital",
    summary: "Infection-aware housekeeping, ward attendants support, lift operators and security for hospitals and clinics.",
    intro:
      "Healthcare facilities run 24×7 and demand the highest standards of hygiene and security. JIS provides hospital housekeeping trained in infection-control practices, lift operators, patient-friendly security and support staff for hospitals, nursing homes and diagnostic centres.",
    challenges: ["Infection control and biomedical waste handling", "24×7 operations with no gaps", "Managing visitors and patient attendants", "Lift and patient movement"],
    solutions: ["Housekeeping trained in hospital hygiene protocols", "Three-shift deployment with relievers", "Visitor pass and access control by guards", "Hospital lift operators and attendants"],
    services: ["housekeeping-services", "security-guard-services", "lift-operator-services", "facility-management-services"],
  },
  {
    slug: "malls-commercial-complexes",
    name: "Malls & Commercial Complexes",
    icon: "store",
    summary: "Security, housekeeping, lift operators and facility management for malls, retail outlets and commercial towers.",
    intro:
      "High footfall, long hours and brand image make malls and commercial complexes demanding environments. JIS delivers visible, courteous security, continuous housekeeping, lift operators and facility management for malls, retail chains and commercial towers.",
    challenges: ["Heavy footfall and crowd management", "Continuous washroom and floor hygiene", "Loss prevention for retail", "Coordinating many services under one roof"],
    solutions: ["Uniformed guards and lady searchers", "Roving housekeeping teams with machines", "Store-level loss-prevention staff", "Integrated facility management contract"],
    services: ["security-guard-services", "housekeeping-services", "lift-operator-services", "facility-management-services"],
  },
  {
    slug: "government-institutions",
    name: "Government & Institutional Clients",
    icon: "landmark",
    summary: "Compliant security, housekeeping and outsourced manpower for government offices, PSUs and institutions.",
    intro:
      "Government departments, PSUs and autonomous institutions need service partners that combine reliability with strict documentation and statutory compliance. JIS provides security, housekeeping and outsourced manpower with complete compliance records and transparent billing.",
    challenges: ["Strict statutory and documentation requirements", "Attendance-linked billing", "Large campuses with many posts", "Long-term continuity of service"],
    solutions: ["Full wage, PF and ESIC compliance records", "Biometric/attendance-backed invoicing", "Structured supervision hierarchy", "Dedicated account manager for the contract"],
    services: ["security-guard-services", "housekeeping-services", "manpower-outsourcing-services", "admin-support-staff"],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
