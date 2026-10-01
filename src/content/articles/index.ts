import type { Article, Pillar, PlannedArticle } from "../types";
import { article as genZ } from "./why-gen-z-needs-a-different-approach-to-education";

/**
 * Published articles. To add one: create a file in this folder exporting
 * `article`, import it here, and add it to the array. Routes, sitemap,
 * JSON-LD and the Ideas index pick it up automatically.
 */
export const articles: Article[] = [genZ].sort((a, b) => b.published.localeCompare(a.published));

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

/**
 * Editorial queue. INTERNAL: never rendered, never linked, never in the
 * sitemap. Move a title out of here when its article ships.
 */
export const planned: PlannedArticle[] = [
  { title: "What Is Outcome-Based Education and Why Does It Matter?", pillar: "future-of-education" },
  { title: "How AI Will Change the Future of Education", pillar: "technology-ai" },
  { title: "Why Personalised Learning Matters for Gen Z", pillar: "gen-z-future-of-work" },
  { title: "From Degrees to Skills: Rethinking Employability", pillar: "gen-z-future-of-work" },
  { title: "Why Experiential Learning Matters in Management Education", pillar: "management-leadership" },
  { title: "Global Exposure: What Students Really Need", pillar: "innovation-global" },
  { title: "Why Entrepreneurship Should Be Part of Every Student's Education", pillar: "innovation-global" },
  { title: "The Future of Management Education", pillar: "management-leadership" },
  { title: "Learning, Unlearning and Relearning in the Age of AI", pillar: "future-of-education" },
];

/**
 * Areas of exploration. Topic areas, not articles. Each links to its
 * pillar section on the Ideas hub, so nothing implies content that does
 * not exist yet.
 */
// [AMOL APPROVAL REQUIRED] — topic descriptions are proposed positioning copy.
export const explorationAreas: { topic: string; summary: string; pillar: Pillar }[] = [
  { topic: "Gen Z & Education", pillar: "gen-z-future-of-work", summary: "How a generation that grew up online learns, and what that asks of teachers and institutions." },
  { topic: "Future of Education", pillar: "future-of-education", summary: "Preparing students to learn, unlearn and relearn as their fields change." },
  { topic: "AI & Education", pillar: "technology-ai", summary: "What changes in teaching and assessment when AI tools can complete many traditional assignments." },
  { topic: "Future of Work", pillar: "gen-z-future-of-work", summary: "What employability means when the skills employers ask for keep shifting." },
  { topic: "Personalised Learning", pillar: "future-of-education", summary: "Choice in pace, depth and route, while keeping the same standard." },
  { topic: "Global Education", pillar: "innovation-global", summary: "Learning to work across cultures, through study abroad and well beyond it." },
];
