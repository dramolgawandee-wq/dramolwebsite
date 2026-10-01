import type { Block } from "@/content/types";

/**
 * Article HTML comes from our own content files, never user input.
 * "quote" blocks are not rendered: pull quotes appear only once a quotation
 * is real and approved by the author (see HANDOFF.md).
 */
export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="article__body">
      {blocks.map((b, i) => {
        switch (b.t) {
          case "p":
            return <p key={i} dangerouslySetInnerHTML={{ __html: b.html }} />;
          case "h2":
            return <h2 key={i} id={b.id}>{b.text}</h2>;
          case "h3":
            return <h3 key={i}>{b.text}</h3>;
          case "ul":
            return <ul key={i}>{b.items.map((x, j) => <li key={j} dangerouslySetInnerHTML={{ __html: x }} />)}</ul>;
          case "ol":
            return <ol key={i}>{b.items.map((x, j) => <li key={j} dangerouslySetInnerHTML={{ __html: x }} />)}</ol>;
          case "answer":
            return (
              <div key={i} className="answer">
                <b>{b.label}</b>
                <p dangerouslySetInnerHTML={{ __html: b.html }} />
              </div>
            );
          case "quote":
            return null;
        }
      })}
    </div>
  );
}
