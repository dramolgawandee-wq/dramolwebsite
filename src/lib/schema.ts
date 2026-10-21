import { knowsAbout, portrait, profiles, roles } from "@/content/person";
import type { Article, Faq, MediaItem, Publication } from "@/content/types";
import type { Crumb } from "@/components/Breadcrumbs";
import { publishable } from "./evidence";
import { abs, site } from "./site";

/*
 * One Person entity, referenced by @id from every page. The About page is
 * its canonical home, so the @id lives there. Only verified roles and
 * profiles reach the graph (see lib/evidence.ts).
 */
export const PERSON_ID = `${site.url}/about#person`;
export const WEBSITE_ID = `${site.url}/#website`;

const orgNode = (name: string, url?: string) => ({
  "@type": "Organization",
  name,
  ...(url ? { url } : {}),
});

export function personNode() {
  const verified = publishable(roles);
  const current = verified.filter((r) => r.current);
  const employers = current.filter((r) => r.kind !== "governance");
  const memberships = current.filter((r) => r.kind === "governance");
  const other = verified.filter((r) => !r.current);
  const titles = [...new Set(current.map((r) => `${r.title}, ${r.org}`))];

  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Amol Gawande",
    alternateName: ["Dr. Amol Gawande", "Dr Amol Gawande"],
    honorificPrefix: "Dr.",
    description:
      "Academic leader, researcher and management educator working on higher education, management education, finance and the future of education.",
    url: abs("/about"),
    mainEntityOfPage: abs("/about"),
    ...(portrait ? { image: abs(portrait.src) } : {}),
    jobTitle: ["Academic leader", "Researcher", "Management educator", ...titles],
    ...(employers.length ? { worksFor: employers.map((r) => orgNode(r.org, r.orgUrl)) } : {}),
    ...(memberships.length ? { memberOf: memberships.map((r) => orgNode(r.org, r.orgUrl)) } : {}),
    ...(other.length
      ? { affiliation: [...new Map(other.map((r) => [r.org, orgNode(r.org, r.orgUrl)])).values()] }
      : {}),
    knowsAbout,
    ...(profiles.length ? { sameAs: profiles.map((p) => p.url) } : {}),
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: abs("/"),
    name: site.name,
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
    about: { "@id": PERSON_ID },
  };
}

export function pageNode(opts: {
  path: string;
  name: string;
  description: string;
  type?: string;
  crumbs?: Crumb[];
  about?: boolean;
}) {
  const url = abs(opts.path);
  const graph: object[] = [
    {
      "@type": opts.type ?? "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: opts.name,
      description: opts.description,
      isPartOf: { "@id": WEBSITE_ID },
      inLanguage: "en",
      ...(opts.about !== false ? { about: { "@id": PERSON_ID } } : {}),
      ...(opts.type === "ProfilePage" ? { mainEntity: { "@id": PERSON_ID } } : {}),
      ...(opts.crumbs ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
    },
  ];
  if (opts.crumbs) graph.push(breadcrumbNode(opts.path, opts.crumbs));
  return graph;
}

export function breadcrumbNode(path: string, crumbs: Crumb[]) {
  const all = [{ name: "Home", path: "/" }, ...crumbs];
  return {
    "@type": "BreadcrumbList",
    "@id": `${abs(path)}#breadcrumb`,
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

export function articleNode(a: Article) {
  const url = abs(`/ideas/${a.slug}`);
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: a.title,
    description: a.description,
    url,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    datePublished: a.published,
    dateModified: a.updated ?? a.published,
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: "en",
    keywords: a.topics.join(", "),
    articleSection: a.topics[0],
    image: abs(`/ideas/${a.slug}/opengraph-image`),
    ...(a.references?.length ? { citation: a.references.map((r) => r.url) } : {}),
  };
}

/** A piece published by another outlet: authored by the person when bylined, about them when an interview. */
export function mediaNode(m: MediaItem) {
  return {
    "@type": m.type === "Article" ? "NewsArticle" : "CreativeWork",
    "@id": `${m.url}#work`,
    headline: m.headline,
    description: m.description,
    url: m.url,
    ...(m.date ? { datePublished: m.date } : {}),
    publisher: orgNode(m.outlet),
    ...(m.type === "Article" ? { author: { "@id": PERSON_ID } } : { about: { "@id": PERSON_ID } }),
    inLanguage: "en",
  };
}

export function faqNode(path: string, faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    "@id": `${abs(path)}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

const pubSchemaType: Record<Publication["type"], string> = {
  "journal-article": "ScholarlyArticle",
  "conference-paper": "ScholarlyArticle",
  "case-study": "CreativeWork",
  "book-chapter": "Chapter",
  book: "Book",
  "edited-book": "Book",
  report: "Report",
};

export const publicationPath = (p: Publication) => `/research/publications/${p.slug}`;

export function publicationNode(p: Publication) {
  const url = abs(publicationPath(p));
  return {
    "@type": pubSchemaType[p.type],
    "@id": `${url}#work`,
    name: p.title,
    ...(p.type.includes("book") && p.type !== "book-chapter" ? {} : { headline: p.title }),
    datePublished: String(p.year),
    author: p.authors.map((name) =>
      /gawande/i.test(name) ? { "@id": PERSON_ID } : { "@type": "Person", name }
    ),
    ...(p.venue ? { isPartOf: { "@type": "Periodical", name: p.venue } } : {}),
    ...(p.publisher ? { publisher: orgNode(p.publisher) } : {}),
    ...(p.isbn ? { isbn: p.isbn } : {}),
    ...(p.doi ? { identifier: { "@type": "PropertyValue", propertyID: "DOI", value: p.doi }, sameAs: `https://doi.org/${p.doi}` } : {}),
    ...(p.summary ? { abstract: p.summary } : {}),
    about: p.areas,
    url,
  };
}
