/**
 * Photography slots. Studio portraits were made on 9 Oct 2026 from the
 * client's nine originals (Downloads/IMG_6679-6687.HEIC): subject cut out
 * on-device with Apple Vision, then relit on a deep-green or pale-mint
 * studio backdrop. The scripts live outside the repo; to swap a photo,
 * replace the file and update width/height here.
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

export const images: Record<"hero" | "portrait" | "about" | "research" | "ideas" | "speaking" | "leadership" | "cta", ImageSlotDef> = {
  hero: { subject: "Studio portrait, standing", ratio: "3 / 4", src: "/photos/hero.jpg", width: 1800, height: 2400, alt: "Dr. Amol Gawande in a light blue blazer, looking to the side, studio portrait" },
  portrait: { subject: "Studio portrait, facing camera", ratio: "4 / 5", src: "/photos/portrait.jpg", width: 1800, height: 2250, alt: "Dr. Amol Gawande, studio portrait" },
  about: { subject: "Seated studio portrait", ratio: "4 / 5", src: "/photos/about.jpg", width: 1600, height: 2000, alt: "Dr. Amol Gawande seated, smiling at the camera" },
  research: { subject: "Seated, looking away", ratio: "4 / 5", src: "/photos/research.jpg", width: 1600, height: 2000, alt: "Dr. Amol Gawande seated, looking thoughtfully to the side" },
  ideas: { subject: "Books on the desk", ratio: "16 / 10", src: "/photos/ideas.jpg", width: 1469, height: 918, alt: "Books and a cup of coffee on Dr. Amol Gawande’s desk" },
  speaking: { subject: "Speaking, black and white", ratio: "16 / 10", src: "/photos/speaking.jpg", width: 1365, height: 853, alt: "Dr. Amol Gawande speaking to an audience, in black and white" },
  leadership: { subject: "Seated, in profile", ratio: "21 / 9", src: "/photos/leadership.jpg", width: 3000, height: 1286, alt: "Dr. Amol Gawande seated in profile, looking ahead" },
  cta: { subject: "Standing, arms folded", ratio: "4 / 5", src: "/photos/cta.jpg", width: 1600, height: 2000, alt: "Dr. Amol Gawande standing with arms folded, studio portrait" },
};
