import type { CSSProperties } from "react";

// The pictogram as a gradient-filled shape, in one of the three focus states
// from the layouts:
//   sharp  → the full graphic form
//   depth  → depth of field: in focus on one side, dissolving on the other
//   soft   → fully defocused, atmosphere behind type
// "rack" stacks sharp and soft so the hero can pull focus from one to the other.
// Built from two layers (sharp, blurred) so the blur never cuts at the mask edge
// and focus changes animate opacity, not blur radius (cheap on mobile).

type Focus = "sharp" | "depth" | "soft" | "rack";

type Props = {
  focus?: Focus;
  // Background of the shape: a gradient image path or any CSS background.
  fill?: string;
  className?: string;
};

export function Pictogram({ focus = "sharp", fill, className }: Props) {
  const style = fill ? ({ "--symbol-fill": fill } as CSSProperties) : undefined;
  return (
    <div
      className={["symbol", `symbol--${focus}`, className].filter(Boolean).join(" ")}
      style={style}
      aria-hidden="true"
    >
      {focus !== "soft" && <div className="symbol__sharp" />}
      {focus !== "sharp" && (
        <div className="symbol__soft">
          <div className="symbol__shape" />
        </div>
      )}
    </div>
  );
}
