import type { CSSProperties, ElementType } from "react";

type Props = {
  lines: readonly string[];
  // EXPO axis target per line: +100 overexposed (hairline) to -100 underexposed (blobby).
  // Defaults to an even descent from light to blobby.
  expo?: readonly number[];
  as?: ElementType;
  size?: "xl" | "l" | "m";
  className?: string;
};

// The signature type setting: each line steps down and to the right and gains
// weight. Overexposed and out of focus until revealed, then each line settles on its EXPO value.
export function Staircase({ lines, expo, as: Tag = "p", size = "l", className }: Props) {
  const targets = expo ?? lines.map((_, i) => (lines.length === 1 ? 0 : 70 - (170 * i) / (lines.length - 1)));
  return (
    <Tag className={["staircase", `staircase--${size}`, className].filter(Boolean).join(" ")} data-reveal>
      {lines.map((line, i) => (
        <span
          key={i}
          className="staircase__line"
          style={{ "--i": i, "--expo": targets[i] } as CSSProperties}
        >
          {line}
        </span>
      ))}
    </Tag>
  );
}
