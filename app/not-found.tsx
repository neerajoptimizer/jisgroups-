import Link from "next/link";
import { services } from "@/lib/services";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-x max-w-2xl text-center">
        <p className="font-display text-8xl font-extrabold text-brand-600">404</p>
        <h1 className="mt-4 text-3xl font-bold">Page not found</h1>
        <p className="lead mt-3">The page you are looking for has moved or doesn&apos;t exist. Try one of these instead:</p>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className="inline-block rounded-full border border-ink-100 px-4 py-2 text-sm hover:border-brand-600 hover:text-brand-600">
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center gap-3">
          <Link href="/" className="btn-primary">Go home</Link>
          <Link href="/contact" className="btn border border-ink-100 text-ink-900">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
