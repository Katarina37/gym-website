import { Bolt } from "./Icons";
import { gym } from "../data/content";

export default function Logo() {
  return (
    <a href="#top" className="logo" aria-label={`${gym.name} – početna`}>
      <Bolt className="logo-icon" />
      <span>{gym.name}</span>
    </a>
  );
}
