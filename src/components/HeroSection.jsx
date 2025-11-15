// MARK: HeroSection
// Denna komponent (layout + struktur) är delvis framtagen med AI-stöd (ChatGPT).

export default function HeroSection({ ctaLabel, onCtaClick }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <p className="hero-welcome">Welcome to StorAid</p>

        <h1 className="hero-title">
          <span className="hero-line1">Space Simplified,</span>
          <br />
          <span className="hero-line2">Storage Perfected</span>
        </h1>

        <p className="hero-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem
          magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis,
          libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem
          ipsum ac dolor.
        </p>

        {ctaLabel && (
          <button className="hero-button" onClick={onCtaClick}>
            {ctaLabel}
          </button>
        )}
      </div>
    </section>
  );
}
