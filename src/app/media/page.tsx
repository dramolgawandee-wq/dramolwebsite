import Link from "next/link";
import Icon from "@/components/Icons";
import ImageSlot from "@/components/ImageSlot";
import JsonLd from "@/components/JsonLd";
import PageHead, { SectionHead } from "@/components/PageHead";
import { speaking } from "@/content/home";
import { media } from "@/content/media";
import { publishable } from "@/lib/evidence";
import { pageNode } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { formatDate } from "@/lib/site";

const description =
  "Interviews with and articles by Dr. Amol Gawande in Education Post, Deccan Herald, Hindustan Times, Elets Digital Learning and CEO Insights India.";

export const metadata = pageMeta({ title: "Media & Conversations", description, path: "/media" });

export default function Media() {
  const items = publishable(media).sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
  const interviews = items.filter((m) => m.type !== "Article");
  const bylines = items.filter((m) => m.type === "Article");
  const Card = ({ m, i }: { m: (typeof items)[number]; i: number }) => (
    <li key={m.slug} className={`rv rv--d${i % 3}`}>
      <a href={m.url} rel="noopener" target="_blank">
        <span className="quotes__i"><Icon name={m.type === "Article" ? "file" : "quote"} size={18} /></span>
        <span className="quotes__meta">{m.outlet}{m.date ? ` · ${formatDate(m.date)}` : ""} · {m.type}</span>
        <span className="quotes__t">{m.headline}</span>
        <span className="quotes__d">{m.description}</span>
      </a>
    </li>
  );
  return (
    <>
      <JsonLd graph={pageNode({ path: "/media", name: "Media & conversations", description, type: "CollectionPage", crumbs: [{ name: "Media", path: "/media" }] })} />
      <PageHead
        crumbs={[{ name: "Media", path: "/media" }]}
        eyebrow="Media & conversations"
        title={<>In conversation, <em>in print and on stage</em>.</>}
        lede="Published coverage and bylined articles. Each item links to the original publication."
        aside={<><Link href="/contact?topic=Media" className="btn btn--mint">Media enquiries</Link><Link href="/about/speaking" className="btn btn--outline">Speaking</Link></>}
        image="speaking"
        imageRatio="4 / 3"
      />

      {interviews.length > 0 && (
        <section className="section tone-mint" aria-labelledby="interviews">
          <div className="wrap">
            <SectionHead eyebrow="Interviews" id="interviews" title={<>In <em>conversation</em>.</>} />
            <ul className="quotes cards--2" role="list" style={{ display: "grid" }}>
              {interviews.map((m, i) => <Card key={m.slug} m={m} i={i} />)}
            </ul>
          </div>
        </section>
      )}

      {bylines.length > 0 && (
        <section className="section" aria-labelledby="bylines">
          <div className="wrap">
            <SectionHead eyebrow="Bylined articles" id="bylines" title={<>In <em>print</em>.</>} />
            <ul className="quotes cards--2" role="list" style={{ display: "grid" }}>
              {bylines.map((m, i) => <Card key={m.slug} m={m} i={i} />)}
            </ul>
          </div>
        </section>
      )}

      <section className="panel-wrap" aria-labelledby="speak">
        <div className="panel tone-mint">
          <div className="grid press">
            <div className="press__a">
              <span className="tag tag--dark rv" id="speak">On stage</span>
              <h2 className="rv rv--d1">Available <em>to speak</em>.</h2>
              <p className="body rv rv--d1" style={{ maxWidth: "34rem" }}>{speaking.support}</p>
              <div className="actions rv rv--d2">
                <Link href="/about/speaking" className="btn btn--mint">Speaking topics</Link>
                <Link href="/contact?topic=Speaking" className="btn btn--outline btn--dark-text">Invite</Link>
              </div>
            </div>
            <div className="press__b">
              <div className="rv rv--img press__img">
                <ImageSlot name="research" tone="light" ratio="4 / 3" sizes="(max-width: 1024px) 100vw, 36vw" />
                <span className="press__mic" aria-hidden="true"><Icon name="mic" /></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
