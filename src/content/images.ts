/**
 * Photography slots. Seven images carry the visual identity; each has a
 * narrative job. Two source photographs were supplied on 2026-09-30
 * (speaking with a microphone; at a desk with coffee and books) and are
 * cropped, upscaled and graded per slot in /public/photos (natural, mint
 * duotone, black and white) so no two slots read the same. The desk photo is cropped to exclude
 * the institutional certificates and award plaque on the wall behind him.
 * Replace any file and update width/height to swap a photograph.
 */
export type ImageSlotDef = {
  /** Intended subject, used in alt text and on the placeholder. */
  subject: string;
  /** CSS aspect-ratio. */
  ratio: string;
  src: string | null;
  width?: number;
  height?: number;
  alt?: string;
};

export const images: Record<"hero" | "about" | "research" | "ideas" | "speaking" | "leadership" | "cta", ImageSlotDef> = {
  hero: { subject: "Speaking at an evening event", ratio: "2 / 3", src: "/photos/hero.jpg", width: 1280, height: 1920, alt: "Dr. Amol Gawande speaking into a microphone at an evening event" },
  about: { subject: "At his desk", ratio: "4 / 5", src: "/photos/about.jpg", width: 1120, height: 1400, alt: "Dr. Amol Gawande at his desk with a cup of coffee" },
  research: { subject: "Speaking, green duotone", ratio: "4 / 5", src: "/photos/research.jpg", width: 1024, height: 1280, alt: "Dr. Amol Gawande speaking at an event, green-toned" },
  ideas: { subject: "Books on the desk", ratio: "16 / 10", src: "/photos/ideas.jpg", width: 1469, height: 918, alt: "Books and a cup of coffee on Dr. Amol Gawande’s desk" },
  speaking: { subject: "Speaking, black and white", ratio: "16 / 10", src: "/photos/speaking.jpg", width: 1365, height: 853, alt: "Dr. Amol Gawande speaking to an audience, in black and white" },
  leadership: { subject: "Addressing an audience, warm tone", ratio: "21 / 9", src: "/photos/leadership.jpg", width: 1450, height: 620, alt: "Dr. Amol Gawande addressing an audience, warm-toned" },
  cta: { subject: "Portrait at his desk, green duotone", ratio: "4 / 5", src: "/photos/cta.jpg", width: 1056, height: 1320, alt: "Dr. Amol Gawande at his desk, green-toned" },
};
