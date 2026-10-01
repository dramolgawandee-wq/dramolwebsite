import { articles, getArticle } from "@/content/articles";
import { pillars } from "@/content/pillars";
import { ogCard, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const a = getArticle((await params).slug);
  return ogCard({ kicker: a ? pillars[a.pillar].name : "Ideas", title: a?.title ?? "Ideas" });
}
