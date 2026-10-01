import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleBody from "@/components/ArticleBody";
import AuthorBox from "@/components/AuthorBox";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import ImageSlot from "@/components/ImageSlot";
import JsonLd from "@/components/JsonLd";
import { articles, explorationAreas, getArticle } from "@/content/articles";
import { pillars } from "@/content/pillars";
import { researchAreas } from "@/content/person";
import { articleNode, faqNode, pageNode } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { formatDate } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const a = getArticle((await params).slug);
  if (!a) return {};
  return pageMeta({ title: a.seoTitle, absoluteTitle: true, description: a.description, path: `/ideas/${a.slug}`, type: "article", publishedTime: a.published, modifiedTime: a.updated });
}

export default async function ArticlePage({ params }: Props) {
  const a = getArticle((await params).slug);
  if (!a) notFound();
  const path = `/ideas/${a.slug}`;
  const crumbs = [{ name: "Ideas", path: "/ideas" }, { name: a.title, path }];
  const related = articles.filter((x) => x.slug !== a.slug && (a.related?.includes(x.slug) || x.pillar === a.pillar)).slice(0, 3);
  const areas = explorationAreas.filter((t) => t.pillar === a.pillar || a.topics.includes(t.topic)).slice(0, 3);
  const research = researchAreas.find((r) => r.tag === "Higher Education");

  return (
    <>
      <JsonLd graph={[...pageNode({ path, name: a.title, description: a.description, crumbs }), articleNode(a), ...(a.faqs?.length ? [faqNode(path, a.faqs)] : [])]} />
      <article>
        <header className="wrap article article__head">
          <Breadcrumbs crumbs={crumbs} />
          <span className="tag tag--dark mt-4">{pillars[a.pillar].name}</span>
          <h1 className="rv">{a.title}</h1>
          <p className="lede mt-3 rv rv--d1">{a.summary}</p>
          <p className="article__by">
            <span>By <Link href="/about">Dr. Amol Gawande</Link></span>
            <time dateTime={a.published}>{formatDate(a.published)}</time>
            {a.updated && <span>Updated {formatDate(a.updated)}</span>}
            <span>{a.readingMinutes} min read</span>
          </p>
          <div className="article__img rv rv--img">
            <ImageSlot name="ideas" tone="light" sizes="(max-width: 760px) 100vw, 46rem" />
          </div>
        </header>

        <div className="wrap article">
          <ArticleBody blocks={a.body} />

          {a.references?.length ? (
            <section className="mt-5" aria-labelledby="refs">
              <span className="tag tag--dark" id="refs" style={{ marginBottom: "0.75rem" }}>References</span>
              <ol className="refs">
                {a.references.map((r) => (
                  <li key={r.url}><a href={r.url} rel="noopener" target="_blank">{r.label}</a></li>
                ))}
              </ol>
            </section>
          ) : null}

          {a.faqs?.length ? (
            <section className="mt-5" aria-labelledby="faq">
              <span className="tag tag--dark" id="faq" style={{ marginBottom: "1rem" }}>Questions this article answers</span>
              <Faq items={a.faqs} />
            </section>
          ) : null}

          <div className="mt-5">
            <AuthorBox />
          </div>
        </div>
      </article>

      <section className="section band mt-5" aria-labelledby="related">
        <div className="wrap">
          <span className="tag tag--dark" id="related" style={{ marginBottom: "1rem" }}>Related ideas</span>
          {related.length > 0 && (
            <ul className="list" role="list">
              {related.map((r) => (
                <li key={r.slug}>
                  <div className="row">
                    <div className="row__meta"><time dateTime={r.published}>{formatDate(r.published)}</time></div>
                    <div className="row__main"><h3 className="row__title"><Link href={`/ideas/${r.slug}`}>{r.title}</Link></h3></div>
                    <div className="row__end"><Link href={`/ideas/${r.slug}`} className="arrow arrow--mute">Read</Link></div>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <ul className="topics topics--grid mt-4" role="list">
            {areas.map((t) => (
              <li key={t.topic}>
                <Link href={`/ideas#${t.pillar}`}>
                  <span className="topics__t">{t.topic}</span>
                  <span className="topics__d">{t.summary}</span>
                </Link>
              </li>
            ))}
            {research && (
              <li>
                <Link href={`/research/publications?area=${encodeURIComponent(research.tag)}`}>
                  <span className="topics__t">Research: {research.name}</span>
                  <span className="topics__d">{research.blurb}</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </section>
    </>
  );
}
