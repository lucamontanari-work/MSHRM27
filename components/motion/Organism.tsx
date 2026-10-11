"use client";

// The persistent canvas. Mounted once in the root layout and never unmounted,
// so it survives client-side navigation: this is where Passaggio and the
// growth of the symbol will live (Level 2, WebGL). For now it is an empty,
// fixed layer that pages can talk to through data attributes.
export function Organism() {
  return <div className="organism" aria-hidden="true" data-organism />;
}
