// MARK: FAQSection – visar frågor och svar (accordion)

import { useState } from "react";

export default function FAQSection({ faqs = [] }) {
  // Vilken fråga är öppen? (null = ingen öppen)
  const [openIndex, setOpenIndex] = useState(null);

  function handleToggle(index) {
    // Klick på samma fråga stänger den igen
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section className="faq">
      <h2>Vanliga frågor (FAQ)</h2>

      <div className="faq-list">
        {faqs.map((item, index) => (
          <article key={index} className="faq-item">
            <button
              type="button"
              className="faq-question"
              onClick={() => handleToggle(index)}
              aria-expanded={openIndex === index}
            >
              <span>{item.question}</span>
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
