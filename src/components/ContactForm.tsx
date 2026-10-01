"use client";

import { useEffect, useState, type FormEvent } from "react";
import { contactTopics } from "@/content/home";

const CATEGORIES = [...contactTopics];

export default function ContactForm() {
  const [category, setCategory] = useState<string>(CATEGORIES[0]);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error" | "offline">("idle");
  const [error, setError] = useState("");

  // /contact?topic=Speaking preselects a category.
  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("topic");
    const match = CATEGORIES.find((c) => c.toLowerCase() === t?.toLowerCase());
    if (match) setCategory(match);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, category }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) return setState("sent");
      if (json.error === "not-configured") return setState("offline");
      setError(json.error || "Something went wrong.");
      setState("error");
    } catch {
      setError("Network error. Please try again.");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="form__status" role="status">
        <p className="h3">Thank you. Your message is on its way.</p>
        <p className="mute mt-2">Replies come from the address you provided.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="field">
        <legend>What is this about?</legend>
        <div className="choices" role="radiogroup" aria-label="Enquiry type">
          {CATEGORIES.map((c) => (
            <button key={c} type="button" role="radio" aria-checked={category === c} className="choice" onClick={() => setCategory(c)}>
              {c}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="cols">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="org">Organisation <span className="mute">(optional)</span></label>
        <input id="org" name="org" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required minLength={10} />
      </div>
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div>
        <button className="btn btn--solid" type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Sending" : "Send message"}
        </button>
      </div>
      <div aria-live="polite">
        {state === "error" && <p className="form__status form__status--err">{error}</p>}
        {state === "offline" && (
          <p className="form__status">
            The contact form is not connected yet. Please reach out through one of the profiles linked in the footer.
          </p>
        )}
      </div>
    </form>
  );
}
