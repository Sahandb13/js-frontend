// MARK: Contact-sida – layout enligt Figma design

import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function ContactUs() {
  // State för formulärfält
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  // Valideringsfunktion för formuläret
  function validateForm() {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Namn är obligatoriskt.";

    if (!email.trim()) {
      newErrors.email = "E-post är obligatoriskt.";
    } else if (!email.includes("@")) {
      newErrors.email = "E-postadressen måste innehålla @.";
    }

    if (!phoneNumber.trim()) newErrors.phoneNumber = "Telefonnummer är obligatoriskt.";
    if (!subject.trim()) newErrors.subject = "Ämne är obligatoriskt.";
    if (!message.trim()) newErrors.message = "Meddelande är obligatoriskt.";

    return newErrors;
  }

  // Hantera formulärinskick
  /* Denna funktion är framtagen med hjälp av AI för API-integration och felhantering */
  async function handleSubmit(event) {
    event.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      const response = await fetch(
        "https://win25-jsf-assignment.azurewebsites.net/api/Contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "*/*",
          },
          body: JSON.stringify({
            name,
            email,
            phoneNumber,
            subject,
            comment: message,
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text().catch(() => "");
        console.error("API error:", response.status, errorText);
        alert("Något gick fel vid skickandet av formuläret.");
        return;
      }

      alert("Tack! Ditt meddelande har skickats.");

      // Återställ formuläret efter lyckat skick
      setName("");
      setEmail("");
      setPhoneNumber("");
      setSubject("");
      setMessage("");
      setErrors({});
    } catch (error) {
      console.error("Fel vid formulärskick:", error);
      alert("Kunde inte skicka formuläret just nu. Försök igen senare.");
    }
  }

  return (
    <>
      {/* Sidhuvud med mörkgrön bakgrund */}
      <PageHeader title="Contact Us" />

      {/* Huvudinnehåll för kontakt-sidan */}
      <section className="contact-page">
        <div className="contact-layout">

          {/* Vänster kolumn - informationstext */}
          <div className="contact-left">
            <p className="contact-tag">Get in Touch</p>

            <h2 className="contact-title">
              Get Personalized Assistance <br />– Contact Us
            </h2>

            <p className="contact-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

          </div>

          {/* Höger kolumn - kontaktformulär */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label>
                Your Name *<br />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>

            <div className="form-row">
              <div className="form-field half">
                <label>
                  Email *<br />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>

              <div className="form-field half">
                <label>
                  Telephone *<br />
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </label>
                {errors.phoneNumber && (
                  <p className="error-text">{errors.phoneNumber}</p>
                )}
              </div>
            </div>

            <div className="form-field">
              <label>
                Subject *<br />
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </label>
              {errors.subject && <p className="error-text">{errors.subject}</p>}
            </div>

            <div className="form-field">
              <label>
                Comments / Questions *<br />
                <textarea
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
              {errors.message && <p className="error-text">{errors.message}</p>}
            </div>

            <button type="submit" className="contact-submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}