import Link from "next/link";
import Icon from "@/components/Icons";
import ImageSlot from "@/components/ImageSlot";
import JsonLd from "@/components/JsonLd";
import PageHead, { SectionHead } from "@/components/PageHead";
import { articles } from "@/content/articles";
import { ideas } from "@/content/home";
import { pillars } from "@/content/pillars";
import { researchAreas } from "@/content/person";
import type { Pillar } from "@/content/types";
import { pageNode } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { formatDate } from "@/lib/site";

const description =
  "Ideas from Dr. Amol Gawande on the future of education, Gen Z and the future of work, AI and technology in education, management education, innovation and global education.";

export const metadata = pageMeta({ title: "Ideas", description, path: "/ideas" });

/** Where each pillar's research lives in the archive, so topics link to something real. */
const pillarResearch: Partial<Record<Pillar, string>> = {
  "future-of-education": "Higher Education",
  "technology-ai": "Emerging Technologies",
  "management-leadership": "Management",
  "innovation-global": "Digital Transformation",
};
const pillarIcons: Record<Pillar, string> = { "future-of-education": "cap", "gen-z-future-of-work": "users", "technology-ai": "spark", "management-leadership": "briefcase", "innovation-global": "globe" };

export default function Ideas() {
  const [featured, ...rest] = articles;
  return (
    <>
      <JsonLd graph={pageNode({ path: "/ideas", name: "Ideas", description, type: "CollectionPage", crumbs: [{ name: "Ideas", path: "/ideas" }] })} />
      <PageHead
        crumbs={[{ name: "Ideas", path: "/ideas" }]}
        eyebrow="Ideas"
        title={<>Perspectives on education, technology and <em>the future of work</em>.</>}
        lede={ideas.support}
        image="ideas"
        imageRatio="4 / 3"
        script="Think · Apply · Adapt"
      />

      <section className="section" aria-labelledby="articles">
        <div className="wrap">
          <SectionHead eyebrow="Articles" id="articles" title={<>Recent <em>writing</em>.</>} />
          <div className="grid mag">
            {featured && (
              <article className="mag__feature rv">
                <Link href={`/ideas/${featured.slug}`} className="mag__img rv rv--img" aria-hidden="true" tabIndex={-1}>
                  <ImageSlot name="ideas" tone="light" sizes="(max-width: 1024px) 100vw, 62vw" />
                </Link>
                <span className="tag tag--mint mag__tag">{pillars[featured.pillar].name}</span>
                <h3><Link href={`/ideas/${featured.slug}`}>{featured.title}</Link></h3>
                <p>{featured.summary}</p>
                <div className="mag__foot">
                  <time dateTime={featured.published}>{formatDate(featured.published)}</time>
                  <span>{featured.readingMinutes} min read</span>
                  <Link href={`/ideas/${featured.slug}`} className="btn btn--mint btn--sm">Read the article</Link>
                </div>
              </article>
            )}
            <div className="mag__side rv rv--d1">
              <span className="eyebrow">{rest.length ? "More articles" : "Coming next"}</span>
              {rest.length > 0 ? (
                <ul className="bylines" role="list">
                  {rest.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/ideas/${a.slug}`}>
                        <span className="bylines__meta">{pillars[a.pillar].short} · {formatDate(a.published)}</span>
                        <span className="bylines__t">{a.title}</span>
                        <span className="bylines__go" aria-hidden="true"><Icon name="arrow" size={16} /></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="card--static">
                  <span className="card__icon"><Icon name="file" /></span>
                  <span className="card__t">New essays are in progress.</span>
                  <span className="card__d">Each one is written for people who make decisions about education: institutional leaders, faculty, employers and students deciding what to learn next.</span>
                  <div className="card__links"><Link href="/contact?topic=Media" className="arrow">Suggest a topic</Link></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section tone-mint" aria-labelledby="areas">
        <div className="wrap">
          <SectionHead eyebrow="Areas of exploration" id="areas" title={<>The questions this site <em>keeps returning to</em>.</>} />
          <ul className="cards cards--2" role="list">
            {(Object.keys(pillars) as Pillar[]).map((key, i) => {
              const p = pillars[key];
              const pieces = articles.filter((a) => a.pillar === key);
              const area = pillarResearch[key];
              const research = area ? researchAreas.find((r) => r.tag === area) : undefined;
              return (
                <li key={key} id={key} className={`card--static rv rv--d${i % 2}`} style={{ scrollMarginTop: "6rem", background: "var(--white)" }}>
                  <span className="card__icon"><Icon name={pillarIcons[key]} /></span>
                  <span className="card__t">{p.name}</span>
                  <span className="card__d">{p.blurb}</span>
                  <div className="card__pills">{p.topics.map((t) => <span key={t}>{t}</span>)}</div>
                  {(pieces.length > 0 || research) && (
                    <div className="card__links">
                      {pieces.map((a) => <Link key={a.slug} href={`/ideas/${a.slug}`} className="arrow">{a.title}</Link>)}
                      {research && <Link href={`/research/publications?area=${encodeURIComponent(research.tag)}`} className="arrow arrow--mute">Related research: {research.name}</Link>}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
