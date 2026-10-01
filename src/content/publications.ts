import type { Publication, ResearchArea } from "./types";

/*
 * Every DOI below was resolved against Crossref on 2026-09-24; titles,
 * years, venues and author order are copied from the Crossref record.
 * Summaries describe the topic only (no claimed findings) and should be
 * replaced with the published abstracts when the author supplies them.
 * Books carry ISBNs as printed in the deposited volumes.
 */

const AG = "Amol Gawande";

export const researchFilters: ResearchArea[] = [
  "Finance",
  "Management",
  "Education Innovation",
  "Technology",
  "Digital Transformation",
  "Higher Education",
  "Emerging Technologies",
];

const doi = (d: string): Pick<Publication, "doi" | "url" | "sourceIds"> => ({
  doi: d,
  url: `https://doi.org/${d}`,
  sourceIds: ["crossref"],
});

export const publications: Publication[] = [
  /* ---------- Higher education quality ---------- */
  {
    slug: "quality-complacency-indian-higher-education-accreditation",
    title: "Quality complacency in Indian higher education institutions between the second and third cycles of accreditation",
    year: 2022, type: "journal-article", venue: "Quality Assurance in Education", publisher: "Emerald",
    authors: ["Atul Kumar", AG, "Shirish Raibagkar"],
    areas: ["Higher Education", "Education Innovation"],
    summary: "Examines how the accreditation performance of Indian higher education institutions changes between their second and third NAAC accreditation cycles, and what that suggests about sustaining quality after an institution is first accredited.",
    page: true, ...doi("10.1108/QAE-01-2022-0019"),
  },
  {
    slug: "sealing-the-gaps-quality-control-business-school-dissertations",
    title: "Sealing the gaps: enhancing quality control in business school dissertations",
    year: 2023, type: "journal-article", venue: "Quality Assurance in Education", publisher: "Emerald",
    authors: ["Atul Kumar", AG, "Akash Agarwal", "Shailendrakumar Kale", "Vinaydeep Brar", "Shirish Raibagkar"],
    areas: ["Higher Education", "Education Innovation", "Management"],
    summary: "Looks at quality control in management students’ dissertations and the checks business schools can build into the dissertation process.",
    page: true, ...doi("10.1108/QAE-12-2022-0207"),
  },
  {
    slug: "impact-of-academic-audit-on-accreditation-performance",
    title: "The impact of an effective academic audit on accreditation performance",
    year: 2025, type: "journal-article", venue: "Quality Assurance in Education", publisher: "Emerald",
    authors: ["Atul Kumar", AG, "Shailendra Kumar Kale", "Akash Agarwal", "Vinaydeep Brar", "Shirish Raibagkar"],
    areas: ["Higher Education", "Education Innovation"],
    summary: "Studies the relationship between internal academic audits and the accreditation outcomes of higher education institutions.",
    page: true, ...doi("10.1108/QAE-12-2024-0275"),
  },
  {
    slug: "faculty-perception-proposed-naac-accreditation-norms",
    title: "Perception of Faculty Regarding Proposed New Accreditation Norms by the National Assessment and Accreditation Council (NAAC)",
    year: 2023, type: "journal-article", venue: "International Journal of Multidisciplinary: Applied Business and Education Research", publisher: "Galaxy Science",
    authors: ["Atul Kumar", AG, "Muhammad Kristiawan", "Meilaty Finthariasari", "Elsa Viona", "Mayank Tank", "Daksh Gupta"],
    areas: ["Higher Education", "Education Innovation"],
    summary: "Surveys how faculty members view the new accreditation norms proposed by India’s National Assessment and Accreditation Council.",
    page: true, ...doi("10.11594/ijmaber.04.09.10"),
  },
  {
    slug: "scopus-weighted-citescore",
    title: "Scopus weighted CiteScore: A better alternative to plain CiteScore",
    year: 2025, type: "journal-article", venue: "Iberoamerican Journal of Science Measurement and Communication", publisher: "Pro-Metrics",
    authors: ["Atul Kumar", AG, "Shailendrakumar Kale", "Akash Agarwal", "Vinaydeep Brar", "Shirish Raibagkar"],
    areas: ["Higher Education"],
    summary: "Proposes a weighted variant of the Scopus CiteScore journal metric and compares it with the standard measure.",
    page: true, ...doi("10.47909/ijsmc.170"),
  },
  {
    slug: "dataset-sharing-research-thesis-publishing",
    title: "Barriers and need for dataset sharing in the publishing of research thesis",
    year: 2025, type: "journal-article", venue: "Iberoamerican Journal of Science Measurement and Communication", publisher: "Pro-Metrics",
    authors: ["Atul Kumar", AG, "Jaiprakash Paliwal", "Vishwas Pendse", "Shailendrakumar Kale", "Akash Agarwal", "Vinaydeep Brar", "Manesh Palav", "Sagar Nimbalkar", "Amandeep Saini", "Gauri Rathi", "Shirish Raibagkar"],
    areas: ["Higher Education"],
    summary: "Explores why datasets behind research theses are rarely shared, and the case for sharing them when theses are published.",
    page: true, ...doi("10.47909/ijsmc.192"),
  },
  {
    slug: "scopus-citescore-2024-dips-top-1000-journals",
    title: "Scopus CiteScore 2024 dips for the first time in a decade: Analysis of the top 1,000 journals",
    year: 2025, type: "journal-article", venue: "Iberoamerican Journal of Science Measurement and Communication", publisher: "Pro-Metrics",
    authors: ["Atul Kumar", "Parag Kalkar", AG, "Vinaydeep Brar", "Shirish Raibagkar"],
    areas: ["Higher Education"],
    summary: "Analyses the 2024 CiteScore values of the top 1,000 Scopus journals against the longer-term trend.",
    page: true, ...doi("10.47909/ijsmc.274"),
  },

  /* ---------- Finance & management ---------- */
  {
    slug: "perceived-risk-confidence-digital-payment-systems",
    title: "Perceived Risk and Confidence in Digital Payment Systems: A Finance Manager’s Perspective",
    year: 2023, type: "journal-article", venue: "ShodhKosh: Journal of Visual and Performing Arts", publisher: "Granthaalayah Publications and Printers",
    authors: [AG, "Kiran Singh", "Abhijeet Thange", "Devyani Ashok Desale", "Khushbu Choudhary"],
    areas: ["Finance", "Digital Transformation"],
    summary: "Examines how finance managers perceive the risks of digital payment systems and how that shapes their confidence in using them.",
    page: true, ...doi("10.29121/shodhkosh.v4.i2ECVPAMIAP.2023.2507"),
  },
  {
    slug: "gst-implementation-compliance-challenges-msmes",
    title: "GST Implementation and Compliance Challenges for MSMEs: A Post-Reform Analysis",
    year: 2024, type: "journal-article", venue: "ShodhKosh: Journal of Visual and Performing Arts", publisher: "Granthaalayah Publications and Printers",
    authors: [AG, "Akshaya Kolhe", "Tanmayee Shekatkar", "Sakshi Shrivas", "Tushar Khandelwal"],
    areas: ["Finance", "Management"],
    summary: "Reviews the compliance challenges that India’s Goods and Services Tax has created for micro, small and medium enterprises since the reform.",
    page: true, ...doi("10.29121/shodhkosh.v5.i5.2024.2454"),
  },
  {
    slug: "covid-19-effect-on-economic-development-opinion-survey",
    title: "Covid-19 Pandemic and Its Likely Effect on Economic Development: An Opinion Survey of Professionals",
    year: 2021, type: "journal-article", venue: "International Journal of Multidisciplinary: Applied Business and Education Research", publisher: "Galaxy Science",
    authors: ["Atul Kumar", AG, "Vinaydeep Brar"],
    areas: ["Finance", "Management"],
    summary: "Surveys professionals on how they expected the COVID-19 pandemic to affect economic development.",
    page: true, ...doi("10.11594/ijmaber.02.05.03"),
  },
  {
    slug: "job-satisfaction-nurses-type-of-hospital-india",
    title: "Differences in job satisfaction of nurses based on type of hospital: An analytical study from India",
    year: 2024, type: "journal-article", venue: "The Asia Pacific Scholar", publisher: "Yong Loo Lin School of Medicine",
    authors: ["Atul Kumar", AG, "Meghana Bhilare", "Vishal Wadajkar", "Indrajit Ghoshal", "Shirish Raibagkar"],
    areas: ["Management"],
    summary: "Compares job satisfaction among nurses working in different types of hospital in India.",
    page: true, ...doi("10.29060/TAPS.2024-9-1/SC3048"),
  },
  {
    slug: "environmental-education-sustainability-mindset",
    title: "Exploring the Role of Environmental Education in Promoting Sustainability Mindset: An Empirical Analysis Using Forward and Hierarchical Regression Methods",
    year: 2025, type: "journal-article", venue: "Nature Environment and Pollution Technology", publisher: "Technoscience Publications",
    authors: ["Archana Singh", "Roshan Kazi", "Swapnil Gorde", "Rishi Prakash Shukla", AG, "Atul Kumar"],
    areas: ["Education Innovation"],
    summary: "Uses regression analysis to examine how environmental education relates to a sustainability mindset.",
    page: true, ...doi("10.46488/nept.2025.v24i03.b4290"),
  },

  /* ---------- Digital & emerging technologies ---------- */
  {
    slug: "digitalization-retail-business-competitive-edge",
    title: "Digitalization in the Retail Business: A Strategy to gain a Competitive Edge",
    year: 2023, type: "journal-article", venue: "Asian Journal of Management", publisher: "A and V Publications",
    authors: ["Atul Kumar", AG, "Vinaydeep Brar"],
    areas: ["Digital Transformation", "Management"],
    summary: "Discusses digitalisation as a competitive strategy for retail businesses.",
    page: true, ...doi("10.52711/2321-5763.2023.00020"),
  },
  {
    slug: "augmented-reality-fashion-retail-consumer-decision-making",
    title: "Augmented Reality in Fashion Retail: Enhancing Consumer Decision-Making and Engagement",
    year: 2025, type: "journal-article", venue: "Mercados y Negocios", publisher: "Universidad de Guadalajara",
    authors: ["Sankalp Dandawate", "Palak Khanna", AG, "Atul Kumar", "Stuti Shukla"],
    areas: ["Emerging Technologies", "Digital Transformation", "Management"],
    summary: "Studies how augmented reality affects consumer decision-making and engagement in fashion retail.",
    page: true, ...doi("10.32870/myn.vi56.7867"),
  },
  {
    slug: "regressor-classifier-decision-tree-modern-tools",
    title: "Comparative study of regressor and classifier with decision tree using modern tools",
    year: 2022, type: "journal-article", venue: "Materials Today: Proceedings", publisher: "Elsevier",
    authors: ["Jitendra Singh Kushwah", "Atul Kumar", "Subhash Patel", "Rishi Soni", AG, "Shyam Gupta"],
    areas: ["Technology", "Emerging Technologies"],
    summary: "Compares decision-tree regression and classification models built with current machine-learning tools.",
    page: true, ...doi("10.1016/j.matpr.2021.11.635"),
  },
  {
    slug: "student-exam-behavior-distributed-machine-learning",
    title: "Predicting and Analyzing Student Exam Behavior with Distributed Machine Learning",
    year: 2024, type: "conference-paper", venue: "2024 Third International Conference on Intelligent Techniques in Control, Optimization and Signal Processing (INCOS)", publisher: "IEEE",
    authors: ["Atul Kumar", "Jena P. Joshi", "Akash Agarwal", AG, "Asha Kiran Sikhakolli", "Manjiri Joshi", "Kiran Singh", "A. B. Dadas", "Deepak Gupta"],
    areas: ["Technology", "Education Innovation"],
    summary: "Applies distributed machine learning to predict and analyse patterns in students’ exam behaviour.",
    page: true, ...doi("10.1109/INCOS59338.2024.10527484"),
  },
  {
    slug: "early-detection-student-mental-health-machine-learning",
    title: "Early Detection of College Student Mental Health Issues Using Machine Learning",
    year: 2024, type: "conference-paper", venue: "2024 International Conference on Integrated Intelligence and Communication Systems (ICIICS)", publisher: "IEEE",
    authors: ["Atul Kumar", "Jini Manish Saxena", "Jena P. Joshi", "Aditi Aljapurkar", "Rashmi Paranjpye", "Tejashri Talla", AG, "Deepak Gupta"],
    areas: ["Technology", "Education Innovation", "Higher Education"],
    summary: "Explores machine-learning approaches for identifying mental health concerns among college students early.",
    page: true, ...doi("10.1109/ICIICS63763.2024.10859910"),
  },
  {
    slug: "machine-learning-employee-health-productivity",
    title: "A Machine Learning Framework for Personalized Employee Health and Productivity Optimization",
    year: 2025, type: "conference-paper", venue: "2025 5th Asian Conference on Innovation in Technology (ASIANCON)", publisher: "IEEE",
    authors: ["Atul Kumar", "Jena P. Joshi", "Aditi Aljapurkar", "Akash Agarwal", "Vinaydeep Brar", "Manjiri Joshi", AG, "Kiran Singh"],
    areas: ["Technology", "Management"],
    summary: "Proposes a machine-learning framework for personalising employee health and productivity interventions.",
    page: true, ...doi("10.1109/ASIANCON66527.2025.11280961"),
  },
  {
    slug: "ethical-governance-model-ai-systems",
    title: "Ethical Governance Model for AI Systems: An Ethical Perspective on AI Governance",
    year: 2025, type: "conference-paper", venue: "2025 7th International Conference on Information Systems and Computer Networks (ISCON)", publisher: "IEEE",
    authors: ["Sheetal Sharma", "Nirbhay Mishra", "Atul Kumar", AG],
    areas: ["Technology", "Emerging Technologies"],
    summary: "Sets out an ethical governance model for AI systems.",
    page: true, ...doi("10.1109/ISCON65210.2025.11340973"),
  },

  /* ---------- Book chapters ---------- */
  {
    slug: "educating-tomorrows-leaders",
    title: "Educating Tomorrow’s Leaders",
    year: 2025, type: "book-chapter", venue: "Innovations and Challenges in Student Engagement in Higher Education", publisher: "IGI Global Scientific Publishing",
    authors: ["Revati Ramrao Rautrao", "A. V. Senthil Kumar", AG, "Atul Kumar", "Sanjayan Thottapattunjalil Suseelan"],
    areas: ["Higher Education", "Education Innovation", "Management"],
    summary: "A chapter on leadership education and student engagement in higher education.",
    page: true, ...doi("10.4018/979-8-3373-6187-1.ch011"),
  },
  {
    slug: "environmental-decision-support-climate-resilience-urban-planning",
    title: "Development of Environmental Decision Support System for Climate Change Resilience in Urban Planning: A Managerial Perspective",
    year: 2025, type: "book-chapter", venue: "Studies in Systems, Decision and Control", publisher: "Springer Nature",
    authors: ["Revati Ramrao Rautrao", AG, "Atul Kumar", "Sagar Jadhav", "Asha Kiran Sikhakolli"],
    areas: ["Emerging Technologies", "Management"],
    summary: "Describes a decision support system for climate-resilient urban planning, viewed from a management perspective.",
    page: true, ...doi("10.1007/978-3-032-06791-3_18"),
  },
  {
    slug: "future-of-augmented-reality-insurance-hr",
    title: "The Future of Augmented Reality in the Insurance Industry: HR as a Strategic Enabler of Innovation and Sustainability",
    year: 2026, type: "book-chapter", venue: "Green Policies and Augmented Reality in InsurTech", publisher: "Emerald Publishing",
    authors: ["Revati Ramrao Rautrao", "T. S. Sanjayan", "Inna Koblianska", AG, "Atul Kumar", "Manjiri Joshi"],
    areas: ["Emerging Technologies", "Digital Transformation", "Management"],
    summary: "Discusses augmented reality in insurance and the role of human resources in enabling that innovation.",
    page: true, ...doi("10.1108/978-1-80592-551-420261012"),
  },

  /* ---------- Books & edited volumes ---------- */
  {
    slug: "marketing-strategy-textbook",
    title: "Marketing Strategy",
    year: 2021, type: "book", publisher: "Success Publications, Pune",
    authors: [AG, "Atul Kumar", "Vinaydeep Brar"],
    isbn: "978-81-952936-7-4", url: "https://zenodo.org/records/6662658",
    areas: ["Management"], sourceIds: ["zenodo-books"],
  },
  {
    slug: "textbook-of-nanocomputing",
    title: "Textbook of Nanocomputing",
    year: 2021, type: "book", publisher: "Saliha Publications",
    authors: ["G. C. Wadhawa", AG, "Atul Kumar", "Shekhar R", "M. Tiwari", "T. Tiwari"],
    isbn: "978-81-948131-2-5", url: "https://zenodo.org/records/6660353",
    areas: ["Technology", "Emerging Technologies"], sourceIds: ["zenodo-books"],
  },
  {
    slug: "caselets-in-business",
    title: "Caselets in Business",
    year: 2021, type: "edited-book", publisher: "Case Development Cell, Dr. D. Y. Patil B-School",
    authors: ["Somnath Patil", AG, "Atul Kumar"],
    isbn: "978-81-952936-4-3", url: "https://zenodo.org/records/6665502",
    areas: ["Management"], sourceIds: ["zenodo-books"],
  },
  {
    slug: "casepedia-volume-2",
    title: "CASEPEDIA Vol. 2: Case Studies in Management",
    year: 2022, type: "edited-book", publisher: "Dr. D. Y. Patil B-School, Pune",
    authors: [AG, "Atul Kumar", "S. Purandare"],
    isbn: "978-81-950596-3-8", url: "https://zenodo.org/records/7139136",
    areas: ["Management"], sourceIds: ["zenodo-books"],
  },
  {
    slug: "casepedia-volume-3",
    title: "CASEPEDIA Vol. 3: Case Studies in Management",
    year: 2023, type: "edited-book", publisher: "Dr. D. Y. Patil B-School, Pune",
    authors: [AG, "Atul Kumar", "S. Purandare", "Sushil Kumar"],
    isbn: "978-81-950596-4-5", url: "https://zenodo.org/records/8056592",
    areas: ["Management"], sourceIds: ["zenodo-books"],
  },
  {
    slug: "embracing-change-and-transformation-proceedings",
    title: "Embracing Change & Transformation – Breakthrough Innovation and Creativity (Conference Proceedings)",
    year: 2021, type: "edited-book", publisher: "Success Publications, Pune",
    authors: [AG, "Atul Kumar"],
    isbn: "978-93-950596-0-7", url: "https://zenodo.org/records/6665399",
    areas: ["Management"], sourceIds: ["zenodo-books"],
  },
  {
    slug: "fostering-resilient-business-ecosystems-proceedings",
    title: "Fostering Resilient Business Ecosystems and Economic Growth: Towards the Next Normal (Conference Proceedings)",
    year: 2022, type: "edited-book", publisher: "Research & Publication Cell, Dr. D. Y. Patil B-School",
    authors: [AG, "Atul Kumar"],
    isbn: "978-81-950596-1-4", url: "https://zenodo.org/records/6773034",
    areas: ["Management"], sourceIds: ["zenodo-books"],
  },
  {
    slug: "enhancing-productivity-in-hybrid-mode-proceedings",
    title: "Enhancing Productivity in Hybrid Mode: The Beginning of a New Era (Conference Proceedings)",
    year: 2023, type: "edited-book", publisher: "Dr. D. Y. Patil B-School, Pune",
    authors: [AG, "Atul Kumar"],
    isbn: "978-81-950596-5-2", url: "https://zenodo.org/records/8096542",
    areas: ["Management"], sourceIds: ["zenodo-books"],
  },

  /* ---------- Held back until verified (status "likely") ---------- */
  {
    slug: "sbi-life-focus-on-digital",
    title: "SBI Life: Focus on Digital",
    year: 2022, type: "case-study", venue: "KIM Journal of Management Cases",
    authors: [AG, "Atul Kumar", "P. Patil"],
    areas: ["Management", "Digital Transformation"], sourceIds: ["orcid-zenodo-only"],
  },
  {
    slug: "neuro-marketing-opportunities-challenges-india",
    title: "Neuro-Marketing: Opportunities and Challenges in India",
    year: 2020, type: "journal-article", venue: "Vidyabharati International Interdisciplinary Research Journal",
    authors: [AG, "Atul Kumar", "Vinaydeep Brar"],
    areas: ["Management"], sourceIds: ["orcid-zenodo-only"],
  },
];

/** ResearchGate publication count could not be read; leave null until confirmed. */
export const researchGateCount: { count: number; url: string } | null = null;

/** Three works featured on the homepage: one each from higher education, finance and applied ML. */
export const featuredResearch = [
  "quality-complacency-indian-higher-education-accreditation",
  "perceived-risk-confidence-digital-payment-systems",
  "early-detection-student-mental-health-machine-learning",
];
