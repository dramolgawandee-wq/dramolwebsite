import Link from "next/link";
import Icon from "@/components/Icons";
import ImageSlot from "@/components/ImageSlot";
import JsonLd from "@/components/JsonLd";
import { Curves } from "@/components/PageHead";
import { articles, explorationAreas } from "@/content/articles";
import { about, cta, contactTopics, hero, ideas, leadership, principle, research, speaking, work } from "@/content/home";
import { ipr } from "@/content/ipr";
import { media } from "@/content/media";
import { credentialGroups } from "@/content/person";
import { pillars } from "@/content/pillars";
import { featuredResearch, publications } from "@/content/publications";
import { engagements } from "@/content/speaking";
import { publishable } from "@/lib/evidence";
import { timeline } from "@/lib/journey";
import { pageNode, publicationPath } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { formatDate, site } from "@/lib/site";

export const metadata = pageMeta({
  title: `${site.name} | Academic Leader, Researcher & Management Educator`,
  absoluteTitle: true,
  description: site.description,
  path: "/",
});

type S = { before: string; em: string; after: string };

/** Two-tone statement: the `em` phrase takes the section's accent colour. */
const Statement = ({ s }: { s: S }) => (
  <>
    {s.before}
    <em>{s.em}</em>
    {s.after}
  </>
);


const ideaIcons = ["users", "cap", "spark", "briefcase", "compass", "globe"];

export default function Home() {
  const all = publishable(publications);
  const works = featuredResearch.map((s) => all.find((p) => p.slug === s)).filter((p): p is NonNullable<typeof p> => !!p);
  const counts = [
    { n: all.filter((p) => p.type === "journal-article").length, label: "peer-reviewed journal articles" },
    { n: all.filter((p) => p.type === "conference-paper").length, label: "IEEE conference papers" },
    { n: all.filter((p) => p.type === "book-chapter").length, label: "book chapters with Springer Nature, Emerald and IGI Global" },
    { n: all.filter((p) => p.type === "book" || p.type === "edited-book").length, label: "books, edited volumes and proceedings" },
  ].filter((c) => c.n > 0);
  const books = all.filter((p) => p.type === "book" || p.type === "edited-book").sort((a, b) => a.type.localeCompare(b.type) || b.year - a.year).slice(0, 3);
  const iprItems = publishable(ipr).slice(0, 3);
  const proceedings = publishable(engagements).slice(0, 3);
  const bylines = publishable(media).filter((m) => m.type === "Article").slice(0, 3);
  const interviews = publishable(media).filter((m) => m.type !== "Article").slice(0, 3);
  const creds = credentialGroups();
  const current = creds.find((g) => g.label === "Current")?.items[0];
  const gov = creds.find((g) => g.label === "Academic governance")?.items[0];
  const featured = articles[0];
  const tl = timeline();
  const lead = ["brookstone", "aims-board", "dypbs"].map((id) => tl.find((e) => e.id === id)).filter((e): e is NonNullable<typeof e> => !!e);
  const earlier = tl.filter((e) => !["brookstone", "aims-board", "dypbs"].includes(e.id));

  return (
    <>
      <JsonLd graph={pageNode({ path: "/", name: site.name, description: site.description })} />

      {/* 01 Hero: deep green, portrait right, curved lines */}
      <section className="hero tone-dark" aria-labelledby="hero-title">
        <Curves className="hero__curves" />
        <div className="hero__media rv rv--img">
          <ImageSlot name="hero" tone="dark" cover priority sizes="(max-width: 900px) 100vw, 60vw" position="center 12%" />
        </div>
        <span className="script script--mint hero__sign rv rv--d2" aria-hidden="true">Amol Gawande</span>
        <span className="script script--mint hero__motto rv rv--d3" aria-hidden="true">Learn · Unlearn · Relearn</span>
        <div className="wrap hero__in">
          <div className="hero__text">
            <span className="tag tag--outline rv">{hero.roles.join(" & ")}</span>
            <h1 id="hero-title" className="rv rv--d1">{hero.headline.before}<em>{hero.headline.em}</em>{hero.headline.after}</h1>
            <p className="hero__lede rv rv--d2">{hero.support}</p>
            <ul className="stats rv rv--d2" role="list">
              <li>
                <span className="stats__icon"><Icon name="book" /></span>
                <span><b>{all.length} publications</b>Journal articles, chapters, books</span>
              </li>
              {current && (
                <li>
                  <span className="stats__icon"><Icon name="pin" /></span>
                  <span><b>{current.title}</b>{current.org}</span>
                </li>
              )}
              {gov && (
                <li>
                  <span className="stats__icon"><Icon name="users" /></span>
                  <span><b>{gov.title}</b>{gov.org}</span>
                </li>
              )}
            </ul>
            <div className="actions rv rv--d3">
              <Link href={hero.primary.href} className="btn btn--mint">{hero.primary.label}</Link>
              <Link href={hero.secondary.href} className="btn btn--outline"><Icon name="play" size={16} />{hero.secondary.label}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 02 About: image with stat chip, icon chips */}
      <section className="section about tone-light" aria-labelledby="about-title">
        <span className="script script--teal about__script rv" aria-hidden="true">Think · Apply · Adapt</span>
        <div className="wrap grid about__grid">
          <div className="about__media rv rv--img">
            <ImageSlot name="about" tone="light" sizes="(max-width: 760px) 92vw, 44vw" />
            <div className="stat-chip">
              <b>{all.length}</b>
              <span>Publications</span>
            </div>
          </div>
          <div className="about__text">
            <span className="tag tag--dark rv">About Dr. Amol Gawande</span>
            <h2 id="about-title" className="rv rv--d1"><Statement s={about.statement} /></h2>
            {about.paras.map((p) => <p key={p} className="body rv rv--d1">{p}</p>)}
            <ul className="chips rv rv--d2" role="list">
              <li><span className="chips__icon"><Icon name="cap" /></span><span>Academic leader<br />& educator</span></li>
              <li><span className="chips__icon"><Icon name="book" /></span><span>Researcher<br />& author</span></li>
              {current && <li><span className="chips__icon"><Icon name="briefcase" /></span><span>{current.title}<br />{current.org.split(",")[0]}</span></li>}
              {gov && <li><span className="chips__icon"><Icon name="users" /></span><span>{gov.title}<br />{gov.org}</span></li>}
            </ul>
            <div className="actions rv rv--d3">
              <Link href="/about" className="btn btn--outline btn--dark-text">Learn more about me</Link>
              <Link href="/journey" className="arrow">The journey</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 03 Ideas: what you'll find */}
      <section className="section section--top0 ideas tone-light" aria-labelledby="ideas-title">
        <div className="wrap">
          <div className="sh sh--split">
            <div className="rv">
              <span className="tag tag--mint">What you’ll find</span>
              <h2 id="ideas-title"><Statement s={ideas.statement} /></h2>
            </div>
            <p className="sh__aside rv rv--d1">{ideas.support}</p>
          </div>
          <ul className="cards" role="list">
            {explorationAreas.map((t, i) => (
              <li key={t.topic} className={`card rv rv--d${i % 3}`}>
                <Link href={`/ideas#${t.pillar}`}>
                  <span className="card__icon"><Icon name={ideaIcons[i % ideaIcons.length]} /></span>
                  <span className="card__t">{t.topic}</span>
                  <span className="card__d">{t.summary}</span>
                  <span className="card__go" aria-hidden="true"><Icon name="arrow" size={16} /></span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="actions rv">
            <Link href="/ideas" className="btn btn--mint">Explore the ideas</Link>
            {featured && <Link href={`/ideas/${featured.slug}`} className="arrow">Latest article</Link>}
          </div>
        </div>
      </section>

      {/* 04 Research: dark, image + checklist + featured papers */}
      <section className="section research tone-dark" aria-labelledby="research-title">
        <Curves className="research__curves curves--left" />
        <div className="wrap grid research__grid">
          <div className="research__media rv rv--img">
            <ImageSlot name="research" tone="dark" ratio="4 / 5" sizes="(max-width: 900px) 92vw, 40vw" />
            <div className="stat-chip stat-chip--dark">
              <b>{counts[0]?.n}</b>
              <span>Journal articles</span>
            </div>
          </div>
          <div className="research__text">
            <span className="tag tag--outline rv">Research & publications</span>
            <h2 id="research-title" className="rv rv--d1"><Statement s={research.statement} /></h2>
            <p className="body rv rv--d1">{research.support}</p>
            <ul className="checks rv rv--d2" role="list">
              {counts.map((c) => (
                <li key={c.label}><span className="checks__i"><Icon name="check" size={14} /></span><span><b>{c.n}</b> {c.label}</span></li>
              ))}
            </ul>
            <ol className="feat rv rv--d2" role="list">
              {works.map((p) => (
                <li key={p.slug}>
                  <Link href={publicationPath(p)}>
                    <span className="feat__meta">{p.year} · {p.venue}</span>
                    <span className="feat__t">{p.title}</span>
                    <span className="feat__go" aria-hidden="true"><Icon name="arrow" size={16} /></span>
                  </Link>
                </li>
              ))}
            </ol>
            <div className="actions rv rv--d3">
              <Link href="/research/publications" className="btn btn--mint">Search the archive</Link>
              <Link href="/research" className="btn btn--outline">Research overview</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 05 Leadership: wide image, three role cards */}
      <section className="section lead tone-light" aria-labelledby="lead-title">
        <span className="script script--teal lead__script rv" aria-hidden="true">Markets · Classrooms · Institutions</span>
        <div className="wrap">
          <div className="sh sh--split">
            <div className="rv">
              <span className="tag tag--dark">Academic leadership</span>
              <h2 id="lead-title"><Statement s={leadership.statement} /></h2>
            </div>
            <p className="sh__aside rv rv--d1">{leadership.support}</p>
          </div>
          <div className="lead__media rv rv--img">
            <ImageSlot name="leadership" tone="light" sizes="100vw" />
          </div>
          <ol className="roles" role="list">
            {lead.map((e, i) => (
              <li key={e.id} className={`rv rv--d${i}`}>
                <span className="tag tag--mint tag--sm">{e.year}</span>
                <h3>{e.role}</h3>
                <p className="roles__org">{e.org}</p>
                {e.desc && <p className="roles__d">{e.desc}</p>}
              </li>
            ))}
          </ol>
          {earlier.length > 0 && (
            <p className="earlier rv">
              <span className="earlier__k">Earlier</span>
              {earlier.map((e, i) => (
                <span key={e.id}>{i > 0 && <span className="earlier__sep" aria-hidden="true"> · </span>}{e.role}, {e.org.split(",")[0]} <span className="mute">({e.year})</span></span>
              ))}
            </p>
          )}
          <div className="actions rv"><Link href="/journey" className="btn btn--outline btn--dark-text">Full journey</Link></div>
        </div>
      </section>

      {/* 06 Intellectual work: soft mint panel */}
      <section className="panel-wrap" aria-labelledby="work-title">
        <div className="panel tone-mint">
          <div className="grid work">
            <div className="work__intro rv">
              <span className="tag tag--dark">Books · Proceedings · IPR</span>
              <h2 id="work-title"><Statement s={work.statement} /></h2>
              <p className="body">{work.support}</p>
              <div className="actions">
                <Link href="/research/books" className="btn btn--mint">All books and chapters</Link>
              </div>
            </div>
            <div className="work__shelf rv rv--d1">
              <div className="shelf">
                {books.map((b) => (
                  <Link key={b.slug} href="/research/books" className="book" aria-label={`${b.title}, ${b.year}`}>
                    <span className="book__k">{b.type === "book" ? "Book" : "Edited volume"} · {b.year}</span>
                    <span className="book__t">{b.title.replace(/ \(Conference Proceedings\)$/, "")}</span>
                    <span className="book__m">{b.publisher}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="work__cols rv rv--d1">
              <div>
                <span className="eyebrow">Registered IPR</span>
                <ul className="plain" role="list">
                  {iprItems.map((r) => (
                    <li key={r.id}><b>{r.title}</b><span>{r.jurisdiction}{r.number ? ` · ${r.number}` : ""}</span></li>
                  ))}
                </ul>
                <Link href="/research/ipr" className="arrow">IPR records</Link>
              </div>
              <div>
                <span className="eyebrow">Conference proceedings</span>
                <ul className="plain" role="list">
                  {proceedings.map((e) => (
                    <li key={e.id}><b>{e.event.replace(/^(\d\w+ )?International Conference: /, "")}</b><span>{e.role}{e.date ? ` · ${formatDate(e.date)}` : ""}</span></li>
                  ))}
                </ul>
                <Link href="/about/speaking" className="arrow">Documented engagements</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 Statement: dark, script accents */}
      <section className="statement tone-dark" aria-label={principle.label}>
        <Curves className="statement__curves curves--soft" />
        <div className="wrap rv">
          <span className="tag tag--outline">{principle.label}</span>
          <p className="statement__t"><Statement s={principle.statement} /></p>
          <Link href="/about#approach" className="btn btn--outline">How that shapes the work</Link>
        </div>
      </section>

      {/* 08 Writing: featured article + bylines */}
      <section className="section tone-light" aria-labelledby="writing-title">
        <div className="wrap">
          <div className="sh">
            <div className="rv">
              <span className="tag tag--mint">Writing</span>
              <h2 id="writing-title">Ideas, <em>in his own words</em>.</h2>
            </div>
            <Link href="/ideas" className="arrow rv">All ideas</Link>
          </div>
          <div className="grid mag">
            {featured && (
              <article className="mag__feature rv">
                <Link href={`/ideas/${featured.slug}`} className="mag__img rv rv--img" aria-hidden="true" tabIndex={-1}>
                  <ImageSlot name="ideas" tone="light" sizes="(max-width: 1024px) 100vw, 62vw" />
                  <span className="tag tag--mint mag__tag">{pillars[featured.pillar].name}</span>
                </Link>
                <h3><Link href={`/ideas/${featured.slug}`}>{featured.title}</Link></h3>
                <p>{featured.summary}</p>
                <div className="mag__foot">
                  <time dateTime={featured.published}>{formatDate(featured.published)}</time>
                  <span>{featured.readingMinutes} min read</span>
                  <Link href={`/ideas/${featured.slug}`} className="btn btn--mint btn--sm">Read the article</Link>
                </div>
              </article>
            )}
            {bylines.length > 0 && (
              <div className="mag__side rv rv--d2">
                <span className="eyebrow">Also published in</span>
                <ul className="bylines" role="list">
                  {bylines.map((m) => (
                    <li key={m.slug}>
                      <a href={m.url} rel="noopener" target="_blank">
                        <span className="bylines__meta">{m.outlet}{m.date ? ` · ${formatDate(m.date)}` : ""}</span>
                        <span className="bylines__t">{m.headline}</span>
                        <span className="bylines__go" aria-hidden="true"><Icon name="arrow" size={16} /></span>
                      </a>
                    </li>
                  ))}
                </ul>
                <Link href="/media" className="arrow">All media</Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 09 Media and speaking: soft mint panel */}
      <section className="panel-wrap" aria-labelledby="media-title">
        <div className="panel tone-mint">
          <div className="grid press">
            <div className="press__a">
              <span className="tag tag--dark rv">Media & speaking</span>
              <h2 id="media-title" className="rv"><Statement s={speaking.statement} /></h2>
              <ul className="quotes rv rv--d1" role="list">
                {interviews.map((m) => (
                  <li key={m.slug}>
                    <a href={m.url} rel="noopener" target="_blank">
                      <span className="quotes__i"><Icon name="quote" size={18} /></span>
                      <span className="quotes__meta">{m.outlet}{m.date ? ` · ${formatDate(m.date)}` : ""}</span>
                      <span className="quotes__t">{m.headline}</span>
                      <span className="quotes__d">{m.description}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="press__b">
              <div className="rv rv--img press__img">
                <ImageSlot name="speaking" tone="light" sizes="(max-width: 1024px) 100vw, 36vw" />
                <span className="press__mic" aria-hidden="true"><Icon name="mic" /></span>
              </div>
              <p className="body rv">{speaking.support}</p>
              <div className="actions rv">
                <Link href="/about/speaking" className="btn btn--mint">Speaking topics</Link>
                <Link href="/contact?topic=Speaking" className="btn btn--outline btn--dark-text">Invite</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Final CTA: dark rounded card with portrait */}
      <section className="cta" aria-labelledby="cta-title" id="contact">
        <div className="cta__card tone-dark">
          <Curves className="cta__curves" />
          <div className="cta__text rv">
            <span className="tag tag--outline">Contact</span>
            <h2 id="cta-title"><Statement s={cta.statement} /></h2>
            <p className="body">{cta.support}</p>
            <div className="actions">
              <Link href="/contact" className="btn btn--mint">Get in touch</Link>
              <Link href="/about/speaking" className="btn btn--outline">Speaking and engagement</Link>
            </div>
            <ul className="cta__topics" role="list">
              {contactTopics.map((t) => (
                <li key={t}><Link href={`/contact?topic=${encodeURIComponent(t)}`}>{t}</Link></li>
              ))}
            </ul>
          </div>
          <div className="cta__media rv rv--img">
            <ImageSlot name="cta" tone="dark" cover sizes="(max-width: 760px) 100vw, 45vw" />
          </div>
        </div>
      </section>
    </>
  );
}
