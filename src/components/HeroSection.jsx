// MARK: HeroSection
// cta = "Call To Action", används för att visa en knapp
// onCtaClick = körs när knappen trycks

export default function HeroSection({ title, subtitle, ctaLabel, onCtaClick }) { 
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        {ctaLabel && (
          <button className="hero-button" onClick={onCtaClick}>
            {ctaLabel}
          </button>
        )}
      </div>
    </section>
  );
}
