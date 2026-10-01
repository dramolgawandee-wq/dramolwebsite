import type { Pillar } from "./types";

/**
 * The five topical pillars. Each pillar eventually holds one pillar article
 * plus 5–10 supporting articles that link back to it (see content/articles).
 */
export const pillars: Record<
  Pillar,
  { name: string; short: string; blurb: string; topics: string[] }
> = {
  "future-of-education": {
    name: "Future of Education",
    short: "Education",
    blurb:
      "What a university, a classroom and a degree should do when the world they prepare students for keeps moving.",
    topics: ["Future of Education", "Outcome-Based Education", "Experiential Learning"],
  },
  "gen-z-future-of-work": {
    name: "Gen Z & the Future of Work",
    short: "Gen Z & Work",
    blurb:
      "How a generation that grew up online learns, what employers now expect, and where the two do not yet meet.",
    topics: ["Gen Z", "Future of Work", "Career Development"],
  },
  "technology-ai": {
    name: "Technology & AI in Education",
    short: "AI & Technology",
    blurb:
      "Where AI and digital tools genuinely improve learning, and where they only digitise old habits.",
    topics: ["AI & Technology"],
  },
  "management-leadership": {
    name: "Management & Leadership Education",
    short: "Management",
    blurb:
      "Business schools, the case method, and what management education owes the organisations that hire its graduates.",
    topics: ["Management Education", "Leadership"],
  },
  "innovation-global": {
    name: "Innovation, Entrepreneurship & Global Education",
    short: "Innovation & Global",
    blurb:
      "Starting things, building across borders, and why exposure to other systems changes how students think.",
    topics: ["Innovation", "Entrepreneurship", "Global Education"],
  },
};

/** Topic list used on the Ideas page, in display order. */
export const ideaTopics = [
  "Future of Education",
  "Gen Z",
  "Future of Work",
  "AI & Technology",
  "Management Education",
  "Leadership",
  "Innovation",
  "Entrepreneurship",
  "Career Development",
  "Global Education",
] as const;
