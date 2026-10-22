// All editable copy for the JIPAY landing page lives here.

export const site = {
  name: "JIPAY",
  tagline: "Payment Gateway Solution",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jipay.in",
  telegramUrl: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/jipay",
  telegramHandle: process.env.NEXT_PUBLIC_TELEGRAM_HANDLE ?? "@jipay",
  description:
    "JIPAY connects your business to every leading payment gateway in India through one partner — fast onboarding, UPI, cards, net banking, payouts and quick settlements. Talk to us on Telegram.",
};

export const gateways = [
  "Razorpay",
  "PayU",
  "Cashfree",
  "Paytm",
  "PhonePe",
  "CCAvenue",
  "BillDesk",
  "Juspay",
  "Easebuzz",
  "Instamojo",
  "Stripe",
  "PayPal",
  "Airpay",
  "Paykun",
  "ICICI Pay",
  "HDFC SmartGateway",
];

export const stats = [
  { value: "All", label: "Major gateways under one roof" },
  { value: "24–48h", label: "Typical onboarding time" },
  { value: "100+", label: "Payment methods supported" },
  { value: "24/7", label: "Support on Telegram" },
];

export const trustBadges = [
  { icon: "shield", title: "PCI DSS Compliant", text: "Card data handled only by PCI DSS certified gateway partners." },
  { icon: "lock", title: "256-bit SSL Secured", text: "Bank-grade encryption on every transaction and dashboard." },
  { icon: "landmark", title: "RBI-Authorised Partners", text: "We work only with RBI-authorised payment aggregators." },
  { icon: "badge", title: "Verified KYC", text: "Transparent, documented KYC for every merchant onboarding." },
  { icon: "zap", title: "Fast Settlements", text: "T+0 / T+1 settlement options depending on the gateway." },
  { icon: "headset", title: "Dedicated Support", text: "A real account manager, reachable 24/7 on Telegram." },
] as const;

export const services = [
  {
    icon: "layers",
    title: "Multi-Gateway Setup",
    text: "Get approved on the right gateway for your business model — or several at once for redundancy and better success rates.",
  },
  {
    icon: "qr",
    title: "UPI, QR & Intent",
    text: "Collect with UPI intent, dynamic QR, collect requests and payment links that convert on every phone.",
  },
  {
    icon: "card",
    title: "Cards & Net Banking",
    text: "Visa, Mastercard, RuPay, Amex, 50+ net banking options, wallets and EMI — all through one integration.",
  },
  {
    icon: "send",
    title: "Payouts",
    text: "Bulk and API payouts to bank accounts and UPI IDs for vendors, refunds, salaries and commissions.",
  },
  {
    icon: "code",
    title: "Integration Help",
    text: "Plugins for WordPress, Shopify and custom apps, plus hands-on API support from our tech team.",
  },
  {
    icon: "chart",
    title: "Better Pricing",
    text: "Our volume tie-ups unlock competitive MDR and settlement terms you won't get going direct.",
  },
] as const;

export const steps = [
  { title: "Message us on Telegram", text: "Tell us about your business, monthly volume and the payment modes you need." },
  { title: "Share your documents", text: "We pick the best-fit gateway and handle KYC and onboarding paperwork with you." },
  { title: "Go live & get paid", text: "Receive live API keys or payment links and start accepting payments." },
];

export const faqs = [
  {
    q: "Which payment gateways do you work with?",
    a: "We have tie-ups with all major payment gateways and aggregators in India, including Razorpay, PayU, Cashfree, Paytm, PhonePe, CCAvenue, BillDesk, Easebuzz and more. We recommend the best fit for your business category and volume.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most merchants are live within 24–48 hours once documents are complete. Some categories need additional checks by the gateway and can take a little longer.",
  },
  {
    q: "What documents do I need?",
    a: "Typically PAN, GST (if applicable), business registration proof, a cancelled cheque or bank statement, and a live website or app. We'll share an exact checklist on Telegram.",
  },
  {
    q: "Do you charge any setup fee?",
    a: "Pricing depends on the gateway and your business profile. Message us on Telegram for a transparent quote — there are no hidden charges.",
  },
  {
    q: "Is my money and customer data safe?",
    a: "Yes. Payments are processed and settled directly by RBI-authorised, PCI DSS compliant gateways into your own bank account.",
  },
];
