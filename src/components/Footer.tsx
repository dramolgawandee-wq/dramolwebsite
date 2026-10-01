import Link from "next/link";
import { profiles } from "@/content/person";
import { nav } from "@/lib/site";

const links = [
  ...nav.flatMap((l) => (l.children ? l.children : [l])),
  { href: "/contact", label: "Contact" },
].filter((l, i, arr) => arr.findIndex((x) => x.href === l.href) === i);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="grid footer__grid">
          <div className="footer__id">
            <Link href="/" className="wordmark" aria-label="Dr. Amol Gawande, home">
              <span className="wordmark__mono" aria-hidden="true">AG</span>
              <span className="wordmark__name">Amol Gawande</span>
            </Link>
            <p className="footer__tag">Academic leader · Researcher · Management educator</p>
            <p className="footer__serif">Rethinking education <em>for a changing world.</em></p>
            <p className="script script--mint footer__script" aria-hidden="true">Learn · Unlearn · Relearn</p>
          </div>
          <nav className="footer__nav" aria-label="Footer">
            <span className="eyebrow">Site</span>
            <ul role="list">
              {links.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>
          {profiles.length > 0 && (
            <div className="footer__links">
              <span className="eyebrow">Profiles</span>
              <ul role="list">
                {profiles.map((p) => (
                  <li key={p.url}>
                    <a href={p.url} rel="me noopener" target="_blank">{p.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Dr. Amol Gawande</span>
          <span>Views expressed here are personal.</span>
        </div>
      </div>
    </footer>
  );
}
