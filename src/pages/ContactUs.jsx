// MARK: Contact-sida med formulär
// Har använt väldigt lite co-pilot för denna del. Har skrivit 90% själv för att lära mig hantera formulär i React.

import { useState } from "react";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({}); // sparar felmeddelanden

  async function handleSubmit(event) {
    event.preventDefault(); // stoppar sidan från att ladda om

    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Namn är obligatoriskt.";
    }

    if (!email.trim()) {
      newErrors.email = "E-post är obligatoriskt.";
    } else if (!email.includes("@")) {
      newErrors.email = "E-postadressen måste innehålla @.";
    }

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = "Telefonnummer är obligatoriskt.";
    }

    if (!subject.trim()) {
      newErrors.subject = "Ämne är obligatoriskt.";
    }

    if (!message.trim()) {
      newErrors.message = "Meddelande är obligatoriskt.";
    }

    setErrors(newErrors);
/* MARK : Formulärvalidering ovan */

    // Om inga fel > skicka formuläret
    if (Object.keys(newErrors).length === 0) {
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
              name: name,
              email: email,
              phoneNumber: phoneNumber,
              subject: subject,
              comment: message, // API:et förväntar "comment"
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

        // Efteråt töms fälten
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
  }

  return ( // Med hjälp av ai har jag skapat en enkel kontaktformulär
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Fyll i formuläret nedan. Fält med * är obligatoriska.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label>
            Namn *<br />
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="form-field">
          <label>
            E-post *<br />
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="form-field">
          <label>
            Telefonnummer *<br />
            <input
              type="text"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </label>
          {errors.phoneNumber && (
            <p className="error-text">{errors.phoneNumber}</p>
          )}
        </div>

        <div className="form-field">
          <label>
            Ämne *<br />
            <input
              type="text"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            />
          </label>
          {errors.subject && <p className="error-text">{errors.subject}</p>}
        </div>

        <div className="form-field">
          <label>
            Meddelande *<br />
            <textarea
              rows="4"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </label>
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>

        <button type="submit" className="contact-submit">
          Skicka
        </button>
      </form>
    </div>
  );
}
