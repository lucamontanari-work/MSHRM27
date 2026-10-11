import { manifestoOpening } from "@/lib/copy";

// Arrivo, CSS version: the symbol is born at the centre as a gradient mask and
// grows while the opening line comes into focus. Level 2 hands this to WebGL.
export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__symbol grain" aria-hidden="true" />
      <h1 className="hero__title">{manifestoOpening}</h1>
    </section>
  );
}
