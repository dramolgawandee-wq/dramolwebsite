import Link from "next/link";
import { authorBio } from "@/content/person";
import Portrait from "./Portrait";

export default function AuthorBox() {
  return (
    <aside className="author" aria-label="About the author">
      <Portrait small sizes="80px" />
      <div>
        <span className="eyebrow">Author</span>
        <p className="h4 mt-1" style={{ color: "var(--ink)" }}>Dr. Amol Gawande</p>
        <p>{authorBio()}</p>
        <Link href="/about" className="arrow">About Dr. Gawande</Link>
      </div>
    </aside>
  );
}
