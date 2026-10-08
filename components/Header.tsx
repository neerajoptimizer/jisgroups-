"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Clock, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { featuredCities } from "@/lib/locations";
import { Icon } from "./Icon";

type MenuKey = "services" | "industries" | "locations";

function MegaMenu({ menu, onNavigate }: { menu: MenuKey; onNavigate: () => void }) {
  if (menu === "services") {
    return (
      <div className="grid w-[720px] grid-cols-2 gap-2 p-4">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            onClick={onNavigate}
            className="group flex gap-3 rounded-xl p-3 transition hover:bg-brand-50"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-900 text-white transition group-hover:bg-brand-600">
              <Icon name={s.icon} className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-ink-900">{s.name}</span>
              <span className="mt-0.5 line-clamp-2 block text-xs text-ink-500">{s.summary}</span>
            </span>
          </Link>
        ))}
        <Link href="/services" onClick={onNavigate} className="col-span-2 mt-1 rounded-lg bg-ink-50 px-4 py-2.5 text-center text-sm font-semibold text-brand-600 hover:bg-brand-50">
          View all services →
        </Link>
      </div>
    );
  }
  if (menu === "industries") {
    return (
      <div className="grid w-[520px] grid-cols-2 gap-1 p-4">
        {industries.map((i) => (
          <Link
            key={i.slug}
            href={`/industries/${i.slug}`}
            onClick={onNavigate}
            className="flex items-center gap-3 rounded-lg p-2.5 text-sm font-medium text-ink-700 transition hover:bg-brand-50 hover:text-brand-600"
          >
            <Icon name={i.icon} className="h-4 w-4 text-brand-600" />
            {i.name}
          </Link>
        ))}
      </div>
    );
  }
  return (
    <div className="w-[520px] p-4">
      <p className="px-2 pb-2 text-xs font-semibold tracking-widest text-ink-500 uppercase">Serving PAN India</p>
      <div className="grid grid-cols-3 gap-1">
        {featuredCities.map((c) => (
          <Link
            key={c.slug}
            href={`/locations/${c.slug}`}
            onClick={onNavigate}
            className="flex items-center gap-2 rounded-lg p-2 text-sm text-ink-700 transition hover:bg-brand-50 hover:text-brand-600"
          >
            <MapPin className="h-3.5 w-3.5 text-brand-600" aria-hidden="true" />
            {c.name}
          </Link>
        ))}
      </div>
      <Link href="/locations" onClick={onNavigate} className="mt-3 block rounded-lg bg-ink-50 px-4 py-2.5 text-center text-sm font-semibold text-brand-600 hover:bg-brand-50">
        All cities we serve →
      </Link>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileSub, setMobileSub] = useState<MenuKey | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <div className="hidden bg-ink-950 text-xs text-ink-300 md:block">
        <div className="container-x flex h-10 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={site.phoneHref} className="flex items-center gap-1.5 hover:text-white">
              <Phone className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" /> {site.phone}
            </a>
            <a href={`mailto:${site.emails[0]}`} className="flex items-center gap-1.5 hover:text-white">
              <Mail className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" /> {site.emails[0]}
            </a>
            <span className="hidden items-center gap-1.5 lg:flex">
              <Clock className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" /> {site.hours}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/careers" className="hover:text-white">Careers</Link>
            <Link href="/blog" className="hover:text-white">Insights</Link>
            <Link href="/faq" className="hover:text-white">FAQs</Link>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow ${
          scrolled ? "border-ink-100 shadow-lg shadow-ink-900/5" : "border-transparent"
        }`}
      >
        <div className="container-x flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} — Home`}>
            <Image src="/images/logo.png" alt="JIS logo" width={56} height={56} priority className="h-14 w-14" />
            <span className="leading-tight">
              <span className="block font-display text-base font-extrabold tracking-tight text-ink-900 sm:text-lg">JIS Business Solutions</span>
              <span className="hidden text-[11px] font-medium tracking-wider text-ink-500 uppercase sm:block">Security · Housekeeping · Facility</span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const menu = "menu" in item ? (item.menu as MenuKey) : null;
                return (
                  <li
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => menu && setOpenMenu(menu)}
                    onMouseLeave={() => menu && setOpenMenu(null)}
                  >
                    <Link
                      href={item.href}
                      aria-expanded={menu ? openMenu === menu : undefined}
                      onFocus={() => menu && setOpenMenu(menu)}
                      className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition ${
                        isActive(item.href) ? "text-brand-600" : "text-ink-700 hover:text-brand-600"
                      }`}
                    >
                      {item.label}
                      {menu && <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />}
                    </Link>
                    {menu && openMenu === menu && (
                      <div className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-3">
                        <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-2xl shadow-ink-900/10">
                          <MegaMenu menu={menu} onNavigate={() => setOpenMenu(null)} />
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/get-a-quote" className="btn-primary hidden sm:inline-flex">
              Book Now
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-ink-100 text-ink-900 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div id="mobile-menu" className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto border-t border-ink-100 bg-white lg:hidden">
            <nav aria-label="Mobile" className="container-x py-4">
              <ul className="divide-y divide-ink-100">
                {nav.map((item) => {
                  const menu = "menu" in item ? (item.menu as MenuKey) : null;
                  const list =
                    menu === "services"
                      ? services.map((s) => ({ href: `/services/${s.slug}`, label: s.name }))
                      : menu === "industries"
                        ? industries.map((i) => ({ href: `/industries/${i.slug}`, label: i.name }))
                        : menu === "locations"
                          ? [...featuredCities.map((c) => ({ href: `/locations/${c.slug}`, label: c.name })), { href: "/locations", label: "All cities →" }]
                          : [];
                  return (
                    <li key={item.href} className="py-1">
                      <div className="flex items-center justify-between">
                        <Link href={item.href} className={`block py-3 text-base font-semibold ${isActive(item.href) ? "text-brand-600" : "text-ink-900"}`}>
                          {item.label}
                        </Link>
                        {menu && (
                          <button
                            type="button"
                            aria-label={`Toggle ${item.label} submenu`}
                            aria-expanded={mobileSub === menu}
                            onClick={() => setMobileSub(mobileSub === menu ? null : menu)}
                            className="p-3"
                          >
                            <ChevronDown className={`h-4 w-4 transition ${mobileSub === menu ? "rotate-180" : ""}`} />
                          </button>
                        )}
                      </div>
                      {menu && mobileSub === menu && (
                        <ul className="grid grid-cols-1 gap-1 pb-3 pl-3 sm:grid-cols-2">
                          {list.map((l) => (
                            <li key={l.href}>
                              <Link href={l.href} className="block py-1.5 text-sm text-ink-500 hover:text-brand-600">
                                {l.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
                {[
                  { href: "/careers", label: "Careers" },
                  { href: "/blog", label: "Insights" },
                  { href: "/faq", label: "FAQs" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="block py-3 text-base font-semibold text-ink-900">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid gap-3">
                <Link href="/get-a-quote" className="btn-primary w-full">Get a Free Quote</Link>
                <a href={site.phoneHref} className="btn-dark w-full">
                  <Phone className="h-4 w-4" /> Call {site.phone}
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
