import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import PageHead from "@/components/PageHead";
import { contact, contactTopics } from "@/content/home";
import { profiles } from "@/content/person";
import { pageNode } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

const description = "Contact Dr. Amol Gawande for speaking engagements, research collaboration, academic conversations and media enquiries.";

export const metadata = pageMeta({ title: "Contact", description, path: "/contact" });

const topicIcons: Record<string, string> = { Speaking: "mic", "Research collaboration": "book", "Academic collaboration": "cap", Media: "quote", General: "users" };

export default function Contact() {
  return (
    <>
      <JsonLd graph={pageNode({ path: "/contact", name: "Contact", description, type: "ContactPage", crumbs: [{ name: "Contact", path: "/contact" }] })} />
      <PageHead
        crumbs={[{ name: "Contact", path: "/contact" }]}
        eyebrow="Contact"
        title={<>Let’s start <em>a conversation</em>.</>}
        lede={contact.support}
        image="cta"
        script="Let’s talk"
      />
      <section className="section tone-mint" aria-label="Contact form">
        <div className="wrap grid contact">
          <div className="contact__text rv">
            <span className="tag tag--dark">What you can write about</span>
            <ul className="chips mt-3" role="list" style={{ display: "grid", gap: "0.9rem" }}>
              {contactTopics.map((t) => (
                <li key={t}><span className="chips__icon"><Icon name={topicIcons[t] ?? "spark"} /></span><span>{t}</span></li>
              ))}
            </ul>
            {profiles.length > 0 && (
              <div className="mt-4">
                <span className="tag tag--dark">Elsewhere</span>
                <div className="pills mt-3">
                  {profiles.map((p) => (
                    <a key={p.url} href={p.url} rel="me noopener" target="_blank">{p.name}</a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="contact__form rv rv--d1">
            <div className="form-card">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
