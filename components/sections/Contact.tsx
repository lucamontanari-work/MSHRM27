import { Mark } from "@/components/brand/Mark";
import { Staircase } from "@/components/Staircase";
import { contactEmail, mantra } from "@/lib/copy";

export function Contact() {
  return (
    <section className="contact floor floor--dark" id="contact" data-progress aria-label="Contact">
      <Staircase as="h2" lines={["get", "in touch"]} expo={[50, -80]} size="l" />
      <a className="cta contact__email" href={`mailto:${contactEmail}`}>
        {contactEmail}
      </a>
      <p className="contact__mantra" data-reveal>{mantra}</p>
      <footer className="footer">
        <Mark name="monogram" className="footer__stamp" />
        <p className="ui-label">&copy; 2026 MSHRM</p>
      </footer>
    </section>
  );
}
