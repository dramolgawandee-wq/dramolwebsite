import ImageSlot from "./ImageSlot";

/** The hero portrait slot at a smaller size (About page header, author box). */
export default function Portrait({ priority = false, sizes = "(max-width: 760px) 90vw, 40vw", small = false, tone = "light" }: { priority?: boolean; sizes?: string; small?: boolean; tone?: "light" | "dark" }) {
  return <ImageSlot name="hero" priority={priority} sizes={sizes} quiet={small} tone={tone} ratio="4 / 5" />;
}
