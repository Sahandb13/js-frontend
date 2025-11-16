// MARK: Home-sida - Huvudkomponent för startsidan
import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import LatestBlogsSection from "../components/LatestBlogsSection.jsx";
import FAQSection from "../components/FAQSection.jsx";
import LogoStrip from "../components/LogoStrip.jsx";

export default function Home() {
  // State för API-data
  const [faqs, setFaqs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [isLoadingTestimonials, setIsLoadingTestimonials] = useState(true);
  const [testimonialsError, setTestimonialsError] = useState(null);
  const [blogsError, setBlogsError] = useState(null);
  const [faqsError, setFaqsError] = useState(null);

  // Hantera klick på hero-knappen
  const handleDiscoverClick = () => {
    console.log("Discover more clicked - scrolling to about section");
    const aboutSection = document.querySelector('.about-hero');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Hämta FAQ-data från API
  const fetchFaqs = async () => {
    try {
      const response = await fetch("https://win25-jsf-assignment.azurewebsites.net/api/faqs");
      if (!response.ok) throw new Error(`FAQ API returned status: ${response.status}`);
      const data = await response.json();
      setFaqs(data);
    } catch (error) {
      setFaqsError("Sorry, we couldn't load FAQs right now.");
    }
  };

  // Hämta blogginlägg från API
  const fetchBlogs = async () => {
    try {
      const response = await fetch("https://win25-jsf-assignment.azurewebsites.net/api/blogs");
      if (!response.ok) throw new Error(`Blog API returned status: ${response.status}`);
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      setBlogsError("Sorry, we couldn't load latest blog posts.");
    }
  };

  // Hämta kundomdömen från API
  /* Denna fetch-funktion är framtagen med hjälp av AI för att hantera loading states */
  const fetchTestimonials = async () => {
    setIsLoadingTestimonials(true);
    setTestimonialsError(null);

    try {
      const response = await fetch("https://win25-jsf-assignment.azurewebsites.net/api/testimonials");
      if (!response.ok) throw new Error(`Testimonials API returned status: ${response.status}`);
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      setTestimonialsError("Sorry, we couldn't load testimonials right now.");
    } finally {
      setIsLoadingTestimonials(false);
    }
  };

  // Ladda all data när komponenten mountas
  useEffect(() => {
    fetchTestimonials();
    fetchBlogs();
    fetchFaqs();
  }, []);

  return (
    <div className="home-page">
      
      {/* Hero-sektion - huvudbanner */}
      <HeroSection 
        ctaLabel="Discover More" 
        onCtaClick={handleDiscoverClick} 
      />

      {/* Om oss-sektion - företagspresentation */}
      <section className="about-hero">
        <div className="about-image-section">
          <div className="about-image-placeholder">
            <img src="/about-hero.jpg" alt="About Us" className="about-image" />
          </div>

          <div className="about-stats">
            <div className="stat">
              <h3>12+</h3>
              <p>Years Of Experience</p>
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

        <div className="about-text-content">
          <p className="about-tag">About Us</p>

          <h2 className="about-title">
            Providing a Safe Space for <br />
            Your Treasured Items
          </h2>

          <div className="about-boxes">
            <div className="about-box">
              <h3>Vision</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</p>
            </div>

            <div className="about-box mission">
              <h3>Our Mission</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</p>
            </div>
          </div>

          <div className="about-actions">
            <button className="discover-btn" onClick={handleDiscoverClick}>
              Discover More
            </button>

            <div className="about-contact">
              <div className="contact-icon">📞</div>
              <div className="contact-info">
                <p className="contact-label">More Information</p>
                <p className="contact-number">+46 8 123 122 44</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logostrip - varumärken som förtroar oss */}
      <LogoStrip />

      {/* Kundomdömen - visar feedback från kunder */}
      <section className="testimonials-wrapper">
        {isLoadingTestimonials && <p>Loading testimonials...</p>}
        {testimonialsError && (
          <div className="error-state">
            <p>{testimonialsError}</p>
            <button onClick={fetchTestimonials} className="retry-button">Try Again</button>
          </div>
        )}

        {!isLoadingTestimonials && !testimonialsError && (
          <TestimonialsSection testimonials={testimonials} />
        )}
      </section>

      {/* Senaste blogginlägg - nyttigt innehåll */}
      {blogsError ? <p>{blogsError}</p> : <LatestBlogsSection blogs={blogs} />}

      {/* Vanliga frågor - hjälp till användare */}
      {faqsError ? <p>{faqsError}</p> : <FAQSection faqs={faqs} />}
    </div>
  );
}