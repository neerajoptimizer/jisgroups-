import Image from "next/image";
import { CtaBand, PageHero } from "@/components/sections";
import { gallery } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gallery — JIS Security & Housekeeping Teams On Site",
  description: "Photos of JIS security guards, housekeeping staff and facility teams deployed at client sites.",
  path: "/gallery",
  image: "/images/gallery/jis-team.jpg",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our Gallery"
        subtitle="Uniformed, trained and on duty — a look at JIS teams at client sites."
        crumbs={[{ name: "Gallery", path: "/gallery" }]}
        image="/images/gallery/jis-team.jpg"
      />
      <section className="section">
        <div className="container-x columns-1 gap-5 sm:columns-2 lg:columns-3">
          {[...gallery, { src: "/images/team.jpg", alt: "JIS facility team group photo" }, { src: "/images/housekeeping-cafeteria.jpg", alt: "JIS housekeeping in a corporate cafeteria" }].map((g) => (
            <figure key={g.src} className="group mb-5 break-inside-avoid overflow-hidden rounded-2xl">
              <Image src={g.src} alt={g.alt} width={600} height={750} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="h-auto w-full transition duration-500 group-hover:scale-105" />
              <figcaption className="sr-only">{g.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
