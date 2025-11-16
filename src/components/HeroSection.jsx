// MARK: HeroSection – startsidans hero med text, CTA och bild

export default function HeroSection({ ctaLabel, onCtaClick }) {
  return (
    <section className="hero">
      <div className="hero-inner">

        {/* MARK: Vänster kolumn – huvudtext och CTA */}
        <div className="hero-left">
          <p className="hero-welcome">Welcome to StorAid</p>

          <h1 className="hero-title">
            <span className="hero-line1">Space Simplified,</span><br />
            <span className="hero-line2">Storage Perfected</span>
          </h1>

          <p className="hero-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem
            magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis,
            libero at iaculis luctus.
          </p>

          {ctaLabel && (
            <button className="hero-button" onClick={onCtaClick}>
              {ctaLabel}
            </button>
          )}
        </div>

        {/* MARK: Höger kolumn – hero-bild */}
        <div className="hero-right">
          <img  
            src="/Rectangle2.svg"
            alt="Storage Illustration"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
}
