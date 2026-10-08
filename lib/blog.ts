export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readMins: number;
  image: string;
  tags: string[];
  sections: { heading: string; body: string[]; list?: string[] }[];
  related: string[]; // service slugs
};

export const posts: Post[] = [
  {
    slug: "how-to-choose-a-security-agency-in-india",
    title: "How to Choose the Right Security Agency in India: A 10-Point Checklist",
    description:
      "Licensing, verification, training, supervision and compliance — the practical checklist facility and admin managers use to evaluate a security guard company in India.",
    date: "2026-09-15",
    readMins: 7,
    image: "/images/gallery/security-guards.jpg",
    tags: ["Security", "Vendor Selection"],
    related: ["security-guard-services", "facility-management-services"],
    sections: [
      {
        heading: "Why the choice of security agency matters",
        body: [
          "A security guard is often the first person a visitor meets and the only person on site at night. The agency behind that guard decides who gets hired, how they are trained, who checks on them at 2 AM and what happens when they don't turn up. Choosing purely on the lowest per-guard rate usually costs more in incidents, absenteeism and compliance risk.",
        ],
      },
      {
        heading: "The 10-point checklist",
        body: ["Use these questions when you shortlist and interview security agencies:"],
        list: [
          "Licensing — Is the agency licensed under the Private Security Agencies (Regulation) Act (PSARA) for your state?",
          "Statutory registrations — Are PF, ESIC, GST and labour registrations in place, and will they share monthly challans?",
          "Verification — Are guards police verified and are documents available to you on request?",
          "Training — What induction and site-specific training do guards receive (access control, fire safety, first aid)?",
          "Supervision — How often do field officers conduct day and night checks? Are reports shared?",
          "Reliever plan — How are weekly offs, leave and absenteeism covered?",
          "Response time — How quickly can they replace a guard or add manpower in an emergency?",
          "Uniform & equipment — Are guards provided full uniforms, torches, batons and registers?",
          "References — Can they share clients in your industry and city?",
          "Single point of contact — Will you have a dedicated account manager and an escalation matrix?",
        ],
      },
      {
        heading: "Red flags to watch out for",
        body: [
          "Rates that are below the applicable minimum wage plus statutory costs, reluctance to share compliance proofs, no supervisor visits, and frequent guard changes are all warning signs. Under labour law the principal employer can be held responsible if the contractor fails to pay statutory dues, so compliance should never be an afterthought.",
        ],
      },
      {
        heading: "How JIS approaches security",
        body: [
          "At JIS Business Solutions we deploy uniformed, verified and trained guards with round-the-clock supervision and quick replacement support. You receive a customised proposal within 24 hours, with transparent costing and complete documentation.",
        ],
      },
    ],
  },
  {
    slug: "benefits-of-outsourcing-housekeeping-services",
    title: "7 Benefits of Outsourcing Housekeeping Services for Your Office",
    description:
      "Why corporates, hospitals and institutions outsource housekeeping — from lower costs and trained staff to consistent hygiene and zero HR overhead.",
    date: "2026-08-28",
    readMins: 6,
    image: "/images/gallery/table-cleaning.jpg",
    tags: ["Housekeeping", "Outsourcing"],
    related: ["housekeeping-services", "facility-management-services"],
    sections: [
      {
        heading: "In-house vs outsourced housekeeping",
        body: [
          "Running housekeeping in-house means recruiting, training, supervising, buying chemicals and machines, managing leave and handling statutory compliance — all for a function that is not your core business. A professional housekeeping partner brings ready systems, trained people and accountability.",
        ],
      },
      {
        heading: "The key benefits",
        body: [],
        list: [
          "Trained staff — executives trained in surface-specific cleaning, chemical handling and hygiene standards.",
          "Consistent quality — supervisor-led checklists and periodic audits instead of ad-hoc cleaning.",
          "Lower total cost — no recruitment cost, optimised manpower and bulk-purchased consumables.",
          "Zero HR and compliance overhead — wages, PF, ESIC and replacements handled by the vendor.",
          "Flexibility — scale up for events, audits or seasonal peaks and scale down later.",
          "Access to equipment — scrubber-driers, vacuum cleaners and jet machines without capital expense.",
          "Healthier workplace — better hygiene reduces sick days and improves employee morale.",
        ],
      },
      {
        heading: "What to include in your housekeeping contract",
        body: [
          "Define areas and cleaning frequencies, the staff count per shift, consumables and machines (if included), supervision levels, response times for complaints and a monthly review mechanism. A clear scope protects both parties and makes performance measurable.",
        ],
      },
    ],
  },
  {
    slug: "facility-management-checklist-for-corporate-offices",
    title: "Facility Management Checklist for Corporate Offices (Daily, Weekly & Monthly)",
    description:
      "A practical daily, weekly and monthly facility management checklist covering security, housekeeping, technical maintenance and front office for Indian corporate offices.",
    date: "2026-08-05",
    readMins: 8,
    image: "/images/gallery/jis-team.jpg",
    tags: ["Facility Management", "Checklist"],
    related: ["facility-management-services", "admin-support-staff"],
    sections: [
      {
        heading: "Daily checks",
        body: ["Your facility supervisor should sign off these items every working day:"],
        list: [
          "Guard attendance, shift handover and visitor register review",
          "Washroom, pantry and common-area cleaning as per checklist",
          "Reception readiness — visitor badges, meeting room bookings",
          "Lift, DG and HVAC operation logs",
          "Waste segregation and disposal",
        ],
      },
      {
        heading: "Weekly checks",
        body: [],
        list: [
          "Deep cleaning of carpets, glass and high-touch surfaces",
          "Fire extinguisher pressure and emergency exit inspection",
          "Pest control schedule adherence",
          "Consumables stock review and re-ordering",
          "CCTV recording and access-control system health check",
        ],
      },
      {
        heading: "Monthly checks",
        body: [],
        list: [
          "Vendor performance review against SLAs",
          "Statutory compliance proofs (PF, ESIC, wage register) from manpower vendors",
          "Fire drill or emergency evacuation drill",
          "Preventive maintenance of electrical panels, DG sets and AC units",
          "Consolidated MIS report for management",
        ],
      },
      {
        heading: "Simplify with integrated facility management",
        body: [
          "Managing this checklist across many vendors is hard. With JIS integrated facility management, one partner covers security, housekeeping, front office and technical staff, with daily reporting and centralised billing.",
        ],
      },
    ],
  },
  {
    slug: "manpower-outsourcing-compliance-guide",
    title: "Manpower Outsourcing in India: A Compliance Guide for Principal Employers",
    description:
      "Understand contract labour, PF, ESIC, minimum wages and documentation when you outsource manpower — and how to protect your organisation as the principal employer.",
    date: "2026-07-18",
    readMins: 7,
    image: "/images/gallery/facility-staff.jpg",
    tags: ["Manpower Outsourcing", "Compliance"],
    related: ["manpower-outsourcing-services", "admin-support-staff"],
    sections: [
      {
        heading: "Who is the principal employer?",
        body: [
          "When you engage outsourced staff through a contractor, your organisation is generally treated as the principal employer under Indian labour law. The contractor employs and pays the staff, but the principal employer can be held liable if statutory dues are not paid. That's why choosing a compliant manpower partner matters.",
        ],
      },
      {
        heading: "Key compliance areas to verify",
        body: [],
        list: [
          "Minimum wages — wages must meet the notified rates for the state, category and skill level.",
          "Provident Fund (EPF) — monthly contributions and ECR challans for eligible employees.",
          "ESIC — health insurance contributions for eligible employees.",
          "Contract labour registrations and licences, where applicable.",
          "Bonus, leave and gratuity provisions as per applicable law.",
          "Wage registers, attendance records and salary proofs.",
        ],
      },
      {
        heading: "Documents to ask your vendor for every month",
        body: [
          "Ask for PF and ESIC challans with employee-wise details, a salary register, attendance records and the GST invoice. Keep them on file for audits. A good vendor will share these proactively.",
        ],
      },
      {
        heading: "How JIS removes the compliance burden",
        body: [
          "JIS manages hiring, verification, payroll and statutory compliance for every outsourced employee, with transparent monthly reporting. We are not a placement agency — we are a long-term service partner, so there is no placement fee.",
          "This article is general information and not legal advice; please consult your legal or HR advisor for your specific situation.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
