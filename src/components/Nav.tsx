"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, sectionOf } from "@/lib/site";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const section = sectionOf(pathname);
  const dark = pathname === "/";

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const current = (href: string) => (section === href ? "page" : undefined);

  return (
    <>
      <header className={`nav${dark ? " nav--dark" : ""}${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`} id="nav">
        <div className="wrap nav__in">
          <Link href="/" className="wordmark" aria-label="Dr. Amol Gawande, home">
            <span className="wordmark__mono" aria-hidden="true">AG</span>
            <span className="wordmark__name">Amol Gawande</span>
          </Link>
          <nav aria-label="Primary" className="nav__links">
            {nav.map((l) => (
              <Link key={l.href} href={l.href} aria-current={current(l.href)}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="nav__end">
            <Link href="/contact" className="nav__cta" aria-current={pathname === "/contact" ? "page" : undefined}>
              Let’s talk
            </Link>
            <button type="button" className="nav__toggle" aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>
      <div className={`menu${open ? " is-open" : ""}`} id="menu" inert={!open}>
        <nav aria-label="Mobile" className="wrap">
          <ul role="list">
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} aria-current={current(l.href)}>
                  {l.label}
                </Link>
                {l.children && (
                  <ul className="menu__sub" role="list">
                    {l.children
                      .filter((c) => c.href !== l.href)
                      .map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} aria-current={pathname === c.href ? "page" : undefined}>
                            {c.label}
                          </Link>
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn--light menu__cta">
            Let’s talk
          </Link>
        </nav>
      </div>
    </>
  );
}
