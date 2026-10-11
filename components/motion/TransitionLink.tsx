"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

const EXIT_MS = 600;

// The App Router has no exit transition. This link plays Passaggio first
// (html.is-leaving, styled in globals.css and later driven by <Organism />),
// then navigates. Modified clicks, new tabs and reduced motion skip it.
type Props = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

export function TransitionLink({ href, onClick, ...rest }: Props) {
  const router = useRouter();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (rest.target && rest.target !== "_self") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    e.preventDefault();
    const root = document.documentElement;
    root.classList.add("is-leaving");
    window.setTimeout(() => {
      router.push(href);
      root.classList.remove("is-leaving");
    }, EXIT_MS);
  }

  return <Link href={href} onClick={handleClick} {...rest} />;
}
