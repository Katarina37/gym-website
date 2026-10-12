import Logo from "./Logo";
import { gym } from "../data/content";
import {
  Arrow,
  Clock,
  Facebook,
  Instagram,
  Phone,
  Pin,
  Youtube,
  Mail,
} from "./Icons";

function todayIndex() {
  const d = new Date().getDay();
  if (d === 0) return 2;
  if (d === 6) return 1; 
  return 0; 
}

export default function Footer() {
  const today = todayIndex();
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    gym.address
  )}`;

  return (
    <footer className="footer" id="kontakt">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Logo />

            <p>
              Treniraj pametno.
              <br />
              <span>Ostani jak.</span>
            </p>

            <div className="socials">
              <a href={gym.social.instagram} aria-label="Instagram">
                <Instagram />
              </a>
              <a href={gym.social.facebook} aria-label="Facebook">
                <Facebook />
              </a>
              <a href={gym.social.youtube} aria-label="YouTube">
                <Youtube />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <span>LINKOVI</span>

            <a href="#programi">Programi</a>
            <a href="#raspored">Raspored</a>
            <a href="#treneri">Treneri</a>
            <a href="#cijene">Članarine</a>
            <a href="#probni-trening">Probni trening</a>
          </div>

          <div className="footer-column">
            <span>KONTAKT</span>

            <a href={`tel:${gym.phone.replace(/\s/g, "")}`}>
              <Phone />
              {gym.phone}
            </a>

            <a href={`mailto:${gym.email}`}>
              <Mail/>
              {gym.email}
            </a>

            <a href={mapUrl} target="_blank" rel="noreferrer">
              <Pin />
              {gym.address}
            </a>
          </div>

          <div className="footer-column footer-hours">
            <span>RADNO VRIJEME</span>

            {gym.hours.map((hour, i) => (
              <p key={hour.days} className={i === today ? "is-today" : ""}>
                <Clock />
                <em>
                  {hour.days}
                  {i === today && <b>Danas</b>}
                </em>
                <strong>{hour.time}</strong>
              </p>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <small>
            © {new Date().getFullYear()} {gym.name}. Sva prava zadržana.
          </small>

          <a href="#top" className="footer-top">
            Nazad na vrh <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}