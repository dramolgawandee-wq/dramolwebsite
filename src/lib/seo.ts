import type { Metadata } from "next";
import { abs, site } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  /** Use the title as-is instead of appending the name. */
  absoluteTitle?: boolean;
};

/**
 * One place that produces title, canonical, Open Graph and Twitter tags,
 * so every page gets the same complete set.
 */
/** Cut at a word boundary so search snippets never end mid-word. */
export function clip(text: string, max: number) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,;:.—–-]+$/, "") + "…";
}

export function pageMeta(p: PageMeta): Metadata {
  const suffix = ` | ${site.name}`;
  const title = p.absoluteTitle ? p.title : `${clip(p.title, 64 - suffix.length)}${suffix}`;
  p = { ...p, description: clip(p.description, 160) };
  const url = abs(p.path);
  return {
    title: { absolute: title },
    description: p.description,
    alternates: { canonical: url },
    robots: p.noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description: p.description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: p.type ?? "website",
      ...(p.type === "article"
        ? { publishedTime: p.publishedTime, modifiedTime: p.modifiedTime, authors: [abs("/about")] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: p.description,
      ...(site.twitter ? { creator: site.twitter, site: site.twitter } : {}),
    },
  };
}
