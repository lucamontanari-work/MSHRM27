import { pillars } from "@/lib/copy";

// DA DEFINIRE: pillar texts are not written yet. Development builds show the
// empty slots so the layout can be judged; production builds render nothing.
export function Pillars() {
  if (process.env.NODE_ENV === "production") return null;
  return (
    <section className="pillars section draft" aria-label="Pillars (draft)">
      <p className="ui-label draft__label">Draft · pillar texts missing</p>
      <ol className="pillars__list">
        {pillars.map((p) => (
          <li key={p.name} className="pillars__item">
            <h3 className="ui-label">{p.name}</h3>
            <p className="body-l">{p.text ?? "Text to come."}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
