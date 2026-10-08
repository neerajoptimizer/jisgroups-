export const site = {
  name: "JIS Business Solutions Pvt. Ltd.",
  shortName: "JIS Business Solutions",
  brand: "JIS Group",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://jisgroups.com").replace(/\/$/, ""),
  tagline: "Security, Housekeeping & Facility Management Services Across India",
  description:
    "JIS Business Solutions Pvt. Ltd. is a leading PAN India facility management and manpower outsourcing company offering security guards, housekeeping, lift operators, admin support and facility management staff for corporates and institutions. Get a customised staffing proposal within 24 hours.",
  phone: "0120-4216290",
  phoneHref: "tel:+911204216290",
  emails: ["jagdeep@jisgroup.in", "jagdeeps5572@gmail.com"],
  address: {
    street: "C-266, 1st Floor, C Block, Sector-63",
    locality: "Noida",
    region: "Uttar Pradesh",
    postalCode: "201307",
    country: "IN",
    full: "C-266, 1st Floor, Sector-63, Noida (U.P.) – 201307",
  },
  geo: { lat: 28.6271, lng: 77.3792 },
  hours: "Mon–Sat 9:30 AM – 6:30 PM · Operations support 24×7",
  mapEmbed:
    "https://maps.google.com/maps?q=JIS%20business%20solutions%20Pvt%20Ltd%2C%20C%20266%2C%20Sector%2063%2C%20Noida&z=14&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=JIS+business+solutions+Pvt+Ltd+C+266+Sector+63+Noida",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", menu: "services" },
  { label: "Industries", href: "/industries", menu: "industries" },
  { label: "Locations", href: "/locations", menu: "locations" },
  { label: "Clients", href: "/clients" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const quantityOptions = ["1 – 5", "6 – 15", "16 – 50", "51 – 100", "100+"];

export const clients = [
  { name: "Godrej Properties", logo: "/images/clients/godrej-properties.png" },
  { name: "Shipra Group", logo: "/images/clients/shipra-group.png" },
  { name: "Indian Institute of Foreign Trade (IIFT)", logo: "/images/clients/iift.png" },
  { name: "DRDO", logo: "/images/clients/drdo.png" },
  { name: "IIT Roorkee", logo: "/images/clients/iit-roorkee.png" },
  { name: "IIT Jodhpur", logo: "/images/clients/iit-jodhpur.png" },
  { name: "IIT Jammu", logo: "/images/clients/iit-jammu.png" },
  { name: "Haldiram's", logo: "/images/clients/haldirams.png" },
  { name: "Bikanervala", logo: "/images/clients/bikanervala.png" },
  { name: "Theobroma", logo: "/images/clients/theobroma.png" },
  { name: "OYO Rooms", logo: "/images/clients/oyo-rooms.png" },
  { name: "OYO Campus", logo: "/images/clients/oyo-campus.png" },
  { name: "UFLEX", logo: "/images/clients/uflex.png" },
  { name: "Citelum (Groupe EDF)", logo: "/images/clients/citelum.png" },
  { name: "HollySys", logo: "/images/clients/hollysys.png" },
  { name: "Nuberg", logo: "/images/clients/nuberg.png" },
  { name: "Nuberg EPC", logo: "/images/clients/nuberg-epc.png" },
  { name: "Nirala Aspire", logo: "/images/clients/nirala-aspire.png" },
  { name: "Innov8 Coworking", logo: "/images/clients/innov8.png" },
  { name: "Zolo", logo: "/images/clients/zolo.png" },
  { name: "Easyrewardz", logo: "/images/clients/easyrewardz.png" },
  { name: "HELM360", logo: "/images/clients/helm360.png" },
  { name: "IDC Technologies", logo: "/images/clients/idc-technologies.png" },
  { name: "CIPL", logo: "/images/clients/cipl.png" },
  { name: "Radiate", logo: "/images/clients/radiate.png" },
  { name: "Marque Impex", logo: "/images/clients/marque-impex.png" },
  { name: "Peachtree", logo: "/images/clients/peachtree.png" },
  { name: "Europa Park", logo: "/images/clients/europa-park.png" },
  { name: "Pujashree", logo: "/images/clients/pujashree.png" },
  { name: "Urban Harvest", logo: "/images/clients/urban-harvest.png" },
  { name: "M&B Footwear", logo: "/images/clients/mb-footwear.png" },
  { name: "SAMS Kappal College", logo: "/images/clients/sams-kappal-college.png" },
  { name: "LPS Global School", logo: "/images/clients/lps-global-school.png" },
  { name: "Dolphin Kids", logo: "/images/clients/dolphin-kids.png" },
  { name: "Great Gatsby Club", logo: "/images/clients/great-gatsby-club.png" },
  { name: "Institutional Client", logo: "/images/clients/institutional-client.png" },
];

export const gallery = [
  { src: "/images/gallery/security-guards.jpg", alt: "Uniformed JIS security guards during a briefing" },
  { src: "/images/gallery/housekeeping-team.jpg", alt: "JIS housekeeping team deployed at a corporate client site" },
  { src: "/images/gallery/jis-team.jpg", alt: "JIS facility management team at a client office" },
  { src: "/images/gallery/facility-staff.jpg", alt: "JIS facility staff with cleaning equipment and supplies" },
  { src: "/images/gallery/pantry-staff.jpg", alt: "JIS pantry staff preparing a corporate cafeteria" },
  { src: "/images/gallery/table-cleaning.jpg", alt: "JIS housekeeping executive cleaning a meeting table" },
  { src: "/images/gallery/cafeteria-cleaning.jpg", alt: "Housekeeping staff cleaning a high-rise office cafeteria" },
  { src: "/images/gallery/office-sanitising.jpg", alt: "Housekeeping staff sanitising an office corridor" },
];

export const testimonials = [
  {
    quote: "Reliable, professional, and responsive — JIS ensures our property stays secure and well-maintained.",
    author: "Admin Head",
    org: "Leading IT Company, Gurgaon",
    photo: "/images/testimonials/2.jpg",
  },
  {
    quote: "We've been working with JIS for over 3 years — their staff is disciplined and well-trained.",
    author: "Facility Manager",
    org: "5-Star Hotel Chain",
    photo: "/images/testimonials/3.jpg",
  },
  {
    quote:
      "JIS has been an invaluable partner. Their quick response time to any issue and the professionalism of their on-site team give us complete peace of mind.",
    author: "Operations Director",
    org: "Major Retail Outlet, Bangalore",
    photo: "/images/testimonials/1.jpg",
  },
  {
    quote:
      "The transition to JIS was seamless. Their commitment to training and modern security protocols is clear, and we've seen a measurable improvement in our facility's safety.",
    author: "Head of Security",
    org: "International Manufacturing Plant, Pune",
    photo: "/images/testimonials/4.jpg",
  },
];

export const banners = [
  { src: "/images/banners/staffing-proposal.jpg", alt: "Get a customised staffing proposal within 24 hours — security, housekeeping, lift operators, admin support" },
  { src: "/images/banners/trusted-across-india.jpg", alt: "10+ years trusted by corporates across India — background-verified, uniformed staff deployed in days" },
  { src: "/images/banners/free-quote.jpg", alt: "Tired of security and housekeeping headaches? One call, verified staff, PAN India — get a free quote today" },
];

export const whyChoose = [
  {
    title: "Verified & Background-Checked Workforce",
    text: "Every guard, housekeeper and support executive is police-verified, document-checked and trained before deployment.",
  },
  {
    title: "24×7 Customer & Operations Support",
    text: "A live operations desk and field supervisors who answer the phone at 3 AM — and replace a no-show before the shift starts.",
  },
  {
    title: "Centralised Billing & Transparent Reporting",
    text: "One consolidated invoice for all sites, attendance-backed billing and statutory compliance proofs every month.",
  },
  {
    title: "PAN India Service Capability",
    text: "Deploy at a single office in Noida or at branches across multiple states with the same SOPs, uniforms and quality standards.",
  },
  {
    title: "Dedicated Account Managers",
    text: "A single point of contact who knows your sites, your people and your escalation matrix.",
  },
];

export const steps = [
  {
    title: "Share Your Requirements",
    text: "Tell us your staffing or facility needs — security, housekeeping, or support — and the locations you need covered.",
  },
  {
    title: "Get a Customised Proposal",
    text: "Within 24 hours our team shares staff profiles, cost structure and a deployment plan built around your site.",
  },
  {
    title: "Start Services in Days",
    text: "Trained & verified staff are deployed at your site with complete documentation, uniforms and supervision.",
  },
];

export const stats = [
  { value: "10+", label: "Years of experience" },
  { value: "24 hrs", label: "Proposal turnaround" },
  { value: "24×7", label: "Operations support" },
  { value: "₹0", label: "Placement fee" },
];
