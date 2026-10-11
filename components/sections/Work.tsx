import { clients, selectedWorkHref } from "@/lib/copy";

export function Work() {
  return (
    <section className="work section" id="work" aria-labelledby="work-title">
      <h2 id="work-title" className="ui-label">Brands we&rsquo;ve worked with</h2>
      <ul className="work__clients" data-reveal>
        {clients.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <a className="cta" href={selectedWorkHref}>
        Selected work, on request
      </a>
    </section>
  );
}
