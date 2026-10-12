import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Arrow, Close, Menu } from "./Icons";

const links = [
  { href: "#programi", label: "Programi" },
  { href: "#raspored", label: "Raspored" },
  { href: "#treneri", label: "Treneri" },
  { href: "#cijene", label: "Cijene" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="header">
      <div className="container header-inner">
        <Logo />
        <nav id="main-nav" className={`nav ${open ? "is-open" : ""}`} aria-label="Glavna navigacija">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#probni-trening" className="btn btn-primary nav-cta-mobile" onClick={() => setOpen(false)}>
            Zakaži probni trening <Arrow />
          </a>
        </nav>
        <a href="#probni-trening" className="btn btn-primary btn-sm header-cta">
          Probni trening <Arrow />
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
