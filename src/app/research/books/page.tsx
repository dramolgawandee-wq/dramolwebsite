import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHead, { SectionHead } from "@/components/PageHead";
import PubRow from "@/components/PubRow";
import SubNav from "@/components/SubNav";
import { publications } from "@/content/publications";
import { publishable } from "@/lib/evidence";
import { pageNode, publicationNode } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

const description =
  "Books and edited volumes by Dr. Amol Gawande, including Marketing Strategy, the CASEPEDIA case-study series and international conference proceedings, with ISBNs.";

export const metadata = pageMeta({ title: "Books", description, path: "/research/books" });

export default function Books() {
  const all = publishable(publications).sort((a, b) => b.year - a.year);
  const books = all.filter((p) => p.type === "book");
  const edited = all.filter((p) => p.type === "edited-book");
  const chapters = all.filter((p) => p.type === "book-chapter");
  const crumbs = [{ name: "Research", path: "/research" }, { name: "Books", path: "/research/books" }];
  return (
    <>
      <JsonLd graph={[...pageNode({ path: "/research/books", name: "Books", description, type: "CollectionPage", crumbs }), ...[...books, ...edited].map(publicationNode)]} />
      <div className="wrap">
        <SubNav section="/research" current="/research/books" />
      </div>
      <PageHead
        crumbs={crumbs}
        eyebrow="Books"
        title={<>Books, edited volumes <em>and chapters</em>.</>}
        lede="ISBNs are as printed in the deposited volumes. Each entry links to its public record."
        image="ideas"
        imageRatio="4 / 3"
      />

      <section className="section tone-mint" aria-label="On the shelf">
        <div className="wrap">
          <SectionHead eyebrow="On the shelf" title={<>{books.length + edited.length} volumes <em>in print</em>.</>} />
          <div className="shelf shelf--wide">
            {[...books, ...edited].map((b, i) => (
              <a key={b.slug} href={b.doi ? `https://doi.org/${b.doi}` : b.url} rel="noopener" target="_blank" className={`book rv rv--d${i % 3}`} aria-label={`${b.title}, ${b.year}`}>
                <span className="book__k">{b.type === "book" ? "Book" : "Edited volume"} · {b.year}</span>
                <span className="book__t">{b.title.replace(/ \(Conference Proceedings\)$/, "")}</span>
                <span className="book__m">{b.publisher}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {books.length > 0 && (
        <section className="section" aria-labelledby="authored">
          <div className="wrap">
            <SectionHead eyebrow="Books" id="authored" title={<>Authored <em>books</em>.</>} />
            <ul className="list" role="list">{books.map((p) => <li key={p.slug} className="rv"><PubRow p={p} /></li>)}</ul>
          </div>
        </section>
      )}
      {edited.length > 0 && (
        <section className="section section--top0" aria-labelledby="edited">
          <div className="wrap">
            <SectionHead eyebrow="Edited volumes" id="edited" title={<>Case-study collections and <em>conference proceedings</em>.</>} />
            <ul className="list" role="list">{edited.map((p) => <li key={p.slug} className="rv"><PubRow p={p} /></li>)}</ul>
          </div>
        </section>
      )}
      {chapters.length > 0 && (
        <section className="section tone-mint" aria-labelledby="chapters">
          <div className="wrap">
            <SectionHead eyebrow="Book chapters" id="chapters" title={<>Chapters in <em>edited books</em>.</>} side={<Link href="/research/publications" className="btn btn--outline btn--dark-text">Full archive</Link>} />
            <ul className="list" role="list">{chapters.map((p) => <li key={p.slug} className="rv"><PubRow p={p} /></li>)}</ul>
          </div>
        </section>
      )}
    </>
  );
}
