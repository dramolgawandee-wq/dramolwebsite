import type { Faq as FaqItem } from "@/content/types";

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <ul className="faq" role="list">
      {items.map((f) => (
        <li key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </li>
      ))}
    </ul>
  );
}
