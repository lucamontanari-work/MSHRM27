"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Focus/unfocus on scroll. Elements with [data-reveal] start out of focus
// (see globals.css) and get [data-revealed] once they enter the viewport.
// The out-of-focus state only applies under html.reveal-ready, which is set
// here: if this never runs, the page stays fully readable.
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.15 },
    );

    targets.forEach((el) => io.observe(el));
    root.classList.add("reveal-ready");
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
