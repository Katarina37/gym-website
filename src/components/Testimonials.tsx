import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section className="results-section">
      <div className="container">
        <div className="results-top">
          <span className="pill">REZULTATI</span>

          <h2 className="h2">
            Ne vjeruj nama.
            <span className="heading-accent"> Pogledaj njih.</span>
          </h2>
        </div>

        <div className="results-grid">
          {testimonials.map((testimonial, index) => (
            <article
              className={`result-card ${
                index === 1 ? "result-card-highlight" : ""
              }`}
              key={testimonial.name}
            >
              <div className="result-visual">
                <span className="result-number">0{index + 1}</span>
                <div className="result-quote">“</div>

                {testimonial.photo ? (
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    loading="lazy"
                  />
                ) : (
                  <span className="result-initial">
                    {testimonial.name.charAt(0)}
                  </span>
                )}
              </div>

              <div className="result-body">
                <span className="result-stars" aria-label="Ocjena 5 od 5">
                  ★★★★★
                </span>

                <strong className="result-value">{testimonial.result}</strong>

                <blockquote>{testimonial.quote}</blockquote>

                <footer>
                  <div className="result-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="result-person">
                    <span>{testimonial.name}</span>
                    <small>Član Iron Pulse</small>
                  </div>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}