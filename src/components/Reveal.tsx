"use client";

import { useEffect } from "react";

/**
 * Adds `.is-in` to `.rv` elements as they enter the viewport. Styles only
 * apply when <html> has the `js` class, so content is never hidden without
 * JavaScript, and nothing animates under prefers-reduced-motion.
 */
export default function Reveal() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".rv").forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
