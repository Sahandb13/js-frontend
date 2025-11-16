// MARK: Home-sida
import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import LatestBlogsSection from "../components/LatestBlogsSection.jsx";
import FAQSection from "../components/FAQSection.jsx";

export default function Home() {
  const [faqs, setFaqs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [isLoadingTestimonials, setIsLoadingTestimonials] = useState(true);
  const [testimonialsError, setTestimonialsError] = useState(null);
  const [blogsError, setBlogsError] = useState(null);
  const [faqsError, setFaqsError] = useState(null);

  // Handle click on hero button
  const handleDiscoverClick = () => {
    console.log("Discover more clicked - scrolling to about section");
    const aboutSection = document.querySelector('.about-hero');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Fetch FAQs from API
  const fetchFaqs = async () => {
    try {
      const response = await fetch(
        "https://win25-jsf-assignment.azurewebsites.net/api/faqs"
      );
      if (!response.ok) {
        throw new Error(`FAQ API returned status: ${response.status}`);
      }
      const data = await response.json();
      setFaqs(data);
    } catch (error) {
      console.error("Could not fetch FAQs:", error);
      setFaqsError("Sorry, we couldn't load FAQs right now.");
    }
  };

  // Fetch blog posts from API
  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        "https://win25-jsf-assignment.azurewebsites.net/api/blogs"
      );
      if (!response.ok) {
        throw new Error(`Blog API returned status: ${response.status}`);
      }
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Could not fetch blog posts:", error);
      setBlogsError("Sorry, we couldn't load latest blog posts.");
    }
  };

  // Fetch testimonials from API
  const fetchTestimonials = async () => {
    setIsLoadingTestimonials(true);
    setTestimonialsError(null);
    
    try {
      const response = await fetch(
        "https://win25-jsf-assignment.azurewebsites.net/api/testimonials"
      );
      
      if (!response.ok) {
        throw new Error(`Testimonials API returned status: ${response.status}`);
      }
      
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.error("Could not fetch testimonials:", error);
      setTestimonialsError("Sorry, we couldn't load testimonials right now.");
    } finally {
      setIsLoadingTestimonials(false);
    }
  };

  useEffect(() => {
    // Load all data when component mounts
    fetchTestimonials();
    fetchBlogs();
    fetchFaqs();
  }, []);

  return (
    <div className="home-page">
      {/* Hero section at the top */}
      <HeroSection 
        ctaLabel="Discover More" 
        onCtaClick={handleDiscoverClick} 
      />

      {/* About Us section - shows company values and statistics */}
      <section className="about-hero">
        {/* LEFT SIDE: image and statistics */}
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

        {/* RIGHT SIDE: text and information */}
        <div className="about-text-content">
          <p className="about-tag">About Us</p>

          <h2 className="about-title">
            Providing a Safe Space for <br />
            Your Treasured Items
          </h2>

          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris
            ac blandit nisi, non sodales augue. Phasellus eget elit gravida.
          </p>

          <div className="about-boxes">
            <div className="about-box">
              <h3>Vision</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.
              </p>
            </div>

            <div className="about-box mission">
              <h3>Our Mission</h3>
              <p>
                Sed ut perspiciatis unde omnis iste 
                natus error sit voluptatem accusan 
                tium doloremque laudantium
              </p>
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

      {/* Testimonials from API */}
      <section className="testimonials-wrapper">
        {isLoadingTestimonials && (
          <div className="loading-state">
            <p>Loading testimonials...</p>
          </div>
        )}

        {testimonialsError && (
          <div className="error-state">
            <p>{testimonialsError}</p>
            <button 
              onClick={fetchTestimonials}
              className="retry-button"
            >
              Try Again
            </button>
          </div>
        )}

        {!isLoadingTestimonials && !testimonialsError && testimonials.length > 0 && (
          <TestimonialsSection testimonials={testimonials} />
        )}

        {!isLoadingTestimonials && !testimonialsError && testimonials.length === 0 && (
          <div className="empty-state">
            <p>No testimonials available at the moment.</p>
          </div>
        )}
      </section>

      {/* Latest blog posts */}
      {blogsError ? (
        <div className="error-state">
          <p>{blogsError}</p>
        </div>
      ) : (
        <LatestBlogsSection blogs={blogs} />
      )}

      {/* Frequently Asked Questions (FAQ) */}
      {faqsError ? (
        <div className="error-state">
          <p>{faqsError}</p>
        </div>
      ) : (
        <FAQSection faqs={faqs} />
      )}
    </div>
  );
}