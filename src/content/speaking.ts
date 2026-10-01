import type { Engagement } from "./types";

/**
 * Speaking topics: positioning, not a record of talks given. Areas are
 * limited to those supported by documented work (published research,
 * the Gen Z article, edited proceedings, institutional roles).
 */
// [AMOL APPROVAL REQUIRED] — topic titles and summaries are proposed positioning copy.
export const speakingTopics = [
  { area: "Future of Education", title: "Why Gen Z needs a different approach to education", summary: "What changes when students can find any answer in seconds, and what classrooms should do with that time instead." },
  { area: "Higher Education", title: "Accreditation without complacency", summary: "Why quality often stalls after an institution is accredited, and how academic audit can keep improvement going. Drawn from his published research." },
  { area: "Higher Education", title: "Research quality and research metrics", summary: "How institutions can improve the quality of student and faculty research, and read journal metrics critically." },
  { area: "Management Education", title: "Case method and experiential learning in business schools", summary: "Using live cases, projects and simulations so management students practise decisions, not just study them." },
  { area: "Technology", title: "AI in the classroom: teach with it, assess around it", summary: "How educators can use AI openly while redesigning assessment around judgement and reasoning." },
  { area: "Future of Work", title: "From degrees to capabilities", summary: "What employability means when skills change faster than syllabi, and how outcome-based education responds." },
  { area: "Innovation & Entrepreneurship", title: "Entrepreneurial thinking for every student", summary: "Problem-spotting, cheap experiments and learning from failure as core skills, whether or not a student starts a company." },
];

/** Documented engagements only. Each needs a verified source in sources.ts. */
export const engagements: Engagement[] = [
  {
    id: "icon-2023",
    event: "3rd International Conference: Enhancing Productivity in Hybrid Mode: The Beginning of a New Era",
    role: "Proceedings co-editor",
    date: "2023-05",
    place: "Pune (hybrid)",
    url: "https://zenodo.org/records/8096542",
    sourceIds: ["proc-2023"],
  },
  {
    id: "icon-2022",
    event: "International Conference: Fostering Resilient Business Ecosystems and Economic Growth: Towards the Next Normal",
    role: "Proceedings co-editor",
    date: "2022",
    place: "Pune",
    url: "https://zenodo.org/records/6773034",
    sourceIds: ["proc-2022"],
  },
  {
    id: "icon-2021",
    event: "1st International Conference: Embracing Change & Transformation: Breakthrough Innovation and Creativity",
    role: "Proceedings co-editor",
    date: "2021-03",
    place: "Online",
    url: "https://zenodo.org/records/6665399",
    sourceIds: ["proc-2021"],
  },
];
