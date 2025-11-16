// MARK: Home-sida

import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import LatestBlogsSection from "../components/LatestBlogsSection.jsx";
import FAQSection from "../components/FAQSection.jsx";

export default function Home() {
  function handleHeroClick() {
    alert("LURAD DET FUNKAR INTE ÄN!"); // utfyllnadstext
  }

  const [faqs, setFaqs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [isLoadingTestimonials, setIsLoadingTestimonials] = useState(true);
  const [testimonialsError, setTestimonialsError] = useState(null);

  async function fetchFaqs() {
    try {
      const response = await fetch(
        "https://win25-jsf-assignment.azurewebsites.net/api/faqs"
      );
      if (!response.ok) {
        throw new Error("Kunde inte hämta FAQs");
      }
      const data = await response.json();
      setFaqs(data);
    } catch (error) {
      console.error("fetchFaqs:", error);
    }
  }

  async function fetchBlogs() {
    try {
      const response = await fetch(
        "https://win25-jsf-assignment.azurewebsites.net/api/blogs"
      );
      if (!response.ok) {
        throw new Error("Kunde inte hämta blogs");
      }
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("fetchBlogs:", error);
    }
  }

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const response = await fetch(
          "https://win25-jsf-assignment.azurewebsites.net/api/testimonials"
        );
        if (!response.ok) {
          throw new Error("Kunde inte hämta testimonials");
        }
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error(error);
        setTestimonialsError(error.message);
      } finally {
        setIsLoadingTestimonials(false);
      }
    }

    fetchTestimonials();
    fetchBlogs();
    fetchFaqs();
  }, []);

  return (
    <>
      {/* Hero högst upp */}
      <HeroSection ctaLabel="Discover More" onCtaClick={handleHeroClick} />

      {/* ABOUT-BLOCKET – samma stil som på About-sidan / Figma */}
      <section className="about-hero">
        {/* Vänster: stor grå ruta + stats-rad */}
        <div>
          <div className="about-image-placeholder" />

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

        {/* Höger: text, vision/mission, knapp + telefon */}
        <div>
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

      {/* TESTIMONIALS från API */}
      {isLoadingTestimonials && <p>Loading testimonials.</p>}

      {testimonialsError && (
        <p className="error-text">
          Error loading testimonials: {testimonialsError}
        </p>
      )}

      {!isLoadingTestimonials && !testimonialsError && (
        <TestimonialsSection testimonials={testimonials} />
      )}

      {/* BLOGS + FAQ */}
      <LatestBlogsSection blogs={blogs} />
      <FAQSection faqs={faqs} />
    </>
  );
}
