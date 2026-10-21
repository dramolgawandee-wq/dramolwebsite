/*
 * Homepage positioning copy.
 *
 * Everything in this file is PROPOSED POSITIONING written for the site,
 * not a verified quotation and not a statement Dr. Gawande has made.
 * None of it is rendered inside quotation marks or attributed as a quote.
 * Items marked [AMOL APPROVAL REQUIRED] must be signed off before launch.
 * The marker lives only in these comments; it is never rendered.
 * House rule: no em-dashes in visible copy.
 */

// [AMOL APPROVAL REQUIRED] — hero role stack, headline and supporting line
export const hero = {
  eyebrow: "Dr. Amol Gawande",
  roles: ["Academic leader", "Researcher", "Education strategist"],
  /** Serif headline; the `em` phrase is set in italic. */
  headline: { before: "Rethinking education ", em: "for a changing world", after: "." },
  support:
    "Academic leader, researcher and management educator working where education, technology, leadership and the future of work meet.",
  primary: { label: "Explore my work", href: "/research" },
  secondary: { label: "About Dr. Gawande", href: "/about" },
};

// [AMOL APPROVAL REQUIRED] — About statement and framing. Facts in the body come from verified roles.
export const about = {
  label: "About",
  statement: { before: "Building stronger connections between education, industry and ", em: "the future of work", after: "." },
  paras: [
    "Dr. Amol Gawande has spent his career moving between markets, classrooms and institutions: trading US equities before he taught his first class, teaching management in Pune’s business schools, and founding a professional training institute in Dubai.",
    "That route shapes how he thinks about education. It should be judged by what people can do when they leave: think clearly about an unfamiliar problem, apply what they know where it counts, and keep learning as their field changes.",
  ],
};

// [AMOL APPROVAL REQUIRED] — expertise framing. Each area is supported by roles or publications in the content database.
export const expertise: { n: string; title: string; text: string; href: string }[] = [
  { n: "01", title: "Academic leadership", text: "Founding a professional training institute, and chairing and serving on the boards of academic associations.", href: "/journey" },
  { n: "02", title: "Higher education quality", text: "Accreditation, academic audit and the quality of business-school research, published in Quality Assurance in Education.", href: "/research/publications?area=Higher%20Education" },
  { n: "03", title: "Finance and financial management", text: "Digital payment systems, GST compliance for small enterprises, and an earlier career in securities markets.", href: "/research/publications?area=Finance" },
  { n: "04", title: "Education innovation", text: "Outcome-based and experiential learning, student engagement, and data-informed support for learners.", href: "/ideas" },
  { n: "05", title: "Digital transformation", text: "How retailers and financial firms compete through digital channels and data.", href: "/research/publications?area=Digital%20Transformation" },
  { n: "06", title: "Emerging technologies", text: "Augmented reality in retail and insurance, applied machine learning, and decision support for planning.", href: "/research/publications?area=Emerging%20Technologies" },
  { n: "07", title: "Management education", text: "The case method, live projects and simulations; editor of the CASEPEDIA case-study series.", href: "/research/books" },
  { n: "08", title: "Future of education and work", text: "What Gen Z needs from education when the skills employers ask for keep changing.", href: "/ideas/why-gen-z-needs-a-different-approach-to-education" },
];

// [AMOL APPROVAL REQUIRED] — research statement
export const research = {
  statement: { before: "Research that asks how institutions ", em: "measure, improve and adapt", after: "." },
  support: "Peer-reviewed work across higher education quality, finance, management, digital transformation and applied machine learning, published with Emerald, IEEE, Springer Nature and IGI Global.",
};

export const contactTopics = ["Speaking", "Research collaboration", "Academic collaboration", "Media", "General"] as const;

// [AMOL APPROVAL REQUIRED] — closing statement
export const cta = {
  statement: { before: "Let’s start a ", em: "conversation", after: "." },
  support: "For speaking engagements, research collaboration, academic conversations and media enquiries.",
};

export const contact = {
  heading: "Let’s start a conversation.",
  support: cta.support,
};

// [AMOL APPROVAL REQUIRED] — Ideas section framing (drawn from the pillar blurbs)
export const ideas = {
  statement: { before: "Perspectives on education, technology and ", em: "the future of work", after: "." },
  support:
    "Writing on what education should do when the world it prepares people for keeps moving: how a generation raised online learns, what employers now expect, and where technology helps rather than digitises old habits.",
};

// [AMOL APPROVAL REQUIRED] — editorial statement; never rendered inside quotation marks
export const principle = {
  label: "A working principle",
  statement: { before: "Education should be judged by ", em: "what people can do when they leave", after: ": think clearly about an unfamiliar problem, apply what they know where it counts, and keep learning as their field changes." },
};

// [AMOL APPROVAL REQUIRED] — leadership framing. Roles and dates come from verified records in person.ts.
export const leadership = {
  statement: { before: "From markets to classrooms to ", em: "institutions", after: "." },
  support:
    "A route that began in securities markets, moved through business schools in Pune, and now runs a professional training institute in Dubai alongside governance roles in Indian education bodies.",
};

// [AMOL APPROVAL REQUIRED] — intellectual-work framing. Titles, numbers and statuses come from verified records.
export const work = {
  statement: { before: "Intellectual work, ", em: "in print and on record", after: "." },
  support: "Textbooks, edited case-study volumes, international conference proceedings and registered utility models, alongside the peer-reviewed research.",
};

// [AMOL APPROVAL REQUIRED] — speaking availability
export const speaking = {
  statement: { before: "In conversation, ", em: "in print and on stage", after: "." },
  support:
    "Available for keynotes, panels, faculty development sessions and academic conversations on higher education, the future of education and work, management education and technology.",
};
