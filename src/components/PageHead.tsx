import type { ReactNode } from "react";
import type { images } from "@/content/images";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import ImageSlot from "./ImageSlot";

/** Faint curved lines, shared with the homepage's dark sections. */
export function Curves({ className = "" }: { className?: string }) {
  return (
    <svg className={`curves ${className}`} viewBox="0 0 1200 600" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <path d="M-20 420C220 300 420 560 640 380S980 60 1240 180" stroke="currentColor" strokeWidth="1.2" />
      <path d="M-20 470C240 360 440 600 660 420S1000 120 1240 240" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
    </svg>
  );
}

type Props = {
  crumbs?: Crumb[];
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  /** Buttons or links shown under the lede. */
  aside?: ReactNode;
  /** Photograph shown beside the title. */
  image?: keyof typeof images;
  imageRatio?: string;
  /** Handwritten accent, top right. */
  script?: string;
  children?: ReactNode;
};

/** Page header: dark green band with pill eyebrow, H1, lede, optional photograph and actions. */
export default function PageHead({ crumbs, eyebrow, title, lede, aside, image, imageRatio = "4 / 5", script, children }: Props) {
  return (
    <header className={`pagehead${image ? " pagehead--img" : ""}`}>
      <Curves />
      {script && <span className="script script--mint" aria-hidden="true">{script}</span>}
      <div className="wrap">
        {crumbs && <Breadcrumbs crumbs={crumbs} />}
        <div className="grid pagehead__grid">
          <div className="pagehead__main rv">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h1>{title}</h1>
            {lede && <p className="lede">{lede}</p>}
            {aside && <div className="pagehead__aside">{aside}</div>}
          </div>
          {image && (
            <div className="pagehead__img rv rv--img">
              <ImageSlot name={image} tone="dark" ratio={imageRatio} priority sizes="(max-width: 1024px) 100vw, 32vw" />
            </div>
          )}
        </div>
        {children}
      </div>
    </header>
  );
}

/** In-page section header with pill eyebrow, H2 and an optional side action. */
export function SectionHead({ eyebrow, title, lede, side, id }: { eyebrow: string; title: ReactNode; lede?: ReactNode; side?: ReactNode; id?: string }) {
  return (
    <div className="head">
      <div className="head__main rv">
        <span className="eyebrow" id={id}>{eyebrow}</span>
        <h2 className="h2">{title}</h2>
        {lede && <p className="lede head__lede">{lede}</p>}
      </div>
      {side && <div className="head__side rv rv--d1">{side}</div>}
    </div>
  );
}
