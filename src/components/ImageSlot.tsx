import Image from "next/image";
import { images } from "@/content/images";

type Props = {
  name: keyof typeof images;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** Placeholder tone: dark for dark sections, light for light, lavender, warm for the photographic hero. */
  tone?: "dark" | "light" | "lavender" | "warm";
  /** Hide the placeholder label (small uses). */
  quiet?: boolean;
  /** Fill the parent (position: absolute, inset 0) instead of holding an aspect ratio. */
  cover?: boolean;
  /** Override the slot's aspect ratio for this use. */
  ratio?: string;
  /** object-position when the photograph is set (e.g. "72% center"). */
  position?: string;
};

/**
 * One of the photography slots. Renders the photograph when set in
 * content/images.ts; otherwise a designed tonal field with a small label,
 * so the composition holds without imagery.
 */
export default function ImageSlot({ name, className = "", priority = false, sizes = "(max-width: 760px) 100vw, 50vw", tone = "light", quiet = false, cover = false, ratio, position }: Props) {
  const img = images[name];
  const style = cover ? undefined : { aspectRatio: ratio ?? img.ratio };
  const mode = cover ? "slot--cover" : "";
  const alt = img.alt ?? `Dr. Amol Gawande: ${img.subject.toLowerCase()}`;
  if (img.src) {
    return (
      <figure className={`slot slot--photo ${mode} ${className}`} style={style}>
        {cover ? (
          <Image src={img.src} alt={alt} fill priority={priority} sizes={sizes} style={{ objectPosition: position }} />
        ) : (
          <Image src={img.src} alt={alt} width={img.width} height={img.height} priority={priority} sizes={sizes} style={{ objectPosition: position }} />
        )}
      </figure>
    );
  }
  return (
    <div className={`slot slot--empty slot--${tone} ${mode} ${className}`} style={style} role="img" aria-label={`Image slot: ${img.subject}. Photograph to follow.`}>
      {!quiet && (
        <span className="slot__label" aria-hidden="true">
          <span className="slot__rule" />
          Image · {img.subject}
        </span>
      )}
    </div>
  );
}
