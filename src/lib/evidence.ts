import { sources } from "../content/sources.ts";
import type { Evidence } from "../content/types.ts";

const byId = new Map(sources.map((s) => [s.id, s]));

export const getSource = (id: string) => byId.get(id);

/**
 * A record is publishable only if at least one of its sources is verified.
 * Unknown source ids fail closed. This is the gate that keeps unverified
 * claims off the site; lists should always pass through `publishable()`.
 */
export function isVerified(item: Evidence) {
  return item.sourceIds.some((id) => byId.get(id)?.status === "verified");
}

export function publishable<T extends Evidence>(items: T[]): T[] {
  return items.filter(isVerified);
}
