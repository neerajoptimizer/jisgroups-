import { AlertTriangle, GraduationCap, HeartHandshake, ShieldCheck, Wallet } from "lucide-react";
import { CareersForm } from "@/components/CareersForm";
import { careerRoles } from "@/lib/careers";
import { PageHero, SectionHeading } from "@/components/sections";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Careers — Security Guard, Housekeeping & Facility Jobs",
  description:
    "Apply for security guard, housekeeping, lift operator, receptionist and facility jobs with JIS Business Solutions. Timely salary, PF & ESIC, uniform and training. No fee charged.",
  path: "/careers",
  image: "/images/gallery/housekeeping-team.jpg",
});

const perks = [
  { icon: Wallet, title: "Timely salary", text: "Salary credited on time every month, with PF and ESIC benefits as applicable." },
  { icon: GraduationCap, title: "Training", text: "Role-based training in security, hygiene, safety and customer service." },
  { icon: ShieldCheck, title: "Uniform & ID", text: "Smart JIS uniform and ID card provided to every employee." },
  { icon: HeartHandshake, title: "Growth", text: "Grow from guard to supervisor, executive to facility manager." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Your Career with JIS"
        subtitle="We are always hiring disciplined, honest and hard-working people for client sites across India."
        crumbs={[{ name: "Careers", path: "/careers" }]}
        image="/images/gallery/housekeeping-team.jpg"
      >
        <span />
      </PageHero>

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Why work with us" title="Benefits of joining JIS" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p) => (
              <div key={p.title} className="card">
                <p.icon className="h-9 w-9 text-brand-600" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
                <p className="mt-1 text-sm text-ink-500">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink-50">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="h2">Positions we hire for</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {careerRoles.slice(0, -1).map((r) => (
                <li key={r} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-900 shadow-sm">
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3 rounded-2xl border border-brand-200 bg-brand-50 p-5 text-sm text-brand-800">
              <AlertTriangle className="h-5 w-5 shrink-0" aria-hidden="true" />
              <p>
                <strong>Beware of fraud:</strong> JIS never asks candidates for money for a job, training or uniform. If anyone demands a fee in our name, please
                report it to us immediately.
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-xl shadow-ink-900/5 sm:p-10 lg:col-span-7">
            <h2 className="text-2xl font-bold">Apply now</h2>
            <p className="mt-1 mb-6 text-sm text-ink-500">Takes less than a minute.</p>
            <CareersForm />
          </div>
        </div>
      </section>
    </>
  );
}
