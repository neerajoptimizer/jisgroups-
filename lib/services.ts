export type IconName =
  | "shield"
  | "sparkles"
  | "building"
  | "users"
  | "arrowUpDown"
  | "headset";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  keyword: string; // primary search phrase, e.g. "security guard services"
  icon: IconName;
  image: string;
  summary: string;
  intro: string[];
  highlights: string[];
  roles: { title: string; text: string }[];
  benefits: { title: string; text: string }[];
  process: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "security-guard-services",
    name: "Security Guard Services",
    shortName: "Security Guards",
    keyword: "security guard services",
    icon: "shield",
    image: "/images/gallery/security-guards.jpg",
    summary:
      "Uniformed, verified and trained security guards for corporate offices, industries, hotels, residential societies and institutions — with round-the-clock supervision.",
    intro: [
      "Security is the first impression your premises make and the last line of defence for your people and assets. JIS Business Solutions provides professionally managed security guard services for corporates, factories, warehouses, hotels, hospitals, schools, residential societies and construction sites across India.",
      "Every guard we deploy is background-verified, medically fit, trained in access control, fire safety and emergency response, and turned out in a smart JIS uniform. Field officers conduct day and night checks, and our 24×7 control desk ensures any absenteeism is covered with a quick replacement — so your post is never left unmanned.",
    ],
    highlights: [
      "Corporate, industrial & hotel security",
      "Uniformed, verified & trained guards",
      "Round-the-clock supervision",
      "Quick replacement support",
      "Armed / unarmed guards & bouncers on request",
      "Fire & emergency response trained staff",
    ],
    roles: [
      { title: "Security Guards", text: "Access control, visitor management, patrolling and material movement checks." },
      { title: "Security Supervisors", text: "Shift-in-charge who manages guard rosters, briefings and incident reporting." },
      { title: "Lady Security Guards", text: "Frisking, front-desk and women-safety duties for offices, malls and schools." },
      { title: "Gunmen & PSOs", text: "Licensed armed guards for cash handling, banks and high-value assets (subject to licences)." },
      { title: "Bouncers", text: "Crowd control for hotels, clubs, events and retail launches." },
      { title: "Fire & Safety Marshals", text: "Fire-watch, drill coordination and emergency evacuation support." },
    ],
    benefits: [
      { title: "Zero unmanned posts", text: "Relievers and quick replacements are planned into every contract." },
      { title: "Documented accountability", text: "Duty registers, visitor logs and incident reports shared with you regularly." },
      { title: "Statutory compliance handled", text: "Wages, PF, ESIC and bonus are processed by JIS — the compliance burden stays with us." },
      { title: "Scalable deployment", text: "From a single guard post to multi-site security across states." },
    ],
    process: [
      "Free site survey and security risk assessment",
      "Post-wise deployment plan with shift timings",
      "Guard selection, verification and site-specific training",
      "Deployment with supervisor induction and SOP handover",
      "Night checks, monthly reviews and performance reporting",
    ],
    faqs: [
      {
        q: "Are your security guards police verified?",
        a: "Yes. Every guard goes through identity, address and police verification before deployment, and copies of the documents are available to the client on request.",
      },
      {
        q: "How quickly can you deploy security guards?",
        a: "We share a proposal within 24 hours of receiving your requirement. Standard deployments typically start within a few days of the work order, depending on the number of guards and location.",
      },
      {
        q: "What happens if a guard is absent?",
        a: "Our operations desk arranges a reliever for the shift. Quick replacement support is part of every JIS security contract.",
      },
      {
        q: "Do you provide security guards on short-term contracts?",
        a: "Yes. Along with long-term contracts we provide guards for events, launches, renovations and temporary site requirements.",
      },
    ],
  },
  {
    slug: "housekeeping-services",
    name: "Housekeeping Services",
    shortName: "Housekeeping",
    keyword: "housekeeping services",
    icon: "sparkles",
    image: "/images/gallery/cafeteria-cleaning.jpg",
    summary:
      "Trained housekeeping staff for offices, hotels, hospitals and commercial spaces — following strict safety, hygiene and quality standards.",
    intro: [
      "A clean, hygienic workplace is good for health, morale and business. JIS provides professional housekeeping services for corporate offices, IT parks, hotels, hospitals, schools, malls and residential complexes — managed by trained supervisors and backed by daily checklists.",
      "Our housekeeping executives are trained in surface-specific cleaning, chemical handling, washroom hygiene, pantry upkeep and waste segregation. We can deploy staff only, or staff with machines, consumables and chemicals, depending on what works best for your facility.",
    ],
    highlights: [
      "Office & commercial cleaning",
      "Hospitality & hotel housekeeping",
      "Pantry & maintenance staff",
      "Trained with safety & hygiene standards",
      "Deep cleaning & post-renovation cleaning",
      "Supervisor-led daily checklists",
    ],
    roles: [
      { title: "Housekeeping Executives", text: "Daily cleaning of workstations, cabins, common areas and washrooms." },
      { title: "Housekeeping Supervisors", text: "Shift planning, quality audits and checklist sign-offs." },
      { title: "Pantry Boys / Office Assistants", text: "Tea-coffee service, pantry hygiene and meeting room set-up." },
      { title: "Janitors & Washroom Attendants", text: "High-frequency washroom upkeep for malls, hospitals and offices." },
      { title: "Room Attendants", text: "Hotel and guest-house room cleaning to hospitality standards." },
      { title: "Machine Operators", text: "Scrubber-drier, vacuum and high-pressure jet machine operation." },
    ],
    benefits: [
      { title: "Consistent hygiene", text: "Frequency-based cleaning schedules with checklists at every location." },
      { title: "Trained, presentable staff", text: "Uniformed staff trained in etiquette, safety and chemical handling." },
      { title: "Flexible scope", text: "Manpower only or full turnkey with consumables, chemicals and machines." },
      { title: "One accountable partner", text: "A supervisor and an account manager own the outcome, not just the headcount." },
    ],
    process: [
      "Site walkthrough and area-wise cleaning requirement mapping",
      "Manpower and frequency planning with cost options",
      "Staff selection, verification and hygiene training",
      "Deployment with daily checklists and supervision",
      "Monthly quality audits and client feedback reviews",
    ],
    faqs: [
      {
        q: "Do you provide cleaning materials and machines?",
        a: "Yes. You can choose manpower-only housekeeping or a turnkey contract where JIS supplies consumables, eco-friendly chemicals and cleaning machines.",
      },
      {
        q: "Can you provide housekeeping staff for hotels?",
        a: "Yes. We provide trained room attendants, public area cleaners and pantry staff for hotels, resorts and service apartments.",
      },
      {
        q: "Do you offer one-time deep cleaning?",
        a: "Yes. We undertake deep cleaning, post-construction and post-renovation cleaning for offices and commercial spaces.",
      },
    ],
  },
  {
    slug: "facility-management-services",
    name: "Facility Management Services",
    shortName: "Facility Management",
    keyword: "facility management services",
    icon: "building",
    image: "/images/gallery/jis-team.jpg",
    summary:
      "End-to-end integrated facility management — front office, technicians, lift operators and supervisors — with daily reporting from a single partner.",
    intro: [
      "Managing multiple vendors for security, cleaning, maintenance and front-desk is time-consuming and expensive. JIS Integrated Facility Management (IFM) brings every soft service and key technical role under one contract, one account manager and one invoice.",
      "From reception and front-office staff to electricians, plumbers, lift operators and facility supervisors, we run your building's day-to-day operations against an agreed SLA — with daily reporting so your admin team always knows what is happening on the ground.",
    ],
    highlights: [
      "Front office & reception services",
      "Lift operators, electricians, supervisors",
      "End-to-end facility operations",
      "Managed workforce with daily reporting",
      "Single-window vendor management",
      "SLA-driven service delivery",
    ],
    roles: [
      { title: "Facility Managers / Executives", text: "Own day-to-day operations, vendor coordination and SLA reporting." },
      { title: "Front Office & Receptionists", text: "Visitor handling, call management and a professional first impression." },
      { title: "Electricians & Plumbers", text: "Routine maintenance and breakdown support for building services." },
      { title: "Lift Operators", text: "Trained operators for passenger and goods lifts." },
      { title: "HVAC & DG Technicians", text: "Operation and upkeep of air-conditioning plants and DG sets." },
      { title: "Gardeners & Multi-Skilled Technicians", text: "Landscaping, minor repairs, carpentry and painting support." },
    ],
    benefits: [
      { title: "One contract, one invoice", text: "Consolidate multiple vendors into a single accountable partner." },
      { title: "Lower operating cost", text: "Optimised manpower deployment and reduced vendor overheads." },
      { title: "Visibility", text: "Daily reports, attendance records and monthly MIS on every site." },
      { title: "Business continuity", text: "Trained relievers and a 24×7 desk keep your facility running." },
    ],
    process: [
      "Facility audit and service scope definition",
      "Manpower plan, SLAs and KPI framework",
      "Transition plan from existing vendors (if any)",
      "Deployment with facility manager and supervisors",
      "Daily reporting, monthly MIS and quarterly business reviews",
    ],
    faqs: [
      {
        q: "What is integrated facility management?",
        a: "Integrated facility management (IFM) means one company manages all your building's support services — security, housekeeping, front office, technical staff — under a single contract and point of contact.",
      },
      {
        q: "Can you take over from our existing vendor?",
        a: "Yes. We plan a structured transition so services continue without disruption, and can absorb existing staff after verification where suitable.",
      },
      {
        q: "Do you manage multiple sites?",
        a: "Yes. With PAN India capability, we manage facilities across multiple cities with centralised billing and reporting.",
      },
    ],
  },
  {
    slug: "manpower-outsourcing-services",
    name: "Manpower Outsourcing Services",
    shortName: "Manpower Outsourcing",
    keyword: "manpower outsourcing services",
    icon: "users",
    image: "/images/gallery/facility-staff.jpg",
    summary:
      "Admin, skilled and semi-skilled outsourced manpower on short- or long-term contracts, with rapid deployment anywhere in India.",
    intro: [
      "Need people on the ground fast — without adding to your payroll or compliance load? JIS provides outsourced manpower on our rolls, deployed at your site and managed by us. You get productive staff; we handle hiring, verification, wages, PF, ESIC and replacements.",
      "We are not a placement agency. We work with verified organisations that want a long-term service partner, providing admin and office support staff, skilled and semi-skilled workforce, and contract staffing on short- or long-term engagements.",
    ],
    highlights: [
      "Admin & office support staff",
      "Skilled & semi-skilled workforce",
      "Short-term & long-term contracts",
      "Rapid deployment anywhere in India",
      "Payroll & statutory compliance managed",
      "No placement fee",
    ],
    roles: [
      { title: "Office Assistants & Peons", text: "Dispatch, filing, courier handling and day-to-day office support." },
      { title: "Data Entry & Back-Office Staff", text: "MIS, documentation and operations support executives." },
      { title: "Drivers", text: "Verified commercial and staff drivers with valid licences." },
      { title: "Helpers & Loaders", text: "Warehouse, logistics and material handling manpower." },
      { title: "Skilled Technicians", text: "Electricians, plumbers, carpenters, AC technicians and welders." },
      { title: "Store & Inventory Assistants", text: "Stock management for warehouses, sites and retail." },
    ],
    benefits: [
      { title: "No compliance burden", text: "Wages, PF, ESIC, bonus and labour-law compliance managed by JIS." },
      { title: "Flexibility", text: "Scale headcount up or down with project and seasonal demand." },
      { title: "Faster hiring", text: "Pre-screened talent pools mean quicker deployment than direct hiring." },
      { title: "Replacement guarantee", text: "Non-performing or absent staff are replaced promptly." },
    ],
    process: [
      "Requirement understanding — roles, skills, shifts, location",
      "Proposal with cost structure within 24 hours",
      "Sourcing, screening and verification",
      "Deployment with joining documentation",
      "Ongoing payroll, attendance and compliance management",
    ],
    faqs: [
      {
        q: "Are you a placement agency?",
        a: "No. JIS is a manpower outsourcing and facility management company. Staff remain on JIS rolls and we manage them throughout the contract — there is no placement fee.",
      },
      {
        q: "Who handles PF, ESIC and salary?",
        a: "JIS handles salary processing and statutory contributions for all outsourced staff and shares compliance proofs with the client.",
      },
      {
        q: "What is the minimum contract duration?",
        a: "We offer both short-term and long-term contracts. Share your requirement and we will propose the most practical engagement model.",
      },
    ],
  },
  {
    slug: "lift-operator-services",
    name: "Lift Operator Services",
    shortName: "Lift Operators",
    keyword: "lift operator services",
    icon: "arrowUpDown",
    image: "/images/team.jpg",
    summary:
      "Trained, courteous lift operators for commercial towers, hospitals, malls, hotels and residential high-rises.",
    intro: [
      "In busy commercial towers, hospitals and malls, a trained lift operator keeps people moving safely and efficiently. JIS provides uniformed lift operators trained in safe operation, load management, passenger etiquette and emergency rescue procedures.",
      "Our lift operators work closely with your security and maintenance teams, report faults immediately and maintain daily logbooks — improving safety and extending equipment life.",
    ],
    highlights: [
      "Passenger & goods lift operators",
      "Emergency & rescue procedure trained",
      "Uniformed, courteous staff",
      "Shift-wise deployment & relievers",
      "Daily logbook & fault reporting",
      "Hospitals, malls, offices & residences",
    ],
    roles: [
      { title: "Passenger Lift Operators", text: "Safe operation and passenger assistance in commercial and residential towers." },
      { title: "Goods / Service Lift Operators", text: "Load management for hotels, hospitals, malls and warehouses." },
      { title: "Hospital Lift Attendants", text: "Priority handling of stretchers, wheelchairs and emergencies." },
      { title: "Lift Supervisors", text: "Shift coordination for complexes with multiple lift banks." },
    ],
    benefits: [
      { title: "Safer vertical transport", text: "Operators prevent overloading and misuse that cause breakdowns." },
      { title: "Better visitor experience", text: "Courteous assistance for elderly, patients and guests." },
      { title: "Faster fault response", text: "Immediate reporting to maintenance teams reduces downtime." },
      { title: "Reliable coverage", text: "Relievers planned for every shift and weekly off." },
    ],
    process: [
      "Count of lifts, shifts and peak hours assessment",
      "Deployment plan with relievers",
      "Operator selection and safety training",
      "Deployment with logbook and escalation matrix",
      "Supervisor checks and monthly reviews",
    ],
    faqs: [
      {
        q: "Are your lift operators trained for emergencies?",
        a: "Yes. Operators are trained in emergency stop procedures, passenger reassurance and coordinating with the lift maintenance agency for rescue.",
      },
      {
        q: "Can lift operators be deployed 24×7?",
        a: "Yes. We plan three-shift deployments with relievers for hospitals, hotels and round-the-clock facilities.",
      },
    ],
  },
  {
    slug: "admin-support-staff",
    name: "Admin & Office Support Staff",
    shortName: "Admin Support",
    keyword: "admin support staff",
    icon: "headset",
    image: "/images/gallery/pantry-staff.jpg",
    summary:
      "Receptionists, front-office executives, office assistants, pantry staff and MIS executives to keep your office running smoothly.",
    intro: [
      "Your administration team should focus on decisions, not on chasing attendance and replacements. JIS provides trained admin and office support staff — from receptionists and front-office executives to office boys, pantry staff and MIS executives — fully managed by us.",
      "Our admin support staff are well-groomed, verified and trained in office etiquette, so they represent your organisation professionally from the reception desk to the boardroom.",
    ],
    highlights: [
      "Receptionists & front-office executives",
      "Office boys & pantry staff",
      "MIS & data entry executives",
      "Mailroom & dispatch staff",
      "Well-groomed, verified staff",
      "Managed attendance & replacements",
    ],
    roles: [
      { title: "Receptionists", text: "Visitor welcome, call handling, meeting room bookings." },
      { title: "Front Office Executives", text: "Front desk management, courier logs and guest coordination." },
      { title: "Office Boys / Pantry Staff", text: "Pantry service, photocopying, file movement and errands." },
      { title: "MIS / Data Entry Executives", text: "Reports, data management and back-office support." },
      { title: "Mailroom & Dispatch", text: "Inward/outward management and courier coordination." },
      { title: "Admin Executives", text: "Vendor coordination, stationery and asset management." },
    ],
    benefits: [
      { title: "Professional front office", text: "Presentable, trained staff that reflect your brand." },
      { title: "No HR overhead", text: "Recruitment, payroll and compliance handled by JIS." },
      { title: "Continuity", text: "Leave and attrition covered by trained replacements." },
      { title: "Cost control", text: "Transparent monthly billing linked to attendance." },
    ],
    process: [
      "Role definition and skill requirements",
      "Profile sharing and client interviews (if required)",
      "Verification and onboarding",
      "Deployment and induction",
      "Monthly attendance, billing and feedback",
    ],
    faqs: [
      {
        q: "Can we interview the staff before deployment?",
        a: "Yes. For front-office and admin roles we share profiles and can arrange client interviews before deployment.",
      },
      {
        q: "Do you provide female receptionists and front-office staff?",
        a: "Yes. We deploy both male and female staff based on your requirement and shift timings.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
