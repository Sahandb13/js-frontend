// MARK: HeroSection
// cta = "Call To Action", används för att visa en knapp
// onCtaClick = körs när knappen trycks
export default function HeroSection({ ctaLabel, onCtaClick }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">
         <p className="hero-welcome">Welcome to StorAid</p>
          <span className="hero-line2">Space Simplified,</span>
          <br />
          <span className="hero-line3">Storage Perfected</span>
        </h1>
        <p className="hero-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit <br>
          </br>amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at <br>
          </br>euismod sem ipsum ac dolor.
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
