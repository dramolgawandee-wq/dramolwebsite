import Link from "next/link";
import type { Publication } from "@/content/types";
import { publicationPath } from "@/lib/schema";

export const typeLabel: Record<Publication["type"], string> = {
  "journal-article": "Research paper",
  "conference-paper": "Conference paper",
  "book-chapter": "Book chapter",
  book: "Book",
  "edited-book": "Edited volume",
  "case-study": "Case study",
  report: "Technical report",
};

function Authors({ authors }: { authors: string[] }) {
  return (
    <p className="pub__authors">
      {authors.map((a, i) => (
        <span key={a}>
          {/gawande/i.test(a) ? <b>{a}</b> : a}
          {i < authors.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
  );
}

/** One publication as an editorial row: year, title, venue, authors, DOI, source link. */
export default function PubRow({ p, showType = false }: { p: Publication; showType?: boolean }) {
  const hasPage = p.page && p.summary;
  const source = p.doi ? `https://doi.org/${p.doi}` : p.url;
  return (
    <div className="row">
      <div className="row__meta">
        <span>{p.year}</span>
        {showType && <span className="tag" style={{ display: "block", marginTop: "0.35rem" }}>{typeLabel[p.type]}</span>}
      </div>
      <div className="row__main">
        <h3 className="row__title">
          {hasPage ? <Link href={publicationPath(p)}>{p.title}</Link> : p.title}
        </h3>
        <p className="pub__meta">
          {p.venue && <i>{p.venue}</i>}
          {p.publisher && <span>{p.publisher}</span>}
          {p.isbn && <span>ISBN {p.isbn}</span>}
        </p>
        <Authors authors={p.authors} />
        {p.doi && <p className="pub__meta pub__doi">DOI {p.doi}</p>}
      </div>
      <div className="row__end">
        {source && (
          <a className="arrow arrow--mute" href={source} rel="noopener" target="_blank">
            {p.doi ? "Read" : "Source"}
          </a>
        )}
      </div>
    </div>
  );
}
