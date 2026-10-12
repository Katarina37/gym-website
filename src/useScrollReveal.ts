import { useEffect } from "react";

const groups = [
  ".programs-heading",
  ".schedule-header",
  ".trainers-header",
  ".pricing-header",
  ".gallery-header",
  ".faq-intro",
  ".features .feature",
  ".program-feature",
  ".schedule-wrapper",
  ".trainer-card",
  ".pricing-switch",
  ".pricing-card",
  ".pricing-perks div",
  ".gallery-tile",
  ".gallery-stats",
  ".faq-modern",
  ".join-box",
  ".footer-cta-band",
  ".footer-brand",
  ".footer-column",
];

export function useScrollReveal() {
  useEffect(() => {
    const els: HTMLElement[] = [];

    groups.forEach((selector) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        // kašnjenje prema poziciji u redu (max 5 koraka)
        const siblings = el.parentElement
          ? Array.from(el.parentElement.children)
          : [];
        const index = Math.min(siblings.indexOf(el), 5);

        el.style.setProperty("--d", `${index * 90}ms`);
        el.classList.add("reveal");
        els.push(el);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}