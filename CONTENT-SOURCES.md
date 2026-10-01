# Content sources — Dr. Amol Gawande website

INTERNAL. Generated from `src/content/sources.ts` by `npm run sources` — do not edit by hand.
Generated: 2026-09-24. Full research notes: `research/dossier.md`.

**Rule enforced in code:** a record appears on the site only if at least one of its sources has status `verified`
(`src/lib/evidence.ts`). Changing a source's status here is the only way to publish or unpublish the records that cite it.

## 1. Evidence registry

| ID | Claim | Source | Checked | Status | Notes |
|---|---|---|---|---|---|
| `dypbs-bio` | Director, Dr. D. Y. Patil B-School, Tathawade, Pune from August 2019; prior academic and industry roles with dates; Ph.D. in Management, MMS (Financial Management), M.A. (Psychology), B.Com.; formerly Chairman, AIMS Pune Chapter. | [Dr. D. Y. Patil B-School: official Director page (archived 13 Jun 2025)](https://web.archive.org/web/20250613080933/https://bschool.dpu.edu.in/director.aspx) | 2026-09-24 | **VERIFIED** | Official institutional page, self-described bio. Same role history in the 2022 and 2024 captures. Live URL now redirects. |
| `dypbs-current` | Dr. Gawande is no longer Director of Dr. D. Y. Patil B-School (current page names Dr. Jitendra Sandu). | [Dr. D. Y. Patil B-School: current Director page](https://dypbs.edu.in/director.aspx) | 2026-09-24 | **VERIFIED** | Establishes the D. Y. Patil role as former. Exact end date not published by the institution. |
| `dypbs-end-press` | Directorship ended with resignation in October 2025. | Press reports (July 2026) | 2026-09-24 | **LIKELY** | Secondary sources only. Do not publish an end date until the client confirms it. |
| `brookstone-in` | Founder & Director, Brookstone Institute of Global Studies, Dubai. | [Brookstone Institute of Global Studies: official website (India)](https://www.brookstone.org.in/) | 2026-09-24 | **VERIFIED** |  |
| `brookstone-ae` | Brookstone Institute of Global Studies is a KHDA-approved and licensed professional training institute in Dubai (not a degree-awarding institution). | [Brookstone Institute of Global Studies: official website (Dubai)](https://www.brookstone.ae/) | 2026-09-24 | **VERIFIED** | Site copy must not imply that the institute awards degrees. |
| `linkedin` | Current role: Founder and Director, Brookstone Institute of Global Studies. MBA/MMS Finance, University of Mumbai (2007–2009). | [LinkedIn profile (self-published)](https://www.linkedin.com/in/amol-gawande-a6a439b/) | 2026-09-24 | **VERIFIED** |  |
| `aims-board` | Executive Board Member, Association of Indian Management Schools (AIMS), West zone, 2026–2027 board. | [AIMS: Executive Board Members 2026–2027](https://aims.org.in/executive-board-members/) | 2026-09-24 | **VERIFIED** | Listing still shows his affiliation as Director, Dr. D. Y. Patil B-School. Ask the client to confirm his current AIMS status. |
| `ht-2019` | Hindustan Times interview (10 May 2019); states he has a doctorate in US equity markets. | [Hindustan Times](https://www.hindustantimes.com/pune-news/principal-speak-industry-leaders-talk-to-students-on-topics-of-contemporary-interest-says-gawande-of-dr-dy-patil-b-school/story-47HXZbmmKnzOz6VhNsh04O.html) | 2026-09-24 | **VERIFIED** | Verified as a published interview. The doctorate topic is a single press source — see 'phd-topic'. |
| `phd-topic` | Doctoral research focused on US equity markets. | Hindustan Times (single secondary source) | 2026-09-24 | **LIKELY** | [VERIFY: EXACT DOCTORATE INSTITUTION, YEAR AND THESIS TITLE] — request certificate or Shodhganga link. |
| `pvc-press` | Pro-Vice Chancellor, Dr. D. Y. Patil Gyanprasad University. | Single press report | 2026-09-24 | **UNVERIFIED** | No official university source found. Not published. |
| `orcid` | ORCID iD 0000-0001-6430-5688. | [ORCID public record](https://orcid.org/0000-0001-6430-5688) | 2026-09-24 | **VERIFIED** |  |
| `scholar` | Google Scholar profile. | [Google Scholar](https://scholar.google.com/citations?user=D5AuNNkAAAAJ) | 2026-09-24 | **VERIFIED** | Affiliation still shows DYPBS; ask client to update. |
| `researchgate` | ResearchGate profile. | [ResearchGate](https://www.researchgate.net/profile/Amol-Gawande) | 2026-09-24 | **LIKELY** | URL from search index; page blocks automated access. Client to confirm the URL before it is added to sameAs. |
| `crossref` | Publication metadata and DOIs. | [Crossref DOI registry / publisher pages](https://api.crossref.org/works?query.author=Amol+Gawande) | 2026-09-24 | **VERIFIED** | Only works attributable via DYPBS affiliation, ORCID or established co-authors were included. |
| `zenodo-books` | Books and edited volumes with ISBNs. | [Zenodo deposits of the published volumes](https://zenodo.org/search?q=Amol%20Gawande) | 2026-09-24 | **VERIFIED** | ISBNs as printed in the volumes; not checked against the ISBN agency. |
| `orcid-zenodo-only` | Earlier journal papers with Zenodo self-deposit identifiers only. | [ORCID works list / Google Scholar](https://pub.orcid.org/v3.0/0000-0001-6430-5688/works) | 2026-09-24 | **LIKELY** | No publisher DOI. Add once the journal pages are checked. |
| `gp-de202022100308` | DE 20 2022 100 308 U1 — A cloud-based secured electronic trading system. | [Google Patents (DPMA record)](https://patents.google.com/patent/DE202022100308U1/en) | 2026-09-24 | **VERIFIED** | German utility model (Gebrauchsmuster). Inventor names not shown on record; co-inventors from the author's Zenodo deposit. |
| `gp-de202021105950` | DE 20 2021 105 950 U1 — An Intelligent MCQ Exam Management System. | [Google Patents (DPMA record)](https://patents.google.com/patent/DE202021105950U1/en) | 2026-09-24 | **VERIFIED** | German utility model; status 'Expired – Lifetime'. |
| `gp-de202021105949` | DE 20 2021 105 949 U1 — IoT powered online grocery ordering system. | [Google Patents (DPMA record)](https://patents.google.com/patent/DE202021105949U1/en) | 2026-09-24 | **VERIFIED** | Title differs from the bio ('IOT-Supported Online Food Ordering System'); record title used. Status 'Expired – Lifetime'. |
| `ipau-2020103908` | Australian innovation patent 2020103908 — STM-Strategic Tourism Management. | [Institutional bio + Zenodo deposit](https://zenodo.org/records/6754419) | 2026-09-24 | **LIKELY** | IP Australia record not reachable. [VERIFY on IP Australia AusPat]. |
| `in-applications` | Seven published Indian patent applications (2021–2023). | Institutional bio | 2026-09-24 | **LIKELY** | [VERIFY: application numbers on IP India InPASS]. No Indian grant found. |
| `in-copyrights` | Twelve Indian copyright registrations (L-numbers, 2021–2022). | Institutional bio | 2026-09-24 | **LIKELY** | [VERIFY on the Copyright Office e-register]. |
| `m-ceoinsights-2017` | Bylined article, CEO Insights India. | [CEO Insights India](https://www.ceoinsightsindia.com/marketing-leader-talks/why-marketing-is-a-preferred-choice-amongst-graduates-nwid-1704.html) | 2026-09-24 | **VERIFIED** |  |
| `m-elets-2019` | Contributed article, Elets Digital Learning, 18 Oct 2019. | [Elets Digital Learning](https://digitallearning.eletsonline.com/2019/10/eight-popular-jobs-that-require-an-mba-degree/) | 2026-09-24 | **VERIFIED** |  |
| `m-dh-2020` | Bylined article, Deccan Herald, 1 Jan 2020. | [Deccan Herald](https://www.deccanherald.com/supplements/dh-education/choosing-between-mba-and-pgdm-790506.html) | 2026-09-24 | **VERIFIED** |  |
| `m-edupost-2024` | Interview, Education Post, 10 Jul 2024. | [Education Post](https://educationpost.in/news/in-conversation/interview-with-dr-amol-gawande-director-dr-dy-patil-b-school-pune) | 2026-09-24 | **VERIFIED** |  |
| `m-bw-2019` | Contributed article, BW Education, 13 Jul 2019. | [BW Businessworld](http://bweducation.businessworld.in/article/MBA-V-S-PGDM-How-Are-They-Different-And-What-Should-You-Choose-/13-07-2019-173306) | 2026-09-24 | **LIKELY** | Page returned 403 to automated fetch; confirm manually. |
| `proc-2021` | Co-editor, proceedings of the 1st International Conference 'Embracing Change & Transformation', 23–25 Mar 2021. | [Zenodo: conference proceedings](https://zenodo.org/records/6665399) | 2026-09-24 | **VERIFIED** |  |
| `proc-2022` | Co-editor, proceedings 'Fostering Resilient Business Ecosystems and Economic Growth', 2022. | [Zenodo: conference proceedings](https://zenodo.org/records/6773034) | 2026-09-24 | **VERIFIED** |  |
| `proc-2023` | Co-editor, proceedings of the 3rd International Conference 'Enhancing Productivity in Hybrid Mode', 29–31 May 2023. | [Zenodo: conference proceedings](https://zenodo.org/records/8096542) | 2026-09-24 | **VERIFIED** |  |

## 2. Every factual record and its sources

| Record | Sources | On site? |
|---|---|---|
| Role — Founder & Director, Brookstone Institute of Global Studies | `brookstone-in`, `linkedin` | Yes |
| Role — Executive Board Member, Association of Indian Management Schools (AIMS) | `aims-board` | Yes |
| Role — Chairman, Pune Chapter, Association of Indian Management Schools (AIMS) | `dypbs-bio` | Yes |
| Role — Director, Dr. D. Y. Patil B-School (2019-08) | `dypbs-bio`, `dypbs-current` | Yes |
| Role — Professor, Global Business School and Research Centre (2016-12 to 2019-07) | `dypbs-bio` | Yes |
| Role — Assistant Professor, MIT School of Telecom Management (2014-03 to 2016-12) | `dypbs-bio` | Yes |
| Role — Assistant Professor, MITCON Institute of Management (2011-12 to 2014-03) | `dypbs-bio` | Yes |
| Role — Lecturer, MBA Department, Siddhant College of Engineering (2011-01 to 2011-12) | `dypbs-bio` | Yes |
| Role — Manager, Trading (U.S. Equity Market), Capstone Securities Analysis Pvt. Ltd. (2009-05 to 2010-12) | `dypbs-bio` | Yes |
| Role — Manager, Commodity Advisory Services, Syscon Securities Pvt. Ltd. (2004-01 to 2007-05) | `dypbs-bio` | Yes |
| Education — Ph.D. in Management | `dypbs-bio` | Yes |
| Education — MMS in Financial Management | `dypbs-bio`, `linkedin` | Yes |
| Education — M.A. in Psychology | `dypbs-bio` | Yes |
| Education — B.Com. | `dypbs-bio` | Yes |
| Publication — Quality complacency in Indian higher education institutions between the second and third cycles of accreditation (2022) · DOI 10.1108/QAE-01-2022-0019 | `crossref` | Yes |
| Publication — Sealing the gaps: enhancing quality control in business school dissertations (2023) · DOI 10.1108/QAE-12-2022-0207 | `crossref` | Yes |
| Publication — The impact of an effective academic audit on accreditation performance (2025) · DOI 10.1108/QAE-12-2024-0275 | `crossref` | Yes |
| Publication — Perception of Faculty Regarding Proposed New Accreditation Norms by the National Assessment and Accreditation Council (NAAC) (2023) · DOI 10.11594/ijmaber.04.09.10 | `crossref` | Yes |
| Publication — Scopus weighted CiteScore: A better alternative to plain CiteScore (2025) · DOI 10.47909/ijsmc.170 | `crossref` | Yes |
| Publication — Barriers and need for dataset sharing in the publishing of research thesis (2025) · DOI 10.47909/ijsmc.192 | `crossref` | Yes |
| Publication — Scopus CiteScore 2024 dips for the first time in a decade: Analysis of the top 1,000 journals (2025) · DOI 10.47909/ijsmc.274 | `crossref` | Yes |
| Publication — Perceived Risk and Confidence in Digital Payment Systems: A Finance Manager’s Perspective (2023) · DOI 10.29121/shodhkosh.v4.i2ECVPAMIAP.2023.2507 | `crossref` | Yes |
| Publication — GST Implementation and Compliance Challenges for MSMEs: A Post-Reform Analysis (2024) · DOI 10.29121/shodhkosh.v5.i5.2024.2454 | `crossref` | Yes |
| Publication — Covid-19 Pandemic and Its Likely Effect on Economic Development: An Opinion Survey of Professionals (2021) · DOI 10.11594/ijmaber.02.05.03 | `crossref` | Yes |
| Publication — Differences in job satisfaction of nurses based on type of hospital: An analytical study from India (2024) · DOI 10.29060/TAPS.2024-9-1/SC3048 | `crossref` | Yes |
| Publication — Exploring the Role of Environmental Education in Promoting Sustainability Mindset: An Empirical Analysis Using Forward and Hierarchical Regression Methods (2025) · DOI 10.46488/nept.2025.v24i03.b4290 | `crossref` | Yes |
| Publication — Digitalization in the Retail Business: A Strategy to gain a Competitive Edge (2023) · DOI 10.52711/2321-5763.2023.00020 | `crossref` | Yes |
| Publication — Augmented Reality in Fashion Retail: Enhancing Consumer Decision-Making and Engagement (2025) · DOI 10.32870/myn.vi56.7867 | `crossref` | Yes |
| Publication — Comparative study of regressor and classifier with decision tree using modern tools (2022) · DOI 10.1016/j.matpr.2021.11.635 | `crossref` | Yes |
| Publication — Predicting and Analyzing Student Exam Behavior with Distributed Machine Learning (2024) · DOI 10.1109/INCOS59338.2024.10527484 | `crossref` | Yes |
| Publication — Early Detection of College Student Mental Health Issues Using Machine Learning (2024) · DOI 10.1109/ICIICS63763.2024.10859910 | `crossref` | Yes |
| Publication — A Machine Learning Framework for Personalized Employee Health and Productivity Optimization (2025) · DOI 10.1109/ASIANCON66527.2025.11280961 | `crossref` | Yes |
| Publication — Ethical Governance Model for AI Systems: An Ethical Perspective on AI Governance (2025) · DOI 10.1109/ISCON65210.2025.11340973 | `crossref` | Yes |
| Publication — Educating Tomorrow’s Leaders (2025) · DOI 10.4018/979-8-3373-6187-1.ch011 | `crossref` | Yes |
| Publication — Development of Environmental Decision Support System for Climate Change Resilience in Urban Planning: A Managerial Perspective (2025) · DOI 10.1007/978-3-032-06791-3_18 | `crossref` | Yes |
| Publication — The Future of Augmented Reality in the Insurance Industry: HR as a Strategic Enabler of Innovation and Sustainability (2026) · DOI 10.1108/978-1-80592-551-420261012 | `crossref` | Yes |
| Publication — Marketing Strategy (2021) · ISBN 978-81-952936-7-4 | `zenodo-books` | Yes |
| Publication — Textbook of Nanocomputing (2021) · ISBN 978-81-948131-2-5 | `zenodo-books` | Yes |
| Publication — Caselets in Business (2021) · ISBN 978-81-952936-4-3 | `zenodo-books` | Yes |
| Publication — CASEPEDIA Vol. 2: Case Studies in Management (2022) · ISBN 978-81-950596-3-8 | `zenodo-books` | Yes |
| Publication — CASEPEDIA Vol. 3: Case Studies in Management (2023) · ISBN 978-81-950596-4-5 | `zenodo-books` | Yes |
| Publication — Embracing Change & Transformation – Breakthrough Innovation and Creativity (Conference Proceedings) (2021) · ISBN 978-93-950596-0-7 | `zenodo-books` | Yes |
| Publication — Fostering Resilient Business Ecosystems and Economic Growth: Towards the Next Normal (Conference Proceedings) (2022) · ISBN 978-81-950596-1-4 | `zenodo-books` | Yes |
| Publication — Enhancing Productivity in Hybrid Mode: The Beginning of a New Era (Conference Proceedings) (2023) · ISBN 978-81-950596-5-2 | `zenodo-books` | Yes |
| Publication — SBI Life: Focus on Digital (2022) | `orcid-zenodo-only` | **No — held back** |
| Publication — Neuro-Marketing: Opportunities and Challenges in India (2020) | `orcid-zenodo-only` | **No — held back** |
| IPR — A cloud-based secured electronic trading system · DE 20 2022 100 308 U1 | `gp-de202022100308` | Yes |
| IPR — An Intelligent MCQ Exam Management System · DE 20 2021 105 950 U1 | `gp-de202021105950` | Yes |
| IPR — IoT powered online grocery ordering system · DE 20 2021 105 949 U1 | `gp-de202021105949` | Yes |
| IPR — STM-Strategic Tourism Management: Strategic Workflow in Hospitality and Tourism Management · 2020103908 | `ipau-2020103908` | **No — held back** |
| IPR — Improved the Tourism Services and Management System · 202121045953 | `in-applications` | **No — held back** |
| IPR — Immediate Lowest Amount Flight Tickets Management System · 202121046132 | `in-applications` | **No — held back** |
| IPR — Advanced branding in the marketing of Unilever products using ML · 202111051749 | `in-applications` | **No — held back** |
| IPR — Advanced and online MCQ examination management system · 202111054012 | `in-applications` | **No — held back** |
| IPR — The effect of HRM practices on TQM implementation · 202221030955 | `in-applications` | **No — held back** |
| IPR — E-Learning Based Hybrid Training for Education and Management System Model · 202221064916 | `in-applications` | **No — held back** |
| IPR — IOT-Based Vehicle Authority and Monitoring System Using Driving License · 202321044469 | `in-applications` | **No — held back** |
| Media — Education Post: Interview with Dr. Amol Gawande, Director at Dr. DY Patil B-School in Pune | `m-edupost-2024` | Yes |
| Media — Deccan Herald: Choosing between MBA and PGDM | `m-dh-2020` | Yes |
| Media — Elets Digital Learning: Eight popular jobs that require an MBA degree | `m-elets-2019` | Yes |
| Media — Hindustan Times: Principal speak: Industry leaders talk to students on topics of contemporary interest | `ht-2019` | Yes |
| Media — CEO Insights India: Why Marketing Is A Preferred Choice Amongst Graduates | `m-ceoinsights-2017` | Yes |
| Media — BW Education: MBA V/S PGDM: How Are They Different, And What Should You Choose? | `m-bw-2019` | **No — held back** |
| Engagement — 3rd International Conference: Enhancing Productivity in Hybrid Mode: The Beginning of a New Era (Proceedings co-editor) | `proc-2023` | Yes |
| Engagement — International Conference: Fostering Resilient Business Ecosystems and Economic Growth: Towards the Next Normal (Proceedings co-editor) | `proc-2022` | Yes |
| Engagement — 1st International Conference: Embracing Change & Transformation: Breakthrough Innovation and Creativity (Proceedings co-editor) | `proc-2021` | Yes |

## 3. Fixed copy that states facts

These sentences are assembled in `src/content/person.ts` only from verified roles (author box, short bio, About page):

- "Dr. Amol Gawande is an academic leader, researcher and management educator." — descriptive positioning, supported by roles and publications above.
- "He has served as Director of Dr. D. Y. Patil B-School, Pune" — `dypbs-bio`, `dypbs-current` (past tense deliberately; the role is former).
- "is an Executive Board Member of the Association of Indian Management Schools (AIMS)" — `aims-board`.
- "is Founder & Director of Brookstone Institute of Global Studies, Dubai" — `brookstone-in`, `linkedin`.
- "Brookstone … is a KHDA-approved and licensed professional training institute" — `brookstone-ae`.
- Career history sentences on About — `dypbs-bio`.

## 4. Article references (external, cited in text)

- Pew Research Center — Generation Z defined as born 1997 onward: https://www.pewresearch.org/short-reads/2019/01/17/where-millennials-end-and-generation-z-begins/
- World Economic Forum — Future of Jobs Report 2025 (share of core skills expected to change by 2030): https://www.weforum.org/publications/the-future-of-jobs-report-2025/
- Government of India — National Education Policy 2020: https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf
