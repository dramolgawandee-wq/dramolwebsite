import Link from "next/link";
import Icon from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import PageHead, { SectionHead } from "@/components/PageHead";
import SubNav from "@/components/SubNav";
import { engagements, speakingTopics } from "@/content/speaking";
import { publishable } from "@/lib/evidence";
import { pageNode } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { formatDate } from "@/lib/site";

const description =
  "Speaking topics and documented academic engagements of Dr. Amol Gawande: higher education, the future of education, management education, technology, innovation, entrepreneurship and the future of work.";

export const metadata = pageMeta({ title: "Speaking & Academic Engagement", description, path: "/about/speaking" });

const topicIcons: Record<string, string> = { "Future of Education": "cap", "Higher Education": "chart", "Management Education": "briefcase", Technology: "spark", "Future of Work": "compass", "Innovation & Entrepreneurship": "layers" };

export default function Speaking() {
  const documented = publishable(engagements);
  return (
    <>
      <JsonLd graph={pageNode({ path: "/about/speaking", name: "Speaking & academic engagement", description, crumbs: [{ name: "About", path: "/about" }, { name: "Speaking", path: "/about/speaking" }] })} />
      <div className="wrap">
        <SubNav section="/about" current="/about/speaking" />
      </div>
      <PageHead
        crumbs={[{ name: "About", path: "/about" }, { name: "Speaking", path: "/about/speaking" }]}
        eyebrow="Speaking & academic engagement"
        title={<>Talks, panels and <em>academic conversations</em>.</>}
        lede="Dr. Gawande speaks on the areas his research and teaching cover. Documented engagements are listed separately from the topics he is available to discuss."
        aside={<><Link href="/contact?topic=Speaking" className="btn btn--mint">Invite Dr. Gawande to speak</Link><Link href="/media" className="btn btn--outline">Media</Link></>}
        image="speaking"
        imageRatio="4 / 3"
        script="On stage"
      />

      <section className="section tone-mint" aria-labelledby="topics">
        <div className="wrap">
          <SectionHead eyebrow="Speaking topics" id="topics" title={<>Areas he is available <em>to speak on</em>.</>} />
          <ul className="cards" role="list">
            {speakingTopics.map((t, i) => (
              <li key={t.title} className={`card--static rv rv--d${i % 3}`} style={{ background: "var(--white)" }}>
                <span className="card__icon"><Icon name={topicIcons[t.area] ?? "spark"} /></span>
                <div className="card__pills" style={{ marginTop: "0.9rem" }}><span>{t.area}</span></div>
                <span className="card__t" style={{ marginTop: "0.75rem" }}>{t.title}</span>
                <span className="card__d">{t.summary}</span>
              </li>
            ))}
          </ul>
          <p className="small mute mt-4" style={{ maxWidth: "40rem" }}>
            Topics are drawn from his published research, writing and institutional roles. Formats include keynotes, panels, faculty development sessions and closed-door academic conversations.
          </p>
        </div>
      </section>

      {documented.length > 0 && (
        <section className="section" aria-labelledby="documented">
          <div className="wrap">
            <SectionHead eyebrow="Documented engagements" id="documented" title={<>Conferences and <em>proceedings</em>.</>} />
            <ol className="jn" role="list">
              {documented.map((e, i) => (
                <li key={e.id} className={`rv rv--d${i % 3}`}>
                  <div>
                    <span className="tag tag--mint tag--sm">{e.date ? formatDate(e.date) : "Date not published"}{e.place ? ` · ${e.place}` : ""}</span>
                    <h3>{e.event}</h3>
                    <p className="jn__org">{e.role}</p>
                  </div>
                  <p className="jn__desc">{e.url && <a className="arrow" href={e.url} rel="noopener" target="_blank">Proceedings record</a>}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}
    </>
  );
}
