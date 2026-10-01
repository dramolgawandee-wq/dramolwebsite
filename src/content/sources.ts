import type { Source } from "./types";

/**
 * Evidence registry — INTERNAL. Never rendered as a list on the site.
 * Every factual record in src/content points at ids here, and
 * lib/evidence.ts only publishes records with at least one "verified" source.
 * `npm run sources` regenerates CONTENT-SOURCES.md from this file.
 *
 * Full research notes are kept outside the repository (checked 2026-09-24).
 */
const C = "2026-09-24";

export const sources: Source[] = [
  /* ---------- Roles & credentials ---------- */
  {
    id: "dypbs-bio",
    claim:
      "Director, Dr. D. Y. Patil B-School, Tathawade, Pune from August 2019; prior academic and industry roles with dates; Ph.D. in Management, MMS (Financial Management), M.A. (Psychology), B.Com.; formerly Chairman, AIMS Pune Chapter.",
    source: "Dr. D. Y. Patil B-School: official Director page (archived 13 Jun 2025)",
    url: "https://web.archive.org/web/20250613080933/https://bschool.dpu.edu.in/director.aspx",
    checked: C,
    status: "verified",
    notes: "Official institutional page, self-described bio. Same role history in the 2022 and 2024 captures. Live URL now redirects.",
  },
  {
    id: "dypbs-current",
    claim: "Dr. Gawande is no longer Director of Dr. D. Y. Patil B-School (current page names Dr. Jitendra Sandu).",
    source: "Dr. D. Y. Patil B-School: current Director page",
    url: "https://dypbs.edu.in/director.aspx",
    checked: C,
    status: "verified",
    notes: "Establishes the D. Y. Patil role as former. Exact end date not published by the institution.",
  },
  {
    id: "brookstone-in",
    claim: "Founder & Director, Brookstone Institute of Global Studies, Dubai.",
    source: "Brookstone Institute of Global Studies: official website (India)",
    url: "https://www.brookstone.org.in/",
    checked: C,
    status: "verified",
  },
  {
    id: "brookstone-ae",
    claim: "Brookstone Institute of Global Studies is a KHDA-approved and licensed professional training institute in Dubai (not a degree-awarding institution).",
    source: "Brookstone Institute of Global Studies: official website (Dubai)",
    url: "https://www.brookstone.ae/",
    checked: C,
    status: "verified",
    notes: "Site copy must not imply that the institute awards degrees.",
  },
  {
    id: "linkedin",
    claim: "Current role: Founder and Director, Brookstone Institute of Global Studies. MBA/MMS Finance, University of Mumbai (2007–2009).",
    source: "LinkedIn profile (self-published)",
    url: "https://www.linkedin.com/in/amol-gawande-a6a439b/",
    checked: C,
    status: "verified",
  },
  {
    id: "aims-board",
    claim: "Executive Board Member, Association of Indian Management Schools (AIMS), West zone, 2026–2027 board.",
    source: "AIMS: Executive Board Members 2026–2027",
    url: "https://aims.org.in/executive-board-members/",
    checked: C,
    status: "verified",
    notes: "Listing still shows his affiliation as Director, Dr. D. Y. Patil B-School. Ask the client to confirm his current AIMS status.",
  },
  {
    id: "ht-2019",
    claim: "Hindustan Times interview (10 May 2019); states he has a doctorate in US equity markets.",
    source: "Hindustan Times",
    url: "https://www.hindustantimes.com/pune-news/principal-speak-industry-leaders-talk-to-students-on-topics-of-contemporary-interest-says-gawande-of-dr-dy-patil-b-school/story-47HXZbmmKnzOz6VhNsh04O.html",
    checked: C,
    status: "verified",
    notes: "Verified as a published interview. The doctorate topic is a single press source — see 'phd-topic'.",
  },
  {
    id: "phd-topic",
    claim: "Doctoral research focused on US equity markets.",
    source: "Hindustan Times (single secondary source)",
    checked: C,
    status: "likely",
    notes: "[VERIFY: EXACT DOCTORATE INSTITUTION, YEAR AND THESIS TITLE] — request certificate or Shodhganga link.",
  },
  {
    id: "pvc-press",
    claim: "Pro-Vice Chancellor, Dr. D. Y. Patil Gyanprasad University.",
    source: "Single press report",
    checked: C,
    status: "unverified",
    notes: "No official university source found. Not published.",
  },

  /* ---------- Profiles ---------- */
  { id: "orcid", claim: "ORCID iD 0000-0001-6430-5688.", source: "ORCID public record", url: "https://orcid.org/0000-0001-6430-5688", checked: C, status: "verified" },
  { id: "scholar", claim: "Google Scholar profile.", source: "Google Scholar", url: "https://scholar.google.com/citations?user=D5AuNNkAAAAJ", checked: C, status: "verified", notes: "Affiliation still shows DYPBS; ask client to update." },
  {
    id: "researchgate",
    claim: "ResearchGate profile.",
    source: "ResearchGate",
    url: "https://www.researchgate.net/profile/Amol-Gawande",
    checked: C,
    status: "likely",
    notes: "URL from search index; page blocks automated access. Client to confirm the URL before it is added to sameAs.",
  },

  /* ---------- Publications ---------- */
  {
    id: "crossref",
    claim: "Publication metadata and DOIs.",
    source: "Crossref DOI registry / publisher pages",
    url: "https://api.crossref.org/works?query.author=Amol+Gawande",
    checked: C,
    status: "verified",
    notes: "Only works attributable via DYPBS affiliation, ORCID or established co-authors were included.",
  },
  {
    id: "zenodo-books",
    claim: "Books and edited volumes with ISBNs.",
    source: "Zenodo deposits of the published volumes",
    url: "https://zenodo.org/search?q=Amol%20Gawande",
    checked: C,
    status: "verified",
    notes: "ISBNs as printed in the volumes; not checked against the ISBN agency.",
  },
  {
    id: "orcid-zenodo-only",
    claim: "Earlier journal papers with Zenodo self-deposit identifiers only.",
    source: "ORCID works list / Google Scholar",
    url: "https://pub.orcid.org/v3.0/0000-0001-6430-5688/works",
    checked: C,
    status: "likely",
    notes: "No publisher DOI. Add once the journal pages are checked.",
  },

  /* ---------- IPR ---------- */
  { id: "gp-de202022100308", claim: "DE 20 2022 100 308 U1 — A cloud-based secured electronic trading system.", source: "Google Patents (DPMA record)", url: "https://patents.google.com/patent/DE202022100308U1/en", checked: C, status: "verified", notes: "German utility model (Gebrauchsmuster). Inventor names not shown on record; co-inventors from the author's Zenodo deposit." },
  { id: "gp-de202021105950", claim: "DE 20 2021 105 950 U1 — An Intelligent MCQ Exam Management System.", source: "Google Patents (DPMA record)", url: "https://patents.google.com/patent/DE202021105950U1/en", checked: C, status: "verified", notes: "German utility model; status 'Expired – Lifetime'." },
  { id: "gp-de202021105949", claim: "DE 20 2021 105 949 U1 — IoT powered online grocery ordering system.", source: "Google Patents (DPMA record)", url: "https://patents.google.com/patent/DE202021105949U1/en", checked: C, status: "verified", notes: "Title differs from the bio ('IOT-Supported Online Food Ordering System'); record title used. Status 'Expired – Lifetime'." },
  { id: "ipau-2020103908", claim: "Australian innovation patent 2020103908 — STM-Strategic Tourism Management.", source: "Institutional bio + Zenodo deposit", url: "https://zenodo.org/records/6754419", checked: C, status: "likely", notes: "IP Australia record not reachable. [VERIFY on IP Australia AusPat]." },
  { id: "in-applications", claim: "Seven published Indian patent applications (2021–2023).", source: "Institutional bio", checked: C, status: "likely", notes: "[VERIFY: application numbers on IP India InPASS]. No Indian grant found." },
  { id: "in-copyrights", claim: "Twelve Indian copyright registrations (L-numbers, 2021–2022).", source: "Institutional bio", checked: C, status: "likely", notes: "[VERIFY on the Copyright Office e-register]." },

  /* ---------- Media ---------- */
  { id: "m-ceoinsights-2017", claim: "Bylined article, CEO Insights India.", source: "CEO Insights India", url: "https://www.ceoinsightsindia.com/marketing-leader-talks/why-marketing-is-a-preferred-choice-amongst-graduates-nwid-1704.html", checked: C, status: "verified" },
  { id: "m-elets-2019", claim: "Contributed article, Elets Digital Learning, 18 Oct 2019.", source: "Elets Digital Learning", url: "https://digitallearning.eletsonline.com/2019/10/eight-popular-jobs-that-require-an-mba-degree/", checked: C, status: "verified" },
  { id: "m-dh-2020", claim: "Bylined article, Deccan Herald, 1 Jan 2020.", source: "Deccan Herald", url: "https://www.deccanherald.com/supplements/dh-education/choosing-between-mba-and-pgdm-790506.html", checked: C, status: "verified" },
  { id: "m-edupost-2024", claim: "Interview, Education Post, 10 Jul 2024.", source: "Education Post", url: "https://educationpost.in/news/in-conversation/interview-with-dr-amol-gawande-director-dr-dy-patil-b-school-pune", checked: C, status: "verified" },
  { id: "m-bw-2019", claim: "Contributed article, BW Education, 13 Jul 2019.", source: "BW Businessworld", url: "http://bweducation.businessworld.in/article/MBA-V-S-PGDM-How-Are-They-Different-And-What-Should-You-Choose-/13-07-2019-173306", checked: C, status: "likely", notes: "Page returned 403 to automated fetch; confirm manually." },

  /* ---------- Speaking / conferences ---------- */
  { id: "proc-2021", claim: "Co-editor, proceedings of the 1st International Conference 'Embracing Change & Transformation', 23–25 Mar 2021.", source: "Zenodo: conference proceedings", url: "https://zenodo.org/records/6665399", checked: C, status: "verified" },
  { id: "proc-2022", claim: "Co-editor, proceedings 'Fostering Resilient Business Ecosystems and Economic Growth', 2022.", source: "Zenodo: conference proceedings", url: "https://zenodo.org/records/6773034", checked: C, status: "verified" },
  { id: "proc-2023", claim: "Co-editor, proceedings of the 3rd International Conference 'Enhancing Productivity in Hybrid Mode', 29–31 May 2023.", source: "Zenodo: conference proceedings", url: "https://zenodo.org/records/8096542", checked: C, status: "verified" },
];
