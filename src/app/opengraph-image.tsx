import { ogCard, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Dr. Amol Gawande: Rethinking education for a world that keeps changing.";

export default function Image() {
  return ogCard({ kicker: "Dr. Amol Gawande", title: "Rethinking education for a world that keeps changing." });
}
