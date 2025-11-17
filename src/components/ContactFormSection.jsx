// MARK: Kontaktformulär – återanvändbar sektion för kontaktuppgifter
// Jag satte upp strukturen och valideringen själv. 
// props-hantering tog jag lite hjälp av AI som bollplank, men har själv finjusterat
// fälten och logiken så att den passar resten av projektet.

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
      {/* Namnfält */}
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

      {/* E-postfält */}
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

      {/* Telefonnummer */}
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

      {/* Ämne */}
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

      {/* Meddelande */}
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

      {/* Submit-knapp */}
      <button type="submit" className="contact-submit">
        Skicka
      </button>
    </form>
  );
}
