import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHead, { SectionHead } from "@/components/PageHead";
import SubNav from "@/components/SubNav";
import { ipr } from "@/content/ipr";
import type { IprRecord } from "@/content/types";
import { publishable } from "@/lib/evidence";
import { pageNode } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { formatDate } from "@/lib/site";

const description =
  "Intellectual property records of Dr. Amol Gawande, listed with jurisdiction, registration number, date and status exactly as the patent office record states them.";

export const metadata = pageMeta({ title: "IPR", description, path: "/research/ipr" });

const groups: { kinds: IprRecord["kind"][]; eyebrow: string; title: React.ReactNode; note?: string }[] = [
  { kinds: ["patent"], eyebrow: "Patents", title: <>Granted <em>patents</em>.</> },
  { kinds: ["patent-application"], eyebrow: "Patent applications", title: <>Published <em>applications</em>.</> },
  { kinds: ["utility-model", "copyright", "design", "other"], eyebrow: "Utility models and other IPR", title: <>Utility models, copyright and <em>other registrations</em>.</>, note: "German utility models (Gebrauchsmuster) are registered without substantive examination and are listed here as utility models, not patents." },
];

export default function Ipr() {
  const records = publishable(ipr);
  const crumbs = [{ name: "Research", path: "/research" }, { name: "IPR", path: "/research/ipr" }];
  const shown = groups.map((g) => ({ ...g, items: records.filter((r) => g.kinds.includes(r.kind)) })).filter((g) => g.items.length);
  return (
    <>
      <JsonLd graph={pageNode({ path: "/research/ipr", name: "IPR", description, type: "CollectionPage", crumbs })} />
      <div className="wrap">
        <SubNav section="/research" current="/research/ipr" />
      </div>
      <PageHead
        crumbs={crumbs}
        eyebrow="IPR"
        title={<>Intellectual <em>property</em>.</>}
        lede="Each record uses the terminology of its register. Records appear here once they have been checked against the relevant patent or copyright office."
        aside={<Link href="/research" className="btn btn--outline">Research overview</Link>}
      />
      <section className="section section--sm tone-mint" aria-label="At a glance">
        <div className="wrap">
          <ul className="stat-row" role="list">
            <li className="rv"><b>{records.length}</b><span>Verified records</span></li>
            {shown.map((g, i) => (
              <li key={g.eyebrow} className={`rv rv--d${Math.min(i + 1, 3)}`}><a href={`#${g.eyebrow.replace(/\W+/g, "-")}`}><b>{g.items.length}</b><span>{g.eyebrow}</span></a></li>
            ))}
            <li className="rv rv--d3"><b>{new Set(records.map((r) => r.jurisdiction.split(",")[0])).size}</b><span>Jurisdictions</span></li>
          </ul>
        </div>
      </section>
      {shown.map((g, gi) => (
        <section key={g.eyebrow} id={g.eyebrow.replace(/\W+/g, "-")} className={`section${gi % 2 ? " tone-mint" : ""}`} aria-labelledby={`h-${gi}`} style={{ scrollMarginTop: "5rem" }}>
          <div className="wrap">
            <SectionHead eyebrow={g.eyebrow} id={`h-${gi}`} title={g.title} />
            <ul className="cards cards--2" role="list">
              {g.items.map((r, i) => (
                <li key={r.id} className={`card--static rv rv--d${i % 2}`} style={{ background: "var(--white)" }}>
                  <div className="card__pills" style={{ marginTop: 0 }}>
                    {r.date && <span>{formatDate(r.date)}</span>}
                    <span>{r.status}</span>
                  </div>
                  <span className="card__t" style={{ display: "block", marginTop: "0.9rem" }}>{r.title}</span>
                  <span className="card__d">{r.jurisdiction}{r.number ? ` · ${r.number}` : ""}</span>
                  <span className="card__d" style={{ marginTop: "0.5rem" }}>{r.people.join(", ")}</span>
                  {r.url && <div className="card__links"><a className="arrow" href={r.url} rel="noopener" target="_blank">Official record</a></div>}
                </li>
              ))}
            </ul>
            {g.note && <p className="small mute mt-4" style={{ maxWidth: "40rem" }}>{g.note}</p>}
          </div>
        </section>
      ))}
    </>
  );
}
