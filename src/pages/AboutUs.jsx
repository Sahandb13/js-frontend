// MARK: AboutUs-sida - Företagspresentation enligt Figma design
import PageHeader from "../components/PageHeader";

export default function AboutUs() {
  return (
    <div className="about-page">
      {/* Sidhuvud med mörkgrön bakgrund */}
      <PageHeader title="About Us" />

      {/* Huvudsektion med bild och information */}
      <section className="about-hero">
        <div className="about-image-wrapper">
          {/* Huvudbild för about-sidan */}
          <img src="/about-hero.jpg" alt="About Us" className="about-image" />

          {/* Statistiksektion - visar företagets framgångar */}
          <div className="about-stats">
            <div className="stat">
              <h3>12+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat">
              <h3>150K+</h3>
              <p>Satisfied Clients</p>
            </div>
            <div className="stat">
              <h3>35+</h3>
              <p>Warehouse</p>
            </div>
          </div>
        </div>

        {/* Högerkolumn - textinnehåll och information */}
        <div className="about-info">
          <p className="about-tag">About Us</p>

          <h2 className="about-title">
            Providing a Safe Space for<br />
            Your Treasured Items
          </h2>

          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris
            ac blandit nisi, non sodales augue. Phasellus eget elit gravida.
          </p>

          {/* Vision och Mission boxar */}
          <div className="about-boxes">
            <div className="about-box">
              <h3>Vision</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </div>

            <div className="about-box mission">
              <h3>Mission</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </div>
          </div>

          {/* Call-to-action och kontaktinformation */}
          <div className="about-actions">
            <button className="discover-btn">Discover More</button>

            <div className="about-contact">
              <div className="contact-icon">📞</div>
              <div>
                <p className="contact-label">More Information</p>
                <p className="contact-number">+46 8 123 122 44</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}