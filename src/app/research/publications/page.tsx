import Link from "next/link";
import Filterable from "@/components/Filterable";
import JsonLd from "@/components/JsonLd";
import PageHead from "@/components/PageHead";
import PubRow, { typeLabel } from "@/components/PubRow";
import SubNav from "@/components/SubNav";
import { publications, researchFilters } from "@/content/publications";
import type { PubType } from "@/content/types";
import { publishable } from "@/lib/evidence";
import { pageNode, publicationNode } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { abs } from "@/lib/site";

const description =
  "Searchable archive of Dr. Amol Gawande’s publications: research papers, conference papers, book chapters, books and edited volumes, with DOIs and publisher records.";

export const metadata = pageMeta({ title: "Publications", description, path: "/research/publications" });

const typeOrder: PubType[] = ["journal-article", "conference-paper", "book-chapter", "book", "edited-book", "case-study", "report"];

export default function Publications() {
  const all = publishable(publications).sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
  const years = all.map((p) => p.year);
  const items = all.map((p) => ({
    key: p.slug,
    tags: { type: [typeLabel[p.type]], area: p.areas },
    text: [p.title, p.venue, p.publisher, p.authors.join(" "), p.doi, String(p.year)].filter(Boolean).join(" "),
    node: <PubRow p={p} showType />,
  }));
  const stats = [
    { n: all.length, label: "Publications" },
    { n: `${Math.min(...years)}–${Math.max(...years)}`, label: "Years covered" },
    { n: new Set(all.map((p) => p.publisher).filter(Boolean)).size, label: "Publishers" },
    { n: all.filter((p) => p.doi).length, label: "With a DOI" },
  ];
  return (
    <>
      <JsonLd
        graph={[
          ...pageNode({ path: "/research/publications", name: "Publications", description, type: "CollectionPage", crumbs: [{ name: "Research", path: "/research" }, { name: "Publications", path: "/research/publications" }] }),
          { "@type": "ItemList", "@id": `${abs("/research/publications")}#list`, itemListElement: all.map((p, i) => ({ "@type": "ListItem", position: i + 1, item: publicationNode(p) })) },
        ]}
      />
      <div className="wrap">
        <SubNav section="/research" current="/research/publications" />
      </div>
      <PageHead
        crumbs={[{ name: "Research", path: "/research" }, { name: "Publications", path: "/research/publications" }]}
        eyebrow="Publications"
        title={<>The publication <em>archive</em>.</>}
        lede="Filter by type or research area, or search by title, venue, co-author or DOI. Each record links to its publisher page."
        aside={<Link href="/research/books" className="btn btn--outline">Books and chapters</Link>}
      />
      <section className="section section--sm tone-mint" aria-label="Archive at a glance">
        <div className="wrap">
          <ul className="stat-row" role="list">
            {stats.map((s, i) => (
              <li key={s.label} className={`rv rv--d${Math.min(i, 3)}`}><b>{s.n}</b><span>{s.label}</span></li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="sr-only">All publications</h2>
          <Filterable
            items={items}
            groups={[
              { id: "type", label: "Type", options: typeOrder.map((t) => typeLabel[t]) },
              { id: "area", label: "Area", options: [...researchFilters] },
            ]}
            search="Search title, venue, co-author or DOI"
            noun="publications"
          />
        </div>
      </section>
    </>
  );
}
