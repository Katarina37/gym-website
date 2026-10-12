import { useState } from "react";
import { days, schedule, type Day } from "../data/content";
import { Clock, Users } from "./Icons";

const todayIndex = (new Date().getDay() + 6) % 7;

export default function Schedule() {
  const [day, setDay] = useState<Day>(days[todayIndex]);
  const slots = schedule[day];

  return (
    <section className="schedule-section" id="raspored">
      <div className="container">
        <div className="schedule-header">
          <div>
            <span className="pill">RASPORED</span>

            <h2 className="h2">
              Nađi svoj
              <span className="heading-accent"> termin.</span>
            </h2>
          </div>

          <p>
            Jutarnji HIIT, trening snage, funkcionalni trening ili oporavak. Izaberi termin koji odgovara tvom ritmu.
          </p>
        </div>

        <div className="schedule-wrapper">
          <div className="schedule-days">
            {days.map((d) => (
              <button
                key={d}
                className={`schedule-day ${d === day ? "is-active" : ""}`}
                onClick={() => setDay(d)}
              >
                <span>{d}</span>
              </button>
            ))}
          </div>

          <div className="schedule-date">
            <div>
              <span className="schedule-live-dot" />
              <span>GRUPNI TRENINZI</span>
            </div>

            <strong>{slots.length} termina danas</strong>
          </div>

          <div className="schedule-list">
            {slots.map((slot, index) => (
              <article className="schedule-card" key={slot.time + slot.title}>
                <div className="schedule-time">
                  <span>{slot.time}</span>
                  <small>{index === 0 ? "JUTRO" : "VEČE"}</small>
                </div>

                <div className="schedule-info">
                  <span className="schedule-category">{slot.level}</span>
                  <h3>{slot.title}</h3>

                  <div className="schedule-meta">
                    <span>
                      <Users />
                      {slot.trainer}
                    </span>

                    <span>
                      <Clock />
                      45 min
                    </span>
                  </div>
                </div>

                <div
                  className={`schedule-spots ${
                    slot.spots <= 4 ? "spots-low" : ""
                  }`}
                >
                  <strong>{slot.spots}</strong>
                  <span>slobodnih mjesta</span>
                </div>

                <a href="#probni-trening" className="schedule-book">
                  +
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}