import { roles } from "@/content/person";
import { publishable } from "./evidence";
import { period } from "./site";

export type TimelineEntry = { id: string; year: string; role: string; org: string; desc?: string; current?: boolean; industry?: boolean };

/**
 * Vertical timeline built only from verified roles, newest first. Dates come
 * from sources; where none is published, `when` gives a display label.
 */
const order = ["brookstone", "aims-board", "cegr", "aims-pune", "gbsrc", "mit-stm", "mitcon", "siddhant", "capstone", "syscon"];

export function timeline(): TimelineEntry[] {
  const verified = publishable(roles);
  return order
    .map((id) => verified.find((r) => r.id === id))
    .filter((r): r is NonNullable<typeof r> => !!r)
    .map((r) => ({
      id: r.id,
      year: r.when ?? period(r.start, r.end, r.current),
      role: r.title,
      org: r.place ? `${r.org}, ${r.place}` : r.org,
      desc: r.summary,
      current: r.current,
      industry: r.industry,
    }));
}

/** The short homepage version: leadership, governance, the move into academia and the start in markets. */
export function timelineCompact(): TimelineEntry[] {
  const keep = new Set(["brookstone", "aims-board", "cegr", "gbsrc", "siddhant", "syscon"]);
  return timeline().filter((e) => keep.has(e.id));
}
