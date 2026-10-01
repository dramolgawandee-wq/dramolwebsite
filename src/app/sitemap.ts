import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { publications } from "@/content/publications";
import { publishable } from "@/lib/evidence";
import { publicationPath } from "@/lib/schema";
import { abs } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
    ["/", 1, "weekly"],
    ["/about", 0.9, "monthly"],
    ["/ideas", 0.9, "weekly"],
    ["/research", 0.8, "monthly"],
    ["/research/publications", 0.8, "monthly"],
    ["/research/books", 0.6, "monthly"],
    ["/research/ipr", 0.5, "monthly"],
    ["/journey", 0.6, "yearly"],
    ["/about/speaking", 0.7, "monthly"],
    ["/media", 0.6, "monthly"],
    ["/contact", 0.5, "yearly"],
  ];
  return [
    ...staticPages.map(([path, priority, changeFrequency]) => ({ url: abs(path), lastModified: now, priority, changeFrequency })),
    ...articles.map((a) => ({ url: abs(`/ideas/${a.slug}`), lastModified: new Date(a.updated ?? a.published), priority: 0.8, changeFrequency: "yearly" as const })),
    ...publishable(publications)
      .filter((p) => p.page && p.summary)
      .map((p) => ({ url: abs(publicationPath(p)), priority: 0.5, changeFrequency: "yearly" as const })),
  ];
}
