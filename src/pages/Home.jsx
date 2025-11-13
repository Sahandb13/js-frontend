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

  const [Blogs, setBlogs] = useState(([])); // utfyllnadstext
  const [testimonials, setTestimonials] = useState([]);
  const [isLoadingTestimonials, setIsLoadingTestimonials] = useState(true);
  const [testimonialsError, setTestimonialsError] = useState(null);


  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const response = await fetch(
          "https://win25-jsf-assignment.azurewebsites.net/api/testimonials"
        );
        fetchblogs();
    
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
  }, []);

  
  const dummyBlogs = [
    {
      title: "Bygga återanvändbara komponenter i React",
      date: "2025-11-01",
      excerpt: "N/A...", // utfyllnadstext
    },
    {
      title: "Varför Vite är så snabbt och smidigt",
      date: "2025-10-28",
      excerpt: "N/A.", // utfyllnadstext
    },
    {
      title: "Koppla ett Web API till React",
      date: "2025-10-20",
      excerpt: "N/A.", // utfyllnadstext
    },
  ];

  return (
    <>
      {/* MARK: HeroSection med props */}
      <HeroSection ctaLabel="Discover More" onCtaClick={handleHeroClick} />

      {/* Testimonials från API */}
      {isLoadingTestimonials && <p>-------.</p>}

      {testimonialsError && (
        <p className="error-text">
          ------------
        </p>
      )}

      {!isLoadingTestimonials && !testimonialsError && (
        <TestimonialsSection testimonials={testimonials} />
      )}

  
      <LatestBlogsSection blogs={Blogs} />

    
      <FAQSection />
    </>
  );
}
