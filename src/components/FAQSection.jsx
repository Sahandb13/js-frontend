// MARK: FAQSection - visar frågor och svar

import { useState } from "react";

export default function FAQSection({ faqs = [] }) {

  // Vilken fråga är öppen? (null = ingen öppen)
  const [openIndex, setOpenIndex] = useState(null);

  function handleToggle(index) {
    // Om man klickar på samma fråga igen så stängs det
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <section className="faq">
      <h2>Vanliga frågor (FAQ)</h2>

      <div className="faq-list">
        {faqs.map((item, index) => (
          <article key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => handleToggle(index)}
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
