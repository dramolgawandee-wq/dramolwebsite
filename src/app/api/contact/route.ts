import { NextResponse } from "next/server";

/**
 * Contact delivery via Resend's HTTP API (no SDK dependency).
 * Required env: RESEND_API_KEY, CONTACT_TO. Optional: CONTACT_FROM.
 * Without them the route answers 503 and the form tells the visitor so,
 * rather than pretending the message was sent.
 */
export const CATEGORIES = ["Speaking", "Research collaboration", "Academic collaboration", "Media", "General"];

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
  if (body.website) return NextResponse.json({ ok: true }); // honeypot

  const name = (body.name ?? "").trim().slice(0, 120);
  const email = (body.email ?? "").trim().slice(0, 200);
  const org = (body.org ?? "").trim().slice(0, 200);
  const category = CATEGORIES.includes(body.category) ? body.category : "General";
  const message = (body.message ?? "").trim().slice(0, 5000);

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
    return NextResponse.json({ ok: false, error: "Please add your name, a valid email and a short message." }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  if (!key || !to) {
    return NextResponse.json({ ok: false, error: "not-configured" }, { status: 503 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || "Website <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `[${category}] ${name}${org ? ` — ${org}` : ""}`,
      html: `<p><b>${esc(name)}</b> &lt;${esc(email)}&gt;${org ? `<br>${esc(org)}` : ""}</p><p><b>${esc(category)}</b></p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
    }),
  });
  if (!res.ok) return NextResponse.json({ ok: false, error: "Delivery failed." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
