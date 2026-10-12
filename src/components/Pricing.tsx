import { useState } from "react";
import { periods, plans } from "../data/content";
import { Arrow, Check } from "./Icons";

const perks = [
  "Prvi probni trening je besplatan",
  "Zamrzavanje članarine do 30 dana godišnje",
  "Besplatan parking ispred objekta",
];

export default function Pricing() {
  const [periodId, setPeriodId] = useState(periods[1].id);

  const period = periods.find((p) => p.id === periodId) ?? periods[0];

  return (
    <section className="pricing-section" id="cijene">
      <div className="container">
        <div className="pricing-header">
          <div>
            <span className="pill">ČLANARINE</span>

            <h2 className="h2">
              Izaberi svoj
              <span className="heading-accent"> nivo.</span>
            </h2>
          </div>

          <p>
            Jednostavne članarine bez skrivenih troškova. Izaberi ono što
            odgovara tvom načinu treniranja.
          </p>
        </div>

        <div className="pricing-switch">
          {periods.map((p) => (
            <button
              key={p.id}
              className={p.id === periodId ? "active" : ""}
              onClick={() => setPeriodId(p.id)}
            >
              {p.label}
              {p.discount > 0 && (
                <small>-{Math.round(p.discount * 100)}%</small>
              )}
            </button>
          ))}
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => {
            const perMonth = Math.round(plan.monthly * (1 - period.discount));
            const total = perMonth * period.months;
            const saved = plan.monthly * period.months - total;

            return (
              <article
                key={plan.id}
                className={`pricing-card ${
                  plan.highlight ? "pricing-card-featured" : ""
                }`}
              >
                {plan.highlight && (
                  <div className="pricing-badge">NAJPOPULARNIJI</div>
                )}

                <div className="pricing-card-top">
                  <span className="pricing-tier">0{index + 1}</span>
                  <span className="pricing-name">{plan.name}</span>
                  {plan.highlight && <span className="pricing-star">★</span>}
                </div>

                <div className="pricing-price">
                  <span className="pricing-old">
                    {period.discount > 0 ? `${plan.monthly} KM` : "\u00A0"}
                  </span>

                  <h3 key={`${plan.id}-${perMonth}`}>
                    <span className="pricing-amount">{perMonth}</span>
                    <small>KM / mj.</small>
                  </h3>
                </div>

                <p>{plan.description}</p>

                <div className="pricing-line" />

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span>
                        <Check />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pricing-bottom">
                  {period.months > 1 ? (
                    <div className="pricing-total">
                      <span>
                        {total} KM ukupno za {period.label}
                      </span>
                      <b>Ušteda {saved} KM</b>
                    </div>
                  ) : (
                    <div className="pricing-total">
                      <span>Plaćanje mjesečno</span>
                    </div>
                  )}

                  <a
                    href="#probni-trening"
                    className={`btn ${
                      plan.highlight ? "btn-primary" : "btn-ghost"
                    } btn-block`}
                  >
                    Izaberi paket
                    <Arrow />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="pricing-perks">
          {perks.map((perk) => (
            <div key={perk}>
              <span>
                <Check />
              </span>
              {perk}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}