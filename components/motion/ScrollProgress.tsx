"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Writes --progress (0 → 1) on every [data-progress] element as it scrolls
// through the viewport. Sticky sections (Contesto) measure from when their top
// reaches the top of the viewport until their bottom reaches the bottom; other
// sections (gradient floors) measure from entering to leaving.
// With [data-steps="n"] and reduced motion, progress snaps to n discrete steps:
// content still changes, but nothing glides.
// Without JS the CSS fallback (--progress unset) is the complete resting state.
export function ScrollProgress() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-progress]"));
    if (!els.length) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      for (const el of els) {
        const r = el.getBoundingClientRect();
        const sticky = el.dataset.progress === "sticky";
        const range = sticky ? r.height - vh : r.height + vh;
        const travelled = sticky ? -r.top : vh - r.top;
        let p = range > 0 ? Math.min(1, Math.max(0, travelled / range)) : 0;
        const steps = Number(el.dataset.steps);
        if (steps > 1 && reduce.matches) p = Math.round(p * (steps - 1)) / (steps - 1);
        el.style.setProperty("--progress", p.toFixed(4));
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduce.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduce.removeEventListener("change", schedule);
    };
  }, [pathname]);

  return null;
}
