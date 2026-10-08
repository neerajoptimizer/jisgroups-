import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHero } from "@/components/sections";
import { getPost, posts } from "@/lib/blog";
import { getService } from "@/lib/services";
import { articleSchema, buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return buildMetadata({ title: p.title, description: p.description, path: `/blog/${p.slug}`, image: p.image, type: "article" });
}

const fmt = (d: string) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = post.related.map((s) => getService(s)!).filter(Boolean);
  const path = `/blog/${post.slug}`;

  return (
    <>
      <JsonLd data={articleSchema({ title: post.title, description: post.description, path, image: post.image, date: post.date })} />
      <PageHero
        eyebrow={post.tags.join(" · ")}
        title={post.title}
        subtitle={`${fmt(post.date)} · ${post.readMins} min read`}
        crumbs={[
          { name: "Blog", path: "/blog" },
          { name: post.title, path },
        ]}
        image={post.image}
      >
        <span />
      </PageHero>
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <article className="prose-jis lg:col-span-8">
            <p className="!text-lg !text-ink-700">{post.description}</p>
            <div className="relative my-8 aspect-[16/9] overflow-hidden rounded-3xl">
              <Image src={post.image} alt="" fill sizes="(min-width:1024px) 66vw, 100vw" className="object-cover" />
            </div>
            {post.sections.map((s) => (
              <section key={s.heading}>
                <h2>{s.heading}</h2>
                {s.body.map((b) => (
                  <p key={b.slice(0, 40)}>{b}</p>
                ))}
                {s.list && (
                  <ul>
                    {s.list.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>
          <aside className="space-y-6 lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-3xl border border-ink-100 p-6 shadow-xl shadow-ink-900/5">
                <p className="font-display text-xl font-bold">Get a free proposal</p>
                <p className="mt-1 mb-5 text-sm text-ink-500">Response within 24 hours</p>
                <EnquiryForm source={`blog-${post.slug}`} compact />
              </div>
              <div className="rounded-3xl bg-ink-50 p-6">
                <p className="font-bold">Related services</p>
                <ul className="mt-3 space-y-2">
                  {related.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline">
                        {s.name} <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <section className="section bg-ink-50 !py-14">
        <div className="container-x">
          <h2 className="text-xl font-bold">More articles</h2>
          <ul className="mt-5 grid gap-4 md:grid-cols-3">
            {posts
              .filter((p) => p.slug !== post.slug)
              .map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="card block h-full font-semibold text-ink-900 hover:text-brand-600">
                    {p.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
