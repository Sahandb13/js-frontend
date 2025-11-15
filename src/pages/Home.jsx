import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import TestimonialsSection from "../components/TestimonialsSection";
import LatestBlogsSection from "../components/LatestBlogsSection";
import FAQSection from "../components/FAQSection";

export default function Home() {
  const [faqs, setFaqs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [isLoadingTestimonials, setIsLoadingTestimonials] = useState(true);
  const [testimonialsError, setTestimonialsError] = useState(null);

  function handleHeroClick() {
    alert("LURAD DET FUNKAR INTE ÄN!");
  }

  async function fetchFaqs() {
    try {
      const res = await fetch(
        "https://win25-jsf-assignment.azurewebsites.net/api/faqs"
      );
      if (!res.ok) throw new Error("Kunde inte hämta FAQs");

      const data = await res.json();
      setFaqs(data);
    } catch (err) {
      console.error("fetchFaqs:", err);
    }
  }

  async function fetchBlogs() {
    try {
      const res = await fetch(
        "https://win25-jsf-assignment.azurewebsites.net/api/blogs"
      );
      if (!res.ok) throw new Error("Kunde inte hämta bloggar");

      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error("fetchBlogs:", err);
    }
  }

  async function fetchTestimonials() {
    try {
      const res = await fetch(
        "https://win25-jsf-assignment.azurewebsites.net/api/testimonials"
      );
      if (!res.ok) throw new Error("Kunde inte hämta testimonials");

      const data = await res.json();
      setTestimonials(data);
    } catch (err) {
      setTestimonialsError(err.message);
    } finally {
      setIsLoadingTestimonials(false);
    }
  }

  useEffect(() => {
    fetchTestimonials();
    fetchBlogs();
    fetchFaqs();
  }, []);

  return (
    <>
      <HeroSection ctaLabel="Discover More" onCtaClick={handleHeroClick} />

      {isLoadingTestimonials && <p>Loading testimonials...</p>}

      {testimonialsError && (
        <p className="error-text">Error: {testimonialsError}</p>
      )}

      {!isLoadingTestimonials && !testimonialsError && (
        <TestimonialsSection testimonials={testimonials} />
      )}

      <LatestBlogsSection blogs={blogs} />
      <FAQSection faqs={faqs} />
    </>
  );
}
