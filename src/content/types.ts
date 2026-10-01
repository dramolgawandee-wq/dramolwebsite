/**
 * Content model. Everything factual on the site is data in src/content/,
 * and every factual record points at one or more entries in sources.ts.
 * Records whose sources are not "verified" are filtered out before render
 * (see lib/evidence.ts), so an unverified claim cannot reach a page by accident.
 */

export type SourceStatus = "verified" | "likely" | "unverified";

export interface Source {
  id: string;
  claim: string;
  /** Human name of the source, e.g. "AIMS — Executive Board page". */
  source: string;
  url?: string;
  /** ISO date the source was last checked. */
  checked: string;
  status: SourceStatus;
  notes?: string;
}

export interface Evidence {
  sourceIds: string[];
}

export interface Role extends Evidence {
  id: string;
  title: string;
  org: string;
  orgUrl?: string;
  place?: string;
  /** ISO year or year-month. Leave undefined when no source states it. */
  start?: string;
  end?: string;
  current?: boolean;
  /** Display-only period label when no start date is published, e.g. "2026–27 board". */
  when?: string;
  /** Grouping on the About page. */
  kind: "current" | "leadership" | "governance" | "earlier";
  industry?: boolean;
  summary?: string;
}

export type PubType =
  | "journal-article"
  | "book"
  | "edited-book"
  | "book-chapter"
  | "conference-paper"
  | "case-study"
  | "report";

export type ResearchArea =
  | "Finance"
  | "Management"
  | "Education Innovation"
  | "Technology"
  | "Digital Transformation"
  | "Higher Education"
  | "Emerging Technologies";

export interface Publication extends Evidence {
  slug: string;
  title: string;
  year: number;
  type: PubType;
  venue?: string;
  publisher?: string;
  authors: string[];
  doi?: string;
  isbn?: string;
  url?: string;
  areas: ResearchArea[];
  summary?: string;
  /** Show a dedicated /research/[slug] page. Requires a summary. */
  page?: boolean;
}

export interface IprRecord extends Evidence {
  id: string;
  kind: "patent" | "patent-application" | "utility-model" | "copyright" | "design" | "other";
  title: string;
  jurisdiction: string;
  number?: string;
  date?: string;
  status: string;
  people: string[];
  url?: string;
}

export interface MediaItem extends Evidence {
  slug: string;
  outlet: string;
  headline: string;
  date?: string;
  type: "Article" | "Interview" | "Feature" | "Quote" | "Institutional" | "Video";
  description: string;
  url: string;
}

export interface Engagement extends Evidence {
  id: string;
  event: string;
  role: string;
  date?: string;
  place?: string;
  topic?: string;
  url?: string;
}

/* ---- Articles ---- */

export type Pillar =
  | "future-of-education"
  | "gen-z-future-of-work"
  | "technology-ai"
  | "management-leadership"
  | "innovation-global";

export type Block =
  | { t: "p"; html: string }
  | { t: "h2"; id: string; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "quote"; text: string }
  | { t: "answer"; label: string; html: string };

export interface Faq {
  q: string;
  a: string;
}

export interface Article {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  /** One-to-two sentence card summary. */
  summary: string;
  pillar: Pillar;
  topics: string[];
  published: string;
  updated?: string;
  readingMinutes: number;
  body: Block[];
  faqs?: Faq[];
  related?: string[];
  /** External references cited in the text. */
  references?: { label: string; url: string }[];
}

export interface PlannedArticle {
  title: string;
  pillar: Pillar;
}
