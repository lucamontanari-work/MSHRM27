import { brand } from "./paths";

type MarkName = keyof typeof brand;

type Props = {
  name: MarkName;
  title?: string;
  className?: string;
};

// Inline brand SVG. Colour comes from CSS (currentColor), so flat black/white
// versions need no separate files. Eyelets are painted by the Accento rules in
// globals.css with the shared #mshrm-accent gradient defined in <BrandDefs />.
export function Mark({ name, title, className }: Props) {
  const mark = brand[name];
  const eyelets = "eyelets" in mark ? mark.eyelets : undefined;
  return (
    <svg
      viewBox={mark.viewBox}
      className={["mark", `mark--${name}`, className].filter(Boolean).join(" ")}
      fill="currentColor"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {mark.shapes.map((d, i) => (
        <path key={i} d={d} />
      ))}
      {eyelets && (
        <g className="eyelets">
          <path d={eyelets.left} />
          <path d={eyelets.right} />
        </g>
      )}
    </svg>
  );
}

// Shared gradient for Accento. Rendered once in the root layout.
export function BrandDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="mshrm-accent" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#B391EC" />
          <stop offset="0.55" stopColor="#FE9CB6" />
          <stop offset="1" stopColor="#ECF292" />
        </linearGradient>
      </defs>
    </svg>
  );
}
