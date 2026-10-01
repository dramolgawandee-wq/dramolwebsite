import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Typographic share card in the site palette: deep green field, bold statement, mint rule. */
export function ogCard({ kicker, title }: { kicker: string; title: string }) {
  const fontSize = title.length > 80 ? 56 : title.length > 48 ? 66 : 80;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#061410", color: "#f3faf7", padding: "64px 72px", fontFamily: "Helvetica, Arial, sans-serif", fontWeight: 600 }}>
        <div style={{ display: "flex", alignItems: "center", fontSize: 20, letterSpacing: 5, textTransform: "uppercase", color: "#7ff0cf", fontFamily: "Helvetica, Arial, sans-serif" }}>
          <div style={{ width: 28, height: 1, background: "#7ff0cf", marginRight: 16 }} />
          {kicker}
        </div>
        <div style={{ fontSize, lineHeight: 1.04, letterSpacing: -1, maxWidth: 980 }}>{title}</div>
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.18)", paddingTop: 24, fontSize: 22, fontFamily: "Helvetica, Arial, sans-serif" }}>
          <span>Dr. Amol Gawande</span>
          <span style={{ color: "#8fa8a0" }}>Academic leader · Researcher · Management educator</span>
        </div>
      </div>
    ),
    ogSize
  );
}
