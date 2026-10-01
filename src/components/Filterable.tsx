"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";

export type FilterItem = { key: string; tags: Record<string, string[]>; text: string; node: ReactNode };
export type FilterGroup = { id: string; label: string; options: string[]; param?: string };

/**
 * Publication archive filter. Every item is server-rendered into the HTML
 * (crawlable, works without JS); this only toggles visibility. Filters are
 * buttons with aria-pressed; an aria-live line announces the result count.
 */
export default function Filterable({ items, groups, search, noun = "items" }: { items: FilterItem[]; groups: FilterGroup[]; search: string; noun?: string }) {
  const [active, setActive] = useState<Record<string, string>>(Object.fromEntries(groups.map((g) => [g.id, "All"])));
  const [q, setQ] = useState("");

  // Deep links such as /research/publications?area=Finance preselect a filter.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const next: Record<string, string> = {};
    for (const g of groups) {
      const want = params.get(g.param ?? g.id);
      if (want && g.options.includes(want)) next[g.id] = want;
    }
    if (Object.keys(next).length) setActive((a) => ({ ...a, ...next }));
  }, [groups]);

  const counts = useMemo(() => {
    const c: Record<string, Record<string, number>> = {};
    for (const g of groups) {
      c[g.id] = { All: items.length };
      for (const o of g.options) c[g.id][o] = items.filter((i) => i.tags[g.id]?.includes(o)).length;
    }
    return c;
  }, [items, groups]);

  const needle = q.trim().toLowerCase();
  const visible = items.filter(
    (i) =>
      groups.every((g) => active[g.id] === "All" || i.tags[g.id]?.includes(active[g.id])) &&
      (!needle || i.text.toLowerCase().includes(needle))
  );

  return (
    <div>
      <div className="filters">
        <div>
          <label htmlFor="q" className="sr-only">{search}</label>
          <input id="q" type="search" className="search" placeholder={search} value={q} onChange={(e) => setQ(e.target.value)} autoComplete="off" />
        </div>
        {groups.map((g) => (
          <div key={g.id} className="filters__row" role="group" aria-label={g.label}>
            <span className="eyebrow">{g.label}</span>
            {["All", ...g.options.filter((o) => counts[g.id][o] > 0)].map((o) => (
              <button key={o} type="button" className="choice" aria-pressed={active[g.id] === o} onClick={() => setActive((a) => ({ ...a, [g.id]: o }))}>
                {o}
                <span className="count">{counts[g.id][o]}</span>
              </button>
            ))}
          </div>
        ))}
      </div>
      <p className="small mute mt-4" aria-live="polite">
        Showing {visible.length} of {items.length} {noun}
      </p>
      <ul className="list mt-2" role="list">
        {items.map((i) => (
          <li key={i.key} hidden={!visible.includes(i)}>
            {i.node}
          </li>
        ))}
        {visible.length === 0 && <li className="row mute">Nothing matches that yet.</li>}
      </ul>
    </div>
  );
}
