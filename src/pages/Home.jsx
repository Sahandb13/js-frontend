// MARK: Home-sida

import HeroSection from "../components/HeroSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import LatestBlogsSection from "../components/LatestBlogsSection.jsx";
import FAQSection from "../components/FAQSection.jsx";

export default function Home() {
  function handleHeroClick() {
    alert("LURAD DET FUNKAR INTE ÄN!"); // utfyllnadstext
  }
/* MARK: Testdata för Testimonials */
  // Testdata för Testimonials
  const dummyTestimonials = [
    { text: "N/A", author: "Sahand, Malmö" }, // utfyllnadstext
    { text: "N/A.", author: "Sahand, Göteborg" }, // utfyllnadstext
    { text: "N/A.", author: "Sahand, Stockholm" }, // utfyllnadstext
  ];
/* MARK: Testdata för Blogs */
  // Testdata för Blogs
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
      excerpt: "N/A.",  // utfyllnadstext
    },
  ];

  return (
    <>
      {/* MARK: HeroSection med props */}
      <HeroSection
        ctaLabel="Discover More"
        onCtaClick={handleHeroClick}
      />

      {/* skickar in testimonials */}
      <TestimonialsSection testimonials={dummyTestimonials} />

      {/* skickar in bloggar */}
      <LatestBlogsSection blogs={dummyBlogs} />
    </>
  );
}
