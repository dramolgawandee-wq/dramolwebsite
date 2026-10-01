/**
 * Site-wide constants. The production domain is not confirmed yet, so it is
 * read from NEXT_PUBLIC_SITE_URL and falls back to a placeholder that must
 * be replaced before launch. Canonicals, sitemap and JSON-LD all derive from it.
 */
export const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.amolgawande.com").replace(/\/$/, ""),
  name: "Dr. Amol Gawande",
  shortName: "Amol Gawande",
  tagline: "Rethinking education for a world that keeps changing.",
  description:
    "Dr. Amol Gawande is an academic leader, researcher and management educator writing and researching on the future of education, Gen Z, the future of work, technology and higher education.",
  locale: "en_IN",
  lang: "en",
  twitter: undefined as string | undefined, // [VERIFY: X/Twitter handle, if any]
};

export type NavItem = { href: string; label: string; children?: { href: string; label: string }[] };

/**
 * Primary navigation: five items plus the "Let's talk" call to action.
 * Research and About carry section sub-navigation (rendered as a tab row
 * on their pages and as nested items in the mobile menu).
 */
export const nav: NavItem[] = [
  { href: "/ideas", label: "Ideas" },
  {
    href: "/research",
    label: "Research",
    children: [
      { href: "/research", label: "Research" },
      { href: "/research/publications", label: "Publications" },
      { href: "/research/books", label: "Books" },
      { href: "/research/ipr", label: "IPR" },
    ],
  },
  { href: "/journey", label: "Journey" },
  { href: "/media", label: "Media" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about", label: "Profile" },
      { href: "/journey", label: "Journey" },
      { href: "/about/speaking", label: "Speaking" },
    ],
  },
];

/** Which primary item a path belongs to (for aria-current). */
export function sectionOf(pathname: string): string | undefined {
  if (pathname === "/journey") return "/journey";
  for (const item of nav) {
    if (pathname === item.href || pathname.startsWith(item.href + "/")) return item.href;
  }
  return undefined;
}

export const abs = (path = "/") => `${site.url}${path === "/" ? "/" : path}`;

export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  if (!m) return String(y);
  const date = new Date(Date.UTC(y, m - 1, d || 1));
  return date.toLocaleDateString("en-GB", {
    day: d ? "numeric" : undefined,
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** "2016 – 2019", "2021 – Present", "2019 – former" (ended, end date unconfirmed). */
export function period(start?: string, end?: string, current?: boolean) {
  const s = start?.slice(0, 4);
  const e = current ? "Present" : end?.slice(0, 4);
  if (s && e) return s === e ? s : `${s} – ${e}`;
  if (s) return `${s} – former`;
  return current ? "Present" : "";
}
