// src/components/FAQSection.jsx
// MARK: FAQSection - visar frågor och svar i två kolumner (Figma-layout)

import { useState } from "react";

export default function FAQSection({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0); // första öppen

  function handleToggle(index) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="faq">
      <div className="faq-inner">
        {/* Vänster: rubriker och intro-text */}
        <div className="faq-left">
          <p className="faq-tag">FAQs</p>
          <h2 className="faq-title">Frequently Ask Questions</h2>
          <p className="faq-intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Höger: själva accordions */}
        <div className="faq-right">
          <div className="faq-list">
            {faqs.map((item, index) => (
              <article
                key={item.id ?? index}
                className={`faq-item ${openIndex === index ? "open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => handleToggle(index)}
                >
                  <span>{item.title}</span>
                  <span className="faq-icon">
                    {openIndex === index ? "▾" : "▸"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{item.description}</p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
