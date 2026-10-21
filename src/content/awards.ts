import type { Award } from "./types";

/*
 * Awards received by Brookstone Institute of Global Studies, the institute
 * Dr. Gawande founded. Both were supplied by the client on 9 Oct 2026 with
 * photographs of the plaque, certificate and trophy. Wording rule: these are
 * institutional awards. Always name Brookstone as the recipient; never imply
 * Dr. Gawande received them personally.
 */
export const awards: Award[] = [
  {
    id: "cegr-2026",
    title: "Excellence in International Management Education 2026",
    recipient: "Brookstone Institute of Global Studies, Dubai",
    presenter: "Centre for Education Growth and Research (CEGR)",
    year: 2026,
    date: "2026-09-25",
    place: "New Delhi",
    citation: "For outstanding and exemplary contribution towards education, skill development and research.",
    image: { src: "/photos/awards/cegr-2026.jpg", width: 1920, height: 1080, alt: "CEGR plaque and award certificate presented to Brookstone Institute of Global Studies, Dubai" },
    sourceIds: ["award-cegr-2026"],
  },
  {
    id: "mecaw-2026",
    title: "Excellence in Industry-Integrated Global Education Award",
    recipient: "Brookstone Institute of Global Studies",
    presenter: "Maharashtra Education Think Tank",
    programme: "Award of Excellence, Maharashtra Education & Corporate Awards 2026",
    year: 2026,
    citation: "In recognition of exceptional leadership, outstanding achievement and a lasting contribution to excellence.",
    image: { src: "/photos/awards/maharashtra-2026.jpg", width: 924, height: 1632, alt: "Maharashtra Education & Corporate Awards 2026 trophy presented to Brookstone", position: "center 28%" },
    sourceIds: ["award-mecaw-2026"],
  },
];
