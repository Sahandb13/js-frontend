// MARK: LogoStrip - rad med kundlogotyper

export default function LogoStrip() {
  return (
    <section className="logo-strip">
      <div className="logo-strip-inner">
        {/* Byt ut src nedan mot dina riktiga bildvägar */}
        <div className="logo-strip-item">
          <img src="/Logo.svg" alt="Partner 1" />
        </div>
        <div className="logo-strip-item">
          <img src="/Logoipsum 1" alt="Partner 2" />
        </div>
        <div className="logo-strip-item">
          <img src="/logos/logo3.png" alt="Partner 3" />
        </div>
        <div className="logo-strip-item">
          <img src="/logos/logo4.png" alt="Partner 4" />
        </div>
        <div className="logo-strip-item">
          <img src="/logos/logo5.png" alt="Partner 5" />
        </div>
        <div className="logo-strip-item">
          <img src="/logos/logo6.png" alt="Partner 6" />
        </div>
      </div>
    </section>
  );
}
