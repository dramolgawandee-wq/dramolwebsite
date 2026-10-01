import Link from "next/link";
import Icon from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import PageHead from "@/components/PageHead";
import SubNav from "@/components/SubNav";
import { ipr } from "@/content/ipr";
import { aboutSections, credentialGroups, educationList, researchAreas } from "@/content/person";
import { publications } from "@/content/publications";
import { engagements } from "@/content/speaking";
import { publishable } from "@/lib/evidence";
import { pageNode } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

const description =
  "Dr. Amol Gawande is an academic leader, researcher and management educator: Founder & Director of Brookstone Institute of Global Studies, Dubai, former Director of Dr. D. Y. Patil B-School, Pune, and an Executive Board Member of AIMS.";

export const metadata = pageMeta({ title: "About Dr. Amol Gawande", description, path: "/about", type: "profile" });

export default function About() {
  const groups = credentialGroups();
  const edu = educationList();
  const all = publishable(publications);
  const stats = [
    { n: all.length, label: "Publications on record", href: "/research/publications" },
    { n: all.filter((p) => p.type === "book" || p.type === "edited-book").length, label: "Books, edited volumes and proceedings", href: "/research/books" },
    { n: publishable(ipr).length, label: "Registered IPR records", href: "/research/ipr" },
    { n: publishable(engagements).length, label: "Conference proceedings co-edited", href: "/about/speaking" },
  ].filter((s) => s.n > 0);
  return (
    <>
      <JsonLd graph={pageNode({ path: "/about", name: "About Dr. Amol Gawande", description, type: "ProfilePage", crumbs: [{ name: "About", path: "/about" }] })} />
      <div className="wrap">
        <SubNav section="/about" current="/about" />
      </div>
      <PageHead
        eyebrow="Dr. Amol Gawande"
        title={<>Academic leader.<br />Researcher.<br /><em>Management educator.</em></>}
        lede="Founder & Director of Brookstone Institute of Global Studies, Dubai. Executive Board Member of the Association of Indian Management Schools. Former Director of Dr. D. Y. Patil B-School, Pune."
        aside={<><Link href="/contact" className="btn btn--mint">Get in touch</Link><Link href="/journey" className="btn btn--outline">The journey</Link></>}
        image="hero"
        imageRatio="4 / 5"
        script="Amol Gawande"
      />

      <section className="section section--sm tone-mint" aria-label="At a glance">
        <div className="wrap">
          <ul className="stat-row" role="list">
            {stats.map((s, i) => (
              <li key={s.label} className={`rv rv--d${Math.min(i, 3)}`}>
                <Link href={s.href}><b>{s.n}</b><span>{s.label}</span></Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-label="Biography">
        <div className="wrap grid split">
          <div className="split__a">
            <span className="tag tag--dark rv">Profile</span>
            <ol className="qa mt-3" role="list">
              {aboutSections().map((s, i) => (
                <li key={s.id} id={s.id} className={`rv rv--d${i % 2}`} style={{ scrollMarginTop: "6rem" }}>
                  <span className="tag tag--mint tag--sm">{String(i + 1).padStart(2, "0")}</span>
                  <h2>{s.q}</h2>
                  {s.paras.map((p, j) => (
                    <p key={j} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </li>
              ))}
            </ol>
          </div>
          <div className="split__b">
            <div className="side rv rv--d1">
              {groups.map((g) => (
                <div key={g.label} className="side__card">
                  <span className="tag tag--dark tag--sm">{g.label}</span>
                  {g.items.map((i) => (
                    <p key={i.title}>{i.title}<small>{i.org}</small></p>
                  ))}
                </div>
              ))}
              <div className="side__card">
                <span className="tag tag--dark tag--sm">Research areas</span>
                <div className="pills">
                  {researchAreas.map((a) => (
                    <Link key={a.name} href={`/research/publications?area=${encodeURIComponent(a.tag)}`}>{a.name}</Link>
                  ))}
                </div>
              </div>
              {edu.length > 0 && (
                <div className="side__card">
                  <span className="tag tag--dark tag--sm">Education</span>
                  {edu.map((e) => (
                    <p key={e.title}>{e.title}{e.org && <small>{e.org}</small>}</p>
                  ))}
                </div>
              )}
              <div className="side__card" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <span className="tag tag--dark tag--sm">Next</span>
                <Link href="/journey" className="arrow"><Icon name="compass" size={16} />Full journey</Link>
                <Link href="/about/speaking" className="arrow"><Icon name="mic" size={16} />Speaking and academic engagement</Link>
                <Link href="/research" className="arrow"><Icon name="book" size={16} />Research overview</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
