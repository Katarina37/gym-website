import { useState } from "react";
import { Arrow, Clock, Dumbbell, Flame, Play, Users } from "./Icons";
import { gym, heroStats } from "../data/content";
import CountUp from "./CountUp";
import { useCountUp } from "../useCountUp";

const avatars = ["MK", "AJ", "DS", "NP", "JM"];

export default function Hero() {
  const [imgOk, setImgOk] = useState(true);
  const donut = useCountUp<HTMLDivElement>(72, 2500);

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-art">
          <div className="ring" />
          {imgOk ? (
            <img src="/hero.png" alt="Član teretane tokom treninga" className="hero-img" onError={() => setImgOk(false)} />
          ) : (
            <Dumbbell className="hero-fallback" />
          )}
        </div>

        <div className="hero-copy">
          <span className="pill">Teretana u {gym.cityIn}</span>
          <h1 className="hero-title">
            <span>Treniraj jače.</span>
            <span className="accent">Ostani jak.</span>
          </h1>
          <p className="hero-lead">
            Moderna teretana sa iskusnim trenerima. Treniraj sam, u grupi ili uz ličnog trenera.
          </p>
          <div className="hero-actions">
            <a href="#probni-trening" className="btn btn-primary">
              Zakaži besplatan trening <Arrow />
            </a>
            <a href="#raspored" className="btn btn-ghost">
              Pogledaj raspored <Play className="icon-sm" />
            </a>
          </div>
          <div className="hero-proof">
            <ul className="avatars" aria-hidden="true">
              {avatars.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <div>
              <strong>{heroStats.members}</strong>
              <span>zadovoljnih članova</span>
            </div>
          </div>
        </div>

        <aside className="hero-stats" aria-label="Teretana u brojkama">
          <div className="card stat">
            <div className="stat-label"><Users className="icon-sm" /> Članova</div>
            <div className="stat-row">
              <div>
                <div className="stat-value">
                  <CountUp value={heroStats.members}/>
                </div>
                <div className="stat-note">+23 ovog mjeseca</div>
              </div>
              <div className="bars" aria-hidden="true">
                <i style={{ height: "30%" }} /><i style={{ height: "50%" }} /><i style={{ height: "72%" }} /><i style={{ height: "100%" }} />
              </div>
            </div>
          </div>

          <div className="card stat">
            <div className="stat-label">Večernji termini</div>
            <div className="stat-row">
              <div ref={donut.ref} className="donut" style={{ ["--p" as string]: donut.value }} role="img" aria-label="72 posto popunjeno">
                <span>{donut.value}%</span>
              </div>
              <div className="stat-text">
                <strong>Popularno!</strong>
                <span>Rezerviši na vrijeme</span>
              </div>
            </div>
          </div>

          <div className="card stat">
            <div className="stat-label"><Flame className="icon-sm" /> Treninga sedmično</div>
            <div className="stat-value">
              <CountUp value={heroStats.classesPerWeek}/>
            </div>
            <div className="stat-note">{heroStats.trainers} trenera na raspolaganju</div>
            <svg className="wave" viewBox="0 0 240 50" preserveAspectRatio="none" aria-hidden="true">
              <path pathLength={1} d="M0 40 C 20 10, 40 10, 60 30 S 100 50, 120 25 S 170 5, 190 28 S 225 40, 240 12" />
            </svg>
          </div>
        </aside>
      </div>
      <p className="sr-only"><Clock /> Radno vrijeme: {gym.hours[0].time}</p>
    </section>
  );
}