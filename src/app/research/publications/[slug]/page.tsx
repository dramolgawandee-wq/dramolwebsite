import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import PageHead from "@/components/PageHead";
import PubRow, { typeLabel } from "@/components/PubRow";
import { publications } from "@/content/publications";
import { publishable } from "@/lib/evidence";
import { pageNode, publicationNode, publicationPath } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

const detailed = () => publishable(publications).filter((p) => p.page && p.summary);

export function generateStaticParams() {
  return detailed().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = detailed().find((x) => x.slug === slug);
  if (!p) return {};
  return pageMeta({ title: p.title, description: `${typeLabel[p.type]} (${p.year}) by ${p.authors.join(", ")}${p.venue ? ` in ${p.venue}` : ""}. ${p.summary}`, path: publicationPath(p) });
}

export default async function PublicationPage({ params }: Props) {
  const { slug } = await params;
  const p = detailed().find((x) => x.slug === slug);
  if (!p) notFound();
  const path = publicationPath(p);
  const crumbs = [{ name: "Research", path: "/research" }, { name: "Publications", path: "/research/publications" }, { name: p.title, path }];
  const related = detailed().filter((x) => x.slug !== p.slug && x.areas.some((a) => p.areas.includes(a))).slice(0, 3);
  const source = p.doi ? `https://doi.org/${p.doi}` : p.url;

  return (
    <>
      <JsonLd graph={[...pageNode({ path, name: p.title, description: p.summary!, crumbs, about: false }), publicationNode(p)]} />
      <PageHead crumbs={crumbs} eyebrow={`${typeLabel[p.type]} · ${p.year}`} title={p.title} aside={source ? <a className="btn btn--mint" href={source} rel="noopener" target="_blank">{p.doi ? "Read at publisher" : "View record"}</a> : undefined} />
      <section className="section">
        <div className="wrap grid split">
          <div className="split__a">
            <span className="tag tag--dark">Summary</span>
            <p className="body ink2 mt-3" style={{ maxWidth: "36rem" }}>{p.summary}</p>
            <p className="small mute mt-3" style={{ maxWidth: "36rem" }}>This summary describes the topic of the work. For findings, methods and the full text, see the publisher record.</p>
            {source && (
              <a className="btn btn--solid mt-4" href={source} rel="noopener" target="_blank">
                {p.doi ? "Read at publisher" : "View record"}
              </a>
            )}
          </div>
          <div className="split__b">
            <ul className="defs" role="list">
              <li><span className="eyebrow">Authors</span><div className="defs__v"><p style={{ fontWeight: 400 }}>{p.authors.join(", ")}</p></div></li>
              {p.venue && <li><span className="eyebrow">Published in</span><div className="defs__v"><p style={{ fontWeight: 400 }}><i>{p.venue}</i></p></div></li>}
              {p.publisher && <li><span className="eyebrow">Publisher</span><div className="defs__v"><p style={{ fontWeight: 400 }}>{p.publisher}</p></div></li>}
              <li><span className="eyebrow">Year</span><div className="defs__v"><p style={{ fontWeight: 400 }}>{p.year}</p></div></li>
              {p.doi && <li><span className="eyebrow">DOI</span><div className="defs__v"><p style={{ fontWeight: 400 }}><a className="link" href={`https://doi.org/${p.doi}`} rel="noopener" target="_blank">{p.doi}</a></p></div></li>}
              {p.isbn && <li><span className="eyebrow">ISBN</span><div className="defs__v"><p style={{ fontWeight: 400 }}>{p.isbn}</p></div></li>}
              <li><span className="eyebrow">Areas</span><div className="defs__v"><p style={{ fontWeight: 400 }}>{p.areas.map((a, i) => (<span key={a}><Link href={`/research/publications?area=${encodeURIComponent(a)}`} className="link" style={{ textDecoration: "none" }}>{a}</Link>{i < p.areas.length - 1 ? ", " : ""}</span>))}</p></div></li>
            </ul>
          </div>
        </div>
      </section>
      {related.length > 0 && (
        <section className="section tone-mint" aria-labelledby="related">
          <div className="wrap">
            <span className="tag tag--dark" id="related" style={{ marginBottom: "1rem" }}>Related research</span>
            <ul className="list" role="list">
              {related.map((r) => (
                <li key={r.slug}><PubRow p={r} /></li>
              ))}
            </ul>
            <div className="mt-4" style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
              <Link href="/research/publications" className="arrow">All publications</Link>
              <Link href="/about" className="arrow">About Dr. Gawande</Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
