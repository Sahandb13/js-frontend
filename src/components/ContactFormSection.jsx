// Enkel kontaktsektion – du kan klippa ut allt formulärinnehåll från ContactUs hit

export default function ContactFormSection({
  name,
  email,
  phoneNumber,
  subject,
  message,
  errors,
  onChange,
  onSubmit,
}) {
  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-field">
        <label>
          Namn *<br />
          <input
            type="text"
            value={name}
            onChange={(e) => onChange("name", e.target.value)}
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
            onChange={(e) => onChange("email", e.target.value)}
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
            onChange={(e) => onChange("phoneNumber", e.target.value)}
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
            onChange={(e) => onChange("subject", e.target.value)}
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
            onChange={(e) => onChange("message", e.target.value)}
          />
        </label>
        {errors.message && <p className="error-text">{errors.message}</p>}
      </div>

      <button type="submit" className="contact-submit">
        Skicka
      </button>
    </form>
  );
}
