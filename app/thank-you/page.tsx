import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your request has been received.",
  robots: { index: false, follow: false },
};

type Props = { searchParams: Promise<{ type?: string }> };

export default async function ThankYouPage({ searchParams }: Props) {
  const { type } = await searchParams;
  const isJob = type === "careers";

  const next = isJob
    ? [
        { icon: Mail, text: "A confirmation has been sent to your email (if you provided one)." },
        { icon: Clock, text: "Our HR team reviews every application." },
        { icon: Phone, text: "We will call you if your profile matches an open position." },
      ]
    : [
        { icon: Mail, text: "A confirmation email is on its way to your inbox — check spam if you don't see it." },
        { icon: Clock, text: "Our business team will contact you within 24 hours." },
        { icon: Phone, text: "You'll receive staff profiles, cost structure and a deployment plan." },
      ];

  return (
    <section className="section bg-ink-50">
      <div className="container-x max-w-3xl">
        <div className="rounded-3xl bg-white p-8 text-center shadow-xl shadow-ink-900/5 sm:p-14">
          <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-50">
            <CheckCircle2 className="h-11 w-11 text-brand-600" aria-hidden="true" />
          </span>
          <h1 className="mt-6 text-3xl font-extrabold sm:text-4xl">{isJob ? "Application received!" : "Thank you! We've received your enquiry."}</h1>
          <p className="lead mx-auto mt-4 max-w-xl">
            {isJob
              ? `Thank you for applying to ${site.name}. JIS never charges candidates any fee for a job, training or uniform.`
              : `Thank you for choosing ${site.name}. No placement fee. No compliance burden. Just reliable people.`}
          </p>

          <ol className="mx-auto mt-10 max-w-lg space-y-4 text-left">
            {next.map((n, i) => (
              <li key={n.text} className="flex items-start gap-4 rounded-2xl bg-ink-50 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <n.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="pt-2 text-sm font-medium text-ink-900">
                  <span className="mr-1 text-brand-600">{i + 1}.</span> {n.text}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={site.phoneHref} className="btn-primary">
              <Phone className="h-4 w-4" /> Need it urgently? Call {site.phone}
            </a>
            <Link href={isJob ? "/careers" : "/services"} className="btn border border-ink-100 text-ink-900 hover:border-ink-900">
              {isJob ? "Back to careers" : "Explore our services"} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
