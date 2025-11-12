// MARK: Contact-sida med formulär (delvis AI-stöd)

import { useState } from "react"; // Skapar lådor för data

export default function ContactUs() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const [errors, setErrors] = useState({}); // sparar felmeddelanden

  function handleSubmit(event) {
    event.preventDefault(); // stoppar sidan från att ladda om

    const newErrors = {};

    // Enkel validering av fält med AI-hjälp
    if (!name.trim()) {
      newErrors.name = "Namn är obligatoriskt.";
    }
      // ifall man inte skrivit nåt i fältet
    if (!email.trim()) {
      newErrors.email = "E-post är obligatoriskt.";
    } else if (!email.includes("@")) {
      newErrors.email = "E-postadressen måste innehålla @.";
    }

    if (!message.trim()) {
      newErrors.message = "Meddelande är obligatoriskt.";
    }

    setErrors(newErrors);

    // Om det INTE finns några fel så skicka (just nu bara logga)
    if (Object.keys(newErrors).length === 0) {
      console.log("Formuläret är giltigt, skicka till API senare:", {
        name,
        email,
        message,
      });

      alert("Formuläret skickades (just nu bara test).");

      // Töm fälten efter "skickat"
      setName("");
      setEmail("");
      setMessage("");
    }
  }

  return (
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
