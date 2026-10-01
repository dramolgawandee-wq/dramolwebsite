import Link from "next/link";
import PageHead from "@/components/PageHead";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <>
      <PageHead eyebrow="404" title="That page is not here." lede="The address may have changed. Try one of the sections below." />
      <section className="section">
        <div className="wrap">
          <ul className="topics topics--grid" role="list">
            {[
              ["/ideas", "Ideas", "Perspectives on education, technology and the future of work."],
              ["/research", "Research", "Publications, books and IPR."],
              ["/about", "About", "Profile, journey and speaking."],
            ].map(([href, t, d]) => (
              <li key={href}>
                <Link href={href}>
                  <span className="topics__t">{t}</span>
                  <span className="topics__d">{d}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
