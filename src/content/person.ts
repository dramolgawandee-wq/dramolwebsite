import { isVerified, publishable } from "../lib/evidence.ts";
import type { Evidence, ResearchArea, Role } from "./types";

/*
 * The Person entity. Everything factual here must trace to sources.ts.
 * Wording rules (see HANDOFF.md §1):
 *  - The D. Y. Patil directorship is a FORMER role. Never present tense.
 *  - Brookstone is a professional training institute, not degree-awarding.
 *  - No awards, experience-year counts or patent-grant counts on the site.
 */

export const roles: Role[] = [
  {
    id: "brookstone",
    title: "Founder & Director",
    org: "Brookstone Institute of Global Studies",
    orgUrl: "https://www.brookstone.ae/",
    place: "Dubai",
    current: true,
    kind: "current",
    summary: "Founder of a KHDA-approved, licensed professional training institute in Dubai.",
    sourceIds: ["brookstone-in", "linkedin"],
  },
  {
    id: "aims-board",
    title: "Executive Board Member",
    org: "Association of Indian Management Schools (AIMS)",
    orgUrl: "https://aims.org.in/",
    current: true,
    when: "2026–27 board",
    kind: "governance",
    summary: "Listed on the AIMS Executive Board for 2026–2027 (West zone).",
    sourceIds: ["aims-board"],
  },
  {
    id: "aims-pune",
    title: "Chairman, Pune Chapter",
    org: "Association of Indian Management Schools (AIMS)",
    when: "Earlier",
    kind: "governance",
    summary: "Led the Pune chapter of AIMS before joining its Executive Board.",
    sourceIds: ["dypbs-bio"],
  },
  {
    id: "dypbs",
    title: "Director",
    org: "Dr. D. Y. Patil B-School",
    place: "Pune",
    start: "2019-08",
    kind: "leadership",
    summary:
      "Led the business school in Tathawade, Pune. Co-edited the school’s CASEPEDIA case-study series and its international conference proceedings.",
    sourceIds: ["dypbs-bio", "dypbs-current"],
  },
  {
    id: "gbsrc",
    title: "Professor",
    org: "Global Business School and Research Centre",
    place: "Pune",
    start: "2016-12",
    end: "2019-07",
    kind: "earlier",
    sourceIds: ["dypbs-bio"],
  },
  {
    id: "mit-stm",
    title: "Assistant Professor",
    org: "MIT School of Telecom Management",
    place: "Pune",
    start: "2014-03",
    end: "2016-12",
    kind: "earlier",
    sourceIds: ["dypbs-bio"],
  },
  {
    id: "mitcon",
    title: "Assistant Professor",
    org: "MITCON Institute of Management",
    place: "Pune",
    start: "2011-12",
    end: "2014-03",
    kind: "earlier",
    sourceIds: ["dypbs-bio"],
  },
  {
    id: "siddhant",
    title: "Lecturer, MBA Department",
    org: "Siddhant College of Engineering",
    place: "Pune",
    start: "2011-01",
    end: "2011-12",
    kind: "earlier",
    summary: "First academic role, after an industry career in securities markets.",
    sourceIds: ["dypbs-bio"],
  },
  {
    id: "capstone",
    title: "Manager, Trading (U.S. Equity Market)",
    org: "Capstone Securities Analysis Pvt. Ltd.",
    start: "2009-05",
    end: "2010-12",
    kind: "earlier",
    industry: true,
    sourceIds: ["dypbs-bio"],
  },
  {
    id: "syscon",
    title: "Manager, Commodity Advisory Services",
    org: "Syscon Securities Pvt. Ltd.",
    start: "2004-01",
    end: "2007-05",
    kind: "earlier",
    industry: true,
    sourceIds: ["dypbs-bio"],
  },
];

export const education: ({ label: string; detail?: string } & Evidence)[] = [
  { label: "Ph.D. in Management", detail: "[VERIFY: EXACT DOCTORATE INSTITUTION]", sourceIds: ["dypbs-bio"] },
  { label: "MMS in Financial Management", detail: "University of Mumbai", sourceIds: ["dypbs-bio", "linkedin"] },
  { label: "M.A. in Psychology", sourceIds: ["dypbs-bio"] },
  { label: "B.Com.", sourceIds: ["dypbs-bio"] },
];

const allProfiles: ({ name: string; url: string } & Evidence)[] = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/amol-gawande-a6a439b/", sourceIds: ["linkedin"] },
  { name: "Google Scholar", url: "https://scholar.google.com/citations?user=D5AuNNkAAAAJ", sourceIds: ["scholar"] },
  { name: "ORCID", url: "https://orcid.org/0000-0001-6430-5688", sourceIds: ["orcid"] },
  { name: "ResearchGate", url: "https://www.researchgate.net/profile/Amol-Gawande", sourceIds: ["researchgate"] },
];

/** Verified profiles only. These become schema.org sameAs and the footer links. */
export const profiles = publishable(allProfiles);

/**
 * Portrait slot. Drop a 4:5 editorial portrait (at least 1600px tall,
 * neutral background) at public/portrait.jpg and set this. The hero,
 * About page and Person schema pick it up with no layout change.
 * Example: { src: "/portrait.jpg", alt: "Dr. Amol Gawande", width: 1600, height: 2000 }
 */
export const portrait: { src: string; alt: string; width: number; height: number } | null = null;

export const knowsAbout = [
  "Higher education",
  "Management education",
  "Future of education",
  "Outcome-based education",
  "Accreditation and quality assurance in higher education",
  "Finance",
  "Financial management",
  "Digital transformation",
  "Emerging technologies",
  "Machine learning applications in education",
  "Marketing strategy",
  "Case method teaching",
  "Future of work",
  "Gen Z and education",
  "AI in education",
  "Personalised learning",
  "Global education",
  "Entrepreneurship education",
];

export const researchStatement =
  "Research across finance, management, technology and higher education.";

/** Research categories in the order the brief lists them. `tag` is the archive filter they open. */
export const researchAreas: { name: string; blurb: string; tag: ResearchArea }[] = [
  { name: "Finance", tag: "Finance", blurb: "Digital payment systems, GST compliance for MSMEs and financial management, rooted in an earlier career in securities markets." },
  { name: "Management", tag: "Management", blurb: "Marketing strategy, HR practice, organisational behaviour and the management case studies used to teach them." },
  { name: "Digital Transformation", tag: "Digital Transformation", blurb: "How retailers and financial firms use digital channels and data to compete." },
  { name: "Emerging Technologies", tag: "Emerging Technologies", blurb: "Augmented reality in retail and insurance, machine learning, and decision-support systems for planning." },
  { name: "Higher Education", tag: "Higher Education", blurb: "Quality assurance, accreditation and academic audit in Indian higher education, and the quality of business-school research." },
  { name: "Education Innovation", tag: "Education Innovation", blurb: "Student engagement, leadership education and data-informed ways of supporting learners." },
];

/* ---------- Copy built only from verified roles ---------- */

function role(id: string) {
  const r = roles.find((x) => x.id === id);
  if (!r) throw new Error(`Unknown role ${id}`);
  return isVerified(r) ? r : null;
}

/** Credential strip under the hero. Labels and values follow the brief. */
export function credStrip() {
  const out: { label: string; value: string; href: string }[] = [];
  if (role("dypbs")) out.push({ label: "Former Director", value: "Dr. D. Y. Patil B-School", href: "/journey" });
  if (role("brookstone")) out.push({ label: "Founder & Director", value: "Brookstone Institute of Global Studies, Dubai", href: "/about" });
  if (role("aims-board")) out.push({ label: "Executive Board Member", value: "Association of Indian Management Schools", href: "/journey" });
  out.push({ label: "Research", value: "Finance · Management · Technology · Higher Education", href: "/research" });
  return out;
}

export function authorBio() {
  const parts = ["Dr. Amol Gawande is an academic leader, researcher and management educator."];
  const bits: string[] = [];
  if (role("dypbs")) bits.push("has served as Director of Dr. D. Y. Patil B-School, Pune");
  if (role("aims-board")) bits.push("is an Executive Board Member of the Association of Indian Management Schools (AIMS)");
  if (role("brookstone")) bits.push("is Founder & Director of Brookstone Institute of Global Studies, Dubai");
  if (bits.length) {
    const last = bits.pop();
    parts.push(`He ${bits.length ? bits.join(", ") + ", and " : ""}${last}.`);
  }
  return parts.join(" ");
}

export function shortBio() {
  return [
    authorBio(),
    "Before academia he worked in securities markets, including trading in US equities. His academic career has taken him through MITCON Institute of Management, MIT School of Telecom Management and Global Business School and Research Centre in Pune.",
    "His research covers quality and accreditation in higher education, finance, management, digital transformation and applied machine learning.",
  ].join(" ");
}

/** Credential groups for About and the homepage About section. Plain lists, never badges. */
export function credentialGroups() {
  const out: { label: string; items: { title: string; org: string }[] }[] = [];
  const b = role("brookstone");
  if (b) out.push({ label: "Current", items: [{ title: b.title, org: `${b.org}, ${b.place}` }] });
  const d = role("dypbs");
  if (d) out.push({ label: "Former", items: [{ title: d.title, org: d.org }] });
  const a = role("aims-board");
  if (a) out.push({ label: "Academic governance", items: [{ title: a.title, org: "Association of Indian Management Schools" }] });
  return out;
}

export function educationList() {
  return publishable(education).map((e) => ({
    title: e.label,
    org: e.detail?.startsWith("[VERIFY") ? "" : e.detail ?? "",
  }));
}

export function aboutSections() {
  return [
    {
      id: "who",
      q: "Who is Dr. Amol Gawande?",
      paras: [
        authorBio(),
        "His work sits where education, management and technology meet: how institutions measure and improve the quality of what they teach, how students are prepared for work that keeps changing, and how technologies such as machine learning and augmented reality are reshaping business and learning.",
      ],
    },
    {
      id: "work",
      q: "What does Dr. Amol Gawande research?",
      paras: [
        'His research falls into two broad groups. The first is higher education itself: papers in <i>Quality Assurance in Education</i> examine why accreditation performance stalls between review cycles, how academic audits affect accreditation outcomes, and how business schools can improve the quality of student dissertations. Related work looks at research metrics and data sharing in thesis publishing.',
        'The second is business and technology: digital payments and GST compliance in finance, retail digitalisation and augmented reality in marketing, and machine-learning models applied to student behaviour, student mental health and employee wellbeing. He has also edited several volumes of management case studies and international conference proceedings. See <a href="/research">research</a> and <a href="/research/publications">publications</a> for the full list.',
      ],
    },
    {
      id: "approach",
      q: "What is Dr. Amol Gawande’s approach to education?",
      paras: [
        "He argues that education should be judged by what students can do when they leave: think clearly about unfamiliar problems, apply what they know in real settings, and keep learning as their field changes. That points towards outcome-based education, experiential learning, room for personalisation, and an open, critical use of technology, including AI.",
        'He writes about these ideas on this site, starting with <a href="/ideas/why-gen-z-needs-a-different-approach-to-education">why Gen Z needs a different approach to education</a>.',
      ],
    },
    {
      id: "career",
      q: "Where has Dr. Amol Gawande worked?",
      paras: [
        "He began his career in securities markets, as a manager in commodity advisory services at Syscon Securities (2004–2007) and in U.S. equity trading at Capstone Securities Analysis (2009–2010). He moved into academia in 2011 as a lecturer at Siddhant College of Engineering, followed by faculty roles at MITCON Institute of Management, MIT School of Telecom Management and Global Business School and Research Centre, Pune.",
        'In August 2019 he became Director of Dr. D. Y. Patil B-School, Pune, a role he has since left. He is Founder & Director of Brookstone Institute of Global Studies in Dubai, and serves on the Executive Board of the Association of Indian Management Schools, having previously chaired its Pune chapter. The <a href="/journey">journey page</a> lists each role.',
      ],
    },
    {
      id: "brookstone",
      q: "What is Brookstone Institute of Global Studies?",
      paras: [
        'Brookstone Institute of Global Studies is a KHDA-approved and licensed professional training institute in Dubai, founded by Dr. Gawande. It is a separate organisation with its own website at <a href="https://www.brookstone.ae/" rel="noopener" target="_blank">brookstone.ae</a>; this site covers Dr. Gawande’s personal research and writing.',
      ],
    },
  ].filter((s) => (s.id === "brookstone" ? !!role("brookstone") : true));
}
