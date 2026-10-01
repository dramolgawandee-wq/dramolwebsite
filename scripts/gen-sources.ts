/**
 * Regenerates CONTENT-SOURCES.md from the evidence registry and the content
 * files that cite it. Run: npm run sources
 */
import { writeFileSync } from "node:fs";
import { sources } from "../src/content/sources.ts";
import { roles, education } from "../src/content/person.ts";
import { publications } from "../src/content/publications.ts";
import { ipr } from "../src/content/ipr.ts";
import { media } from "../src/content/media.ts";
import { engagements } from "../src/content/speaking.ts";

type Rec = { label: string; sourceIds: string[] };
const records: Rec[] = [
  ...roles.map((r) => ({ label: `Role — ${r.title}, ${r.org}${r.start ? ` (${r.start}${r.end ? ` to ${r.end}` : ""})` : ""}`, sourceIds: r.sourceIds })),
  ...education.map((e) => ({ label: `Education — ${e.label}`, sourceIds: e.sourceIds })),
  ...publications.map((p) => ({ label: `Publication — ${p.title} (${p.year})${p.doi ? ` · DOI ${p.doi}` : ""}${p.isbn ? ` · ISBN ${p.isbn}` : ""}`, sourceIds: p.sourceIds })),
  ...ipr.map((i) => ({ label: `IPR — ${i.title} · ${i.number ?? "no number"}`, sourceIds: i.sourceIds })),
  ...media.map((m) => ({ label: `Media — ${m.outlet}: ${m.headline}`, sourceIds: m.sourceIds })),
  ...engagements.map((e) => ({ label: `Engagement — ${e.event} (${e.role})`, sourceIds: e.sourceIds })),
];

const published = (r: Rec) => r.sourceIds.some((id) => sources.find((s) => s.id === id)?.status === "verified");
const esc = (s: string) => s.replace(/\|/g, "\\|");

let md = `# Content sources — Dr. Amol Gawande website

INTERNAL. Generated from \`src/content/sources.ts\` by \`npm run sources\` — do not edit by hand.
Generated: ${new Date().toISOString().slice(0, 10)}. Full research notes: \`research/dossier.md\`.

**Rule enforced in code:** a record appears on the site only if at least one of its sources has status \`verified\`
(\`src/lib/evidence.ts\`). Changing a source's status here is the only way to publish or unpublish the records that cite it.

## 1. Evidence registry

| ID | Claim | Source | Checked | Status | Notes |
|---|---|---|---|---|---|
${sources.map((s) => `| \`${s.id}\` | ${esc(s.claim)} | ${s.url ? `[${esc(s.source)}](${s.url})` : esc(s.source)} | ${s.checked} | **${s.status.toUpperCase()}** | ${esc(s.notes ?? "")} |`).join("\n")}

## 2. Every factual record and its sources

| Record | Sources | On site? |
|---|---|---|
${records.map((r) => `| ${esc(r.label)} | ${r.sourceIds.map((id) => `\`${id}\``).join(", ")} | ${published(r) ? "Yes" : "**No — held back**"} |`).join("\n")}

## 3. Fixed copy that states facts

These sentences are assembled in \`src/content/person.ts\` only from verified roles (author box, short bio, About page):

- "Dr. Amol Gawande is an academic leader, researcher and management educator." — descriptive positioning, supported by roles and publications above.
- "He has served as Director of Dr. D. Y. Patil B-School, Pune" — \`dypbs-bio\`, \`dypbs-current\` (past tense deliberately; the role is former).
- "is an Executive Board Member of the Association of Indian Management Schools (AIMS)" — \`aims-board\`.
- "is Founder & Director of Brookstone Institute of Global Studies, Dubai" — \`brookstone-in\`, \`linkedin\`.
- "Brookstone … is a KHDA-approved and licensed professional training institute" — \`brookstone-ae\`.
- Career history sentences on About — \`dypbs-bio\`.

## 4. Article references (external, cited in text)

- Pew Research Center — Generation Z defined as born 1997 onward: https://www.pewresearch.org/short-reads/2019/01/17/where-millennials-end-and-generation-z-begins/
- World Economic Forum — Future of Jobs Report 2025 (share of core skills expected to change by 2030): https://www.weforum.org/publications/the-future-of-jobs-report-2025/
- Government of India — National Education Policy 2020: https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf
`;

writeFileSync(new URL("../CONTENT-SOURCES.md", import.meta.url), md);
console.log(`CONTENT-SOURCES.md: ${sources.length} sources, ${records.length} records (${records.filter(published).length} published).`);
