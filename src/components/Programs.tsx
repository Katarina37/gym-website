import { programs } from "../data/content";
import { Arrow, Icon } from "./Icons";

export default function Programs() {
  return (
    <section className="programs-section" id="programi">
      <div className="container">
        <div className="programs-heading">
          <div>
            <span className="pill">PROGRAMI</span>

            <h2 className="h2">
              Trening koji
              <span className="heading-accent"> ima svrhu.</span>
            </h2>
          </div>

          <p className="programs-intro">
            Bez obzira da li želiš više snage, bolju kondiciju ili da se
            jednostavno osjećaš bolje u svom tijelu — imamo program za tebe.
          </p>
        </div>

        <div className="programs-showcase">
          {programs.map((program, index) => (
            <article
              key={program.id}
              className="program-feature"
            >
              <div className="program-top">
                <span className="program-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <Icon name={program.icon} className="program-icon-large" />
              </div>

              <div className="program-content">
                <span className="program-level">{program.level}</span>

                <h3>{program.title}</h3>

                <p>{program.text}</p>

                <div className="program-bottom">
                  <span>{program.duration}</span>

                  <a href="#probni-trening" className="program-arrow">
                    <Arrow />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="programs-footer">
          <div className="programs-footer-text">
            <span className="footer-line" />

            <p>
              Nisi siguran koji program je za tebe?
              <strong> Pomoći ćemo ti da izabereš.</strong>
            </p>
          </div>

          <a href="#probni-trening" className="btn btn-primary">
            Razgovaraj sa trenerom
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}