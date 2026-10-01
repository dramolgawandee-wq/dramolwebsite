import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#061410", color: "#7ff0cf", fontSize: 30, fontWeight: 700, fontFamily: "Helvetica, Arial, sans-serif", borderRadius: 14 }}>
        A
        <div style={{ position: "absolute", left: 14, right: 14, bottom: 12, height: 2, background: "#7ff0cf" }} />
      </div>
    ),
    size
  );
}
