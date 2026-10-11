import { Mark } from "@/components/brand/Mark";

export function Header() {
  return (
    <header className="header">
      <a href="#top" className="header__logo accent" aria-label="MSHRM, back to top">
        <Mark name="lockup" />
      </a>
      <nav className="header__nav" aria-label="Main">
        <a href="#work" className="ui-label">Work</a>
        <a href="#contact" className="ui-label">Contact</a>
      </nav>
    </header>
  );
}
