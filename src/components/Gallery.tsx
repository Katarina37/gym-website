import { gallery, galleryStats } from "../data/content";
import CountUp from "./CountUp";

export default function Gallery() {
  return (
    <section className="gallery-section" id="galerija">
      <div className="container">
        <div className="gallery-header">
          <div>
            <span className="pill">PROSTOR</span>
            <h2 className="h2">
              Pogledaj
              <span className="heading-accent">gdje treniraš.</span>
            </h2>
          </div>
          <p>
            900 m² opreme, svjetla i prostora. Sve što ti treba na jednom
            mjestu, od slobodnih tegova do tuševa poslije treninga.
          </p>
        </div>

        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <figure
              className={`gallery-tile ${item.size ? `gallery-${item.size}` : ""}`}
              key={item.title}
            >
              <div className="gallery-placeholder">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                  <circle cx="12" cy="13" r="3.5" />
                </svg>
                <span>Ovdje ide fotka</span>
                <code>{item.photo}</code>
              </div>

              <img
                src={item.photo}
                alt={item.title}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              <span className="gallery-number">0{index + 1}</span>

              <figcaption>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="gallery-stats">
          {galleryStats.map((stat) => (
            <div className="gallery-stat" key={stat.label}>
              <strong><CountUp value={stat.value}/></strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}