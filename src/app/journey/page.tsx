import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import JsonLd from "@/components/JsonLd";
import PageHead, { Curves, SectionHead } from "@/components/PageHead";
import SubNav from "@/components/SubNav";
import { leadership } from "@/content/home";
import { timeline } from "@/lib/journey";
import { pageNode } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

const description =
  "The career of Dr. Amol Gawande: from securities markets to management education in Pune, the directorship of Dr. D. Y. Patil B-School, the AIMS Executive Board and Brookstone Institute of Global Studies, Dubai.";

export const metadata = pageMeta({ title: "Journey", description, path: "/journey" });

export default function Journey() {
  const entries = timeline();
  const academic = entries.filter((e) => !e.industry);
  const industry = entries.filter((e) => e.industry);
  const Item = ({ e, i }: { e: (typeof entries)[number]; i: number }) => (
    <li className={`rv rv--d${i % 3}`}>
      <div>
        <span className="tag tag--mint tag--sm">{e.year}</span>
        <h3>{e.role}</h3>
        <p className="jn__org">{e.org}</p>
      </div>
      <p className="jn__desc">{e.desc}</p>
    </li>
  );
  return (
    <>
      <JsonLd graph={pageNode({ path: "/journey", name: "Journey", description, crumbs: [{ name: "Journey", path: "/journey" }] })} />
      <div className="wrap">
        <SubNav section="/about" current="/journey" />
      </div>
      <PageHead
        crumbs={[{ name: "About", path: "/about" }, { name: "Journey", path: "/journey" }]}
        eyebrow="Journey"
        title={<>From markets to classrooms to <em>institutions</em>.</>}
        lede={leadership.support}
        image="speaking"
        imageRatio="4 / 3"
        script="Markets · Classrooms · Institutions"
      />

      <section className="section tone-mint" aria-label="Academic career">
        <div className="wrap">
          <SectionHead eyebrow="Academia and governance" id="academia" title={<>Roles held, <em>with the dates their sources publish</em>.</>} lede="Where no date is published, none is shown." />
          <ol className="jn" role="list">
            {academic.map((e, i) => <Item key={e.id} e={e} i={i} />)}
          </ol>
        </div>
      </section>

      <section className="section tone-light" aria-label="Wide view">
        <div className="wrap">
          <div className="lead__media rv rv--img">
            <ImageSlot name="leadership" tone="light" sizes="100vw" />
          </div>
        </div>
      </section>

      {industry.length > 0 && (
        <section className="section section--top0 tone-light" aria-label="Before academia">
          <div className="wrap">
            <SectionHead eyebrow="Before academia" id="industry" title={<>An earlier career in <em>securities markets</em>.</>} />
            <ol className="jn" role="list">
              {industry.map((e, i) => <Item key={e.id} e={e} i={i} />)}
            </ol>
          </div>
        </section>
      )}

      <section className="statement tone-dark" aria-label="Continue">
        <Curves className="curves--soft" />
        <div className="wrap rv">
          <span className="tag tag--outline">Continue</span>
          <p className="statement__t">The route explains the research: <em>institutions, quality and the people they prepare</em>.</p>
          <div className="actions actions--center">
            <Link href="/about" className="btn btn--mint">Profile</Link>
            <Link href="/research" className="btn btn--outline">Research</Link>
          </div>
        </div>
      </section>
    </>
  );
}
