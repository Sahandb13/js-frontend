// MARK: Home-sida

import { useState, useEffect } from "react"; // Används för att hämta kundomdömen från API <3 
import HeroSection from "../components/HeroSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import LatestBlogsSection from "../components/LatestBlogsSection.jsx";
import FAQSection from "../components/FAQSection.jsx";

export default function Home() {
  function handleHeroClick() {
    alert("LURAD DET FUNKAR INTE ÄN!"); // utfyllnadstext
  }
  const [faqs, setFaqs] = useState([]);
  const [blogs, setBlogs] = useState([]); // lista över bloggar
  const [testimonials, setTestimonials] = useState([]);
  const [isLoadingTestimonials, setIsLoadingTestimonials] = useState(true);
  const [testimonialsError, setTestimonialsError] = useState(null);

  async function fetchFaqs() {
    try {
    const response = await fetch(
      "https://win25-jsf-assignment.azurewebsites.net/api/faqs" // kolla exakta endpointen!
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
      // optionally set an error state for blogs
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
      {/* MARK: HeroSection med props */}
      <HeroSection ctaLabel="Discover More" onCtaClick={handleHeroClick} />

      {/* Testimonials från API */}
      {isLoadingTestimonials && <p>Loading testimonials.</p>}

      {testimonialsError && (
        <p className="error-text">
          Error loading testimonials: {testimonialsError}
        </p>
      )}

      {!isLoadingTestimonials && !testimonialsError && (
        <TestimonialsSection testimonials={testimonials} />
      )}

      <LatestBlogsSection blogs={blogs} />

      <FAQSection faqs={faqs} />
    </>
  );
}
