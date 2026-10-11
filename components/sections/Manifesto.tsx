import { manifesto } from "@/lib/copy";

export function Manifesto() {
  return (
    <section className="manifesto section" aria-label="Manifesto">
      {manifesto.map((p, i) => (
        <p key={i} className="manifesto__p" data-reveal>
          {p}
        </p>
      ))}
    </section>
  );
}
