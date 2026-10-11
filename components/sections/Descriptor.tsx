import { Staircase } from "@/components/Staircase";
import { definition, descriptor, scriptLine } from "@/lib/copy";

export function Descriptor() {
  return (
    <section className="descriptor section" aria-label="Who we are">
      <Staircase as="h2" lines={descriptor} size="xl" />
      <div className="descriptor__body">
        <p className="script" data-reveal>{scriptLine}</p>
        {definition.map((p, i) => (
          <p key={i} className="body-l" data-reveal>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
