import Image from "next/image";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/sections";
import { posts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Insights & Blog — Facility Management, Security & Outsourcing Guides",
  description: "Practical guides for admin, HR and facility managers on security agencies, housekeeping outsourcing, facility checklists and manpower compliance in India.",
  path: "/blog",
});

const fmt = (d: string) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Guides for Admin & Facility Managers" subtitle="Practical, India-specific advice on security, housekeeping, facility management and outsourcing." crumbs={[{ name: "Blog", path: "/blog" }]}>
        <span />
      </PageHero>
      <section className="section">
        <div className="container-x grid gap-8 md:grid-cols-2">
          {posts.map((p) => (
            <article key={p.slug} className="group overflow-hidden rounded-3xl border border-ink-100 bg-white transition hover:shadow-2xl hover:shadow-ink-900/5">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src={p.image} alt="" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <p className="text-xs font-semibold tracking-wider text-brand-600 uppercase">
                  {p.tags.join(" · ")} — <time dateTime={p.date}>{fmt(p.date)}</time> · {p.readMins} min read
                </p>
                <h2 className="mt-3 text-2xl leading-snug font-bold">
                  <Link href={`/blog/${p.slug}`} className="hover:text-brand-600">
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-3 text-ink-500">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
