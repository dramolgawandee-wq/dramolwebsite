import Link from "next/link";
import { nav } from "@/lib/site";

/** Section tab row for Research and About. `current` is the page's own path. */
export default function SubNav({ section, current }: { section: "/research" | "/about"; current: string }) {
  const items = nav.find((l) => l.href === section)?.children ?? [];
  return (
    <nav className="subnav" aria-label={`${section === "/research" ? "Research" : "About"} sections`}>
      {items.map((c) => (
        <Link key={c.href} href={c.href} aria-current={c.href === current ? "page" : undefined}>
          {c.label}
        </Link>
      ))}
    </nav>
  );
}
