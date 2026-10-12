import { features } from "../data/content";
import { Icon } from "./Icons";

export default function Features() {
  return (
    <section className="section-tight">
      <div className="container">
        <ul className="features card">
          {features.map((f) => (
            <li key={f.title} className="feature">
              <Icon name={f.icon} className="feature-icon" />
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
