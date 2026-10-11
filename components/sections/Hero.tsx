import { Pictogram } from "@/components/brand/Pictogram";
import { manifestoOpening } from "@/lib/copy";

// Arrivo, CSS version, as a rack focus: the symbol is born sharp at the centre
// and grows, then focus passes from the symbol to the opening line.
// Resting state (no JS, reduced motion): soft symbol, line in focus.
export function Hero() {
  return (
    <section className="hero" id="top">
      <Pictogram focus="rack" className="hero__symbol" />
      <h1 className="hero__title">{manifestoOpening}</h1>
    </section>
  );
}
