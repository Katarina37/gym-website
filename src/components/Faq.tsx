import { faqs } from "../data/content";
import { Plus } from "./Icons";

export default function Faq() {
  return (
    <section className="faq-section" id="faq">
      <div className="container faq-layout">
        <div className="faq-intro">
          <span className="pill">FAQ</span>

          <h2 className="h2">
            Imaš pitanje?
            <span className="heading-accent"> Imamo odgovor.</span>
          </h2>

          <p>
            Ako nešto još nije jasno, slobodno nas kontaktiraj. Tu smo da ti
            olakšamo prvi korak.
          </p>

          <a href="#probni-trening" className="btn btn-primary">
            Kontaktiraj nas
          </a>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details className="faq-modern" key={faq.q}>
              <summary>
                <span>
                  <small>0{index + 1}</small>
                  {faq.q}
                </span>

                <Plus />
              </summary>

              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}