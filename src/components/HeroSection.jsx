// MARK: HeroSection
// cta = "Call To Action", används för att visa en knapp
// onCtaClick = körs när knappen trycks
export default function HeroSection({ ctaLabel, onCtaClick }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">
          <span className="hero-line1">Storage Perfected</span>
          <br />
          <span className="hero-line2">Space Simplified</span>
        </h1>

        {ctaLabel && (
          <button className="hero-button" onClick={onCtaClick}>
            {ctaLabel}
          </button>
        )}
      </div>
    </section>
  );
}
