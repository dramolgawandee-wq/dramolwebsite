import Link from "next/link";
import Icon from "@/components/Icons";
import ImageSlot from "@/components/ImageSlot";
import JsonLd from "@/components/JsonLd";
import PageHead, { Curves, SectionHead } from "@/components/PageHead";
import { typeLabel } from "@/components/PubRow";
import SubNav from "@/components/SubNav";
import { research } from "@/content/home";
import { ipr } from "@/content/ipr";
import { researchAreas } from "@/content/person";
import { featuredResearch, publications } from "@/content/publications";
import type { PubType } from "@/content/types";
import { publishable } from "@/lib/evidence";
import { pageNode, publicationPath } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

const description =
  "Research by Dr. Amol Gawande across finance, management, digital transformation, emerging technologies and higher education: peer-reviewed papers, conference papers, book chapters, books and IPR.";

export const metadata = pageMeta({ title: "Research", description, path: "/research" });

const typeOrder: PubType[] = ["journal-article", "book", "edited-book", "book-chapter", "case-study", "conference-paper", "report"];
const areaIcons = ["chart", "briefcase", "layers", "spark", "cap", "compass"];

export default function Research() {
  const all = publishable(publications);
  const featured = featuredResearch.map((s) => all.find((p) => p.slug === s)).filter((p): p is NonNullable<typeof p> => !!p);
  const byType = typeOrder.map((t) => ({ t, n: all.filter((p) => p.type === t).length })).filter((x) => x.n > 0);
  const iprCount = publishable(ipr).length;
  const typeHref = (t: PubType) =>
    t === "book" || t === "edited-book" ? "/research/books" : `/research/publications?type=${encodeURIComponent(typeLabel[t])}`;
  const count = (tag: string) => all.filter((p) => (p.areas as string[]).includes(tag)).length;

  return (
    <>
      <JsonLd graph={pageNode({ path: "/research", name: "Research", description, type: "CollectionPage", crumbs: [{ name: "Research", path: "/research" }] })} />
      <div className="wrap">
        <SubNav section="/research" current="/research" />
      </div>
      <PageHead
        crumbs={[{ name: "Research", path: "/research" }]}
        eyebrow="Research"
        title={<>Research that asks how institutions <em>measure, improve and adapt</em>.</>}
        lede={research.support}
        aside={<><Link href="/research/publications" className="btn btn--mint">Search the archive</Link><Link href="/research/books" className="btn btn--outline">Books</Link></>}
        image="research"
      />

      <section className="section section--sm tone-mint" aria-label="By type">
        <div className="wrap">
          <ul className="stat-row" role="list">
            {byType.map(({ t, n }, i) => (
              <li key={t} className={`rv rv--d${Math.min(i, 3)}`}><Link href={typeHref(t)}><b>{n}</b><span>{typeLabel[t]}{n === 1 ? "" : "s"}</span></Link></li>
            ))}
            {iprCount > 0 && <li className="rv rv--d3"><Link href="/research/ipr"><b>{iprCount}</b><span>IPR records</span></Link></li>}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="areas">
        <div className="wrap">
          <SectionHead eyebrow="Areas" id="areas" title={<>Six areas <em>of work</em>.</>} />
          <ul className="cards" role="list">
            {researchAreas.map((a, i) => (
              <li key={a.name} className={`card rv rv--d${i % 3}`}>
                <Link href={`/research/publications?area=${encodeURIComponent(a.tag)}`}>
                  <span className="card__icon"><Icon name={areaIcons[i % areaIcons.length]} /></span>
                  <span className="card__t">{a.name}</span>
                  <span className="card__d">{a.blurb}</span>
                  <div className="card__pills"><span>{count(a.tag)} works</span></div>
                  <span className="card__go" aria-hidden="true"><Icon name="arrow" size={16} /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section research tone-dark" aria-labelledby="featured">
        <Curves className="research__curves curves--left" />
        <div className="wrap grid research__grid">
          <div className="research__media rv rv--img">
            <ImageSlot name="speaking" tone="dark" ratio="4 / 5" sizes="(max-width: 900px) 92vw, 40vw" />
            <div className="stat-chip stat-chip--dark"><b>{all.length}</b><span>Publications</span></div>
          </div>
          <div className="research__text">
            <span className="tag tag--outline rv" id="featured">Featured research</span>
            <h2 className="rv rv--d1">Three recent <em>works</em>.</h2>
            <p className="body rv rv--d1">One each from higher education quality, finance and applied machine learning. Each page summarises the topic and links to the publisher record.</p>
            <ol className="feat rv rv--d2" role="list">
              {featured.map((p) => (
                <li key={p.slug}>
                  <Link href={publicationPath(p)}>
                    <span className="feat__meta">{p.year} · {typeLabel[p.type]} · {p.venue}</span>
                    <span className="feat__t">{p.title}</span>
                    <span className="feat__go" aria-hidden="true"><Icon name="arrow" size={16} /></span>
                  </Link>
                </li>
              ))}
            </ol>
            <div className="actions rv rv--d3">
              <Link href="/research/publications" className="btn btn--mint">All publications</Link>
              <Link href="/research/ipr" className="btn btn--outline">IPR records</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sm tone-mint" aria-label="How records are checked">
        <div className="wrap grid split" style={{ alignItems: "center" }}>
          <div className="split__a rv">
            <span className="tag tag--dark">How records are checked</span>
            <p className="body mt-3" style={{ maxWidth: "34rem" }}>Publication records are checked against Crossref and publisher pages before they appear here. Public research profiles are linked in the footer.</p>
          </div>
          <div className="split__b rv rv--d1">
            <div className="actions" style={{ marginTop: 0 }}>
              <Link href="/research/publications" className="btn btn--outline btn--dark-text">Search the publication archive</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
