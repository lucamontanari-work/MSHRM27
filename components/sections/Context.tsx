import type { CSSProperties } from "react";
import { cases } from "@/lib/copy";

// Contesto: the pictogram is a fixed mask and the work scrolls behind it.
// The section is tall; its inner stage sticks to the viewport while
// --progress (ScrollProgress) moves the image column and the caption column.
// Resting state: first case inside the mask.
export function Context() {
  return (
    <section
      className="context"
      data-progress="sticky"
      data-steps={cases.length}
      style={{ "--count": cases.length } as CSSProperties}
      aria-label="Selected work"
    >
      <div className="context__stage">
        <div className="context__window">
          <div className="context__track">
            {cases.map((c, i) => (
              <img key={i} src={c.image} alt={c.client ?? ""} loading={i === 0 ? "eager" : "lazy"} />
            ))}
          </div>
        </div>
        <div className="context__caption">
          <ol className="context__captions">
            {cases.map((c, i) => (
              <li key={i} className="ui-label">
                <span>{String(i + 1).padStart(2, "0")}</span> {c.client ?? "Case to come"}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
