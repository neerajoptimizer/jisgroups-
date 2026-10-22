import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { faqs, gateways, services, site, stats, steps, trustBadges } from "@/lib/content";
import { Icon } from "@/components/Icon";
import { FloatingTelegram, TelegramButton } from "@/components/TelegramButton";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: site.name,
        url: site.url,
        logo: `${site.url}/logo.jpg`,
        description: site.description,
        sameAs: [site.telegramUrl],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-night-950/80 backdrop-blur-lg">
        <div className="container-x flex h-16 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2.5">
            <Image src="/logo.jpg" alt="JIPAY" width={40} height={40} className="rounded-lg" priority />
            <span className="font-display text-xl font-extrabold text-white">
              JI<span className="text-gradient">PAY</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Main">
            <a href="#partners" className="hover:text-white">Partners</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#trust" className="hover:text-white">Security</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <TelegramButton label="Telegram" />
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-blue-brand/25 blur-[120px]" />
          <div aria-hidden className="pointer-events-none absolute top-20 -right-40 h-[28rem] w-[28rem] rounded-full bg-pink-brand/20 blur-[120px]" />
          <div className="container-x relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-200">
                <span className="h-2 w-2 rounded-full bg-emerald-400" /> Tie-ups with all leading payment gateways
              </span>
              <h1 className="mt-6 text-4xl leading-[1.1] font-extrabold sm:text-5xl lg:text-6xl">
                Every payment gateway. <span className="text-gradient">One trusted partner.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                JIPAY gets your business live on the right payment gateway — fast. UPI, cards, net banking, wallets and
                payouts, with quick onboarding, better pricing and real support on Telegram.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <TelegramButton size="lg" label="Start on Telegram" />
                <a
                  href="#partners"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/5"
                >
                  View gateway partners <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
                {["PCI DSS partners", "256-bit SSL", "RBI-authorised aggregators"].map((t) => (
                  <li key={t} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-sky-brand" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div aria-hidden className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-sky-brand/40 to-pink-brand/40 blur-2xl" />
              <Image
                src="/logo.jpg"
                alt="JIPAY — Payment Gateway Solution"
                width={1254}
                height={1254}
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="relative rounded-[2rem] border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section aria-label="JIPAY in numbers" className="border-y border-white/10 bg-night-900">
          <dl className="container-x grid grid-cols-2 gap-8 py-10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-extrabold text-white sm:text-4xl">{s.value}</dd>
                <dd className="mt-1 text-sm text-slate-400">{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Partners */}
        <section id="partners" className="section scroll-mt-16">
          <div className="container-x text-center">
            <p className="eyebrow">Our gateway network</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Tie-ups with <span className="text-gradient">all major payment gateways</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              One conversation with JIPAY opens the door to India&apos;s leading payment gateways and aggregators. We match
              you with the one that fits your business, volume and settlement needs.
            </p>
          </div>
          <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <ul className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
              {[...gateways, ...gateways].map((g, i) => (
                <li
                  key={`${g}-${i}`}
                  aria-hidden={i >= gateways.length}
                  className="card flex h-16 min-w-44 items-center justify-center px-6 font-display text-lg font-bold whitespace-nowrap text-white"
                >
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <p className="container-x mt-6 text-center text-sm text-slate-500">…and many more banks, wallets and aggregators.</p>
        </section>

        {/* Services */}
        <section id="services" className="section scroll-mt-16 bg-night-900">
          <div className="container-x">
            <div className="max-w-2xl">
              <p className="eyebrow">What we do</p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Everything you need to accept and send money</h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.title} className="card p-6 transition hover:border-sky-brand/40">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-brand to-blue-brand text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Trust badges */}
        <section id="trust" className="section scroll-mt-16">
          <div className="container-x">
            <div className="text-center">
              <p className="eyebrow">Safe &amp; secure</p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Built on <span className="text-gradient">trust and compliance</span>
              </h2>
            </div>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {trustBadges.map((b) => (
                <li key={b.title} className="card flex gap-4 p-6">
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-pink-brand/60 bg-pink-brand/10 text-pink-brand">
                    <Icon name={b.icon} className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-bold">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="section bg-night-900">
          <div className="container-x">
            <div className="text-center">
              <p className="eyebrow">How it works</p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Live in three simple steps</h2>
            </div>
            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((s, i) => (
                <li key={s.title} className="card relative p-6 pt-10">
                  <span className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-brand to-pink-brand font-display font-extrabold text-white">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section scroll-mt-16">
          <div className="container-x max-w-3xl">
            <div className="text-center">
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Questions, answered</h2>
            </div>
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="card group p-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-white">
                    {f.q}
                    <ChevronDown className="h-5 w-5 shrink-0 transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20">
          <div className="container-x">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-brand via-[#3a4fd6] to-pink-brand px-6 py-14 text-center sm:px-12">
              <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to start accepting payments?</h2>
              <p className="mx-auto mt-4 max-w-xl text-white/85">
                Message us on Telegram and our team will recommend the best gateway for your business — usually within minutes.
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href={site.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-night-950 shadow-xl transition hover:-translate-y-0.5"
                >
                  Message {site.telegramHandle} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10 pb-24 sm:pb-10">
        <div className="container-x flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.jpg" alt="" width={32} height={32} className="rounded-md" />
            <span>
              © {new Date().getFullYear()} {site.name} — {site.tagline}
            </span>
          </div>
          <p className="max-w-md text-center text-xs sm:text-right">
            Partner names are trademarks of their respective owners. Payments are processed by RBI-authorised payment aggregators.
          </p>
        </div>
      </footer>

      <FloatingTelegram />
    </>
  );
}
