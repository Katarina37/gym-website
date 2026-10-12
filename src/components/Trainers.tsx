import { trainers } from "../data/content";
import { Arrow } from "./Icons";

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

export default function Trainers() {
  return (
    <section className="trainers-section" id="treneri">
      <div className="container">
        <div className="trainers-header">
          <div>
            <span className="pill">TRENERI</span>

            <h2 className="h2">
              Ljudi iza
              <span className="heading-accent"> rezultata.</span>
            </h2>
          </div>

          <p>
            Naši treneri su tu da ti pokažu kako da treniraš
            pravilno, napreduješ sigurno i ostaneš motivisan.
          </p>
        </div>

        <div className="trainers-grid">
          {trainers.map((trainer, index) => (
            <article className="trainer-card" key={trainer.name}>
              <div className="trainer-image">
                <div className="trainer-number">
                  0{index + 1}
                </div>

                <img
                  src={`/trainer0${index + 1}.png`}
                  alt={trainer.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement?.classList.add(
                      "image-fallback"
                    );
                  }}
                />

                
              </div>

              <div className="trainer-info">
                <span>{trainer.role}</span>

                <h3>{trainer.name}</h3>

                <p>{trainer.bio}</p>

                <div className="trainer-bottom">
                  <div className="tags">
                    {trainer.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a href="#probni-trening" aria-label={`Kontaktiraj ${trainer.name}`}>
                    <Arrow />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}