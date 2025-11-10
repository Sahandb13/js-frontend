// MARK: Home-sida

import HeroSection from "../components/HeroSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import LatestBlogsSection from "../components/LatestBlogsSection.jsx";

export default function Home() {
  function handleHeroClick() {
    alert("Hero-knappen klickades!");
  }
/* MARK: Testdata för Testimonials */
  // Testdata för Testimonials
  const dummyTestimonials = [
    { text: "Fantastisk service och tydlig sida!", author: "Anna, Malmö" },
    { text: "Jag gillar hur allt är uppbyggt.", author: "Erik, Göteborg" },
    { text: "En bra övning i React-komponenter.", author: "Sara, Stockholm" },
  ];
/* MARK: Testdata för Blogs */
  // Testdata för Blogs
  const dummyBlogs = [
    {
      title: "Bygga återanvändbara komponenter i React",
      date: "2025-11-01",
      excerpt: "Så här delar man upp sin sida i små, smarta komponenter...",
    },
    {
      title: "Varför Vite är så snabbt och smidigt",
      date: "2025-10-28",
      excerpt: "Vi tittar på HMR och hur Vite hjälper vid utveckling.",
    },
    {
      title: "Koppla ett Web API till React",
      date: "2025-10-20",
      excerpt: "Lär dig använda fetch, useEffect och state för att hämta data.",
    },
  ];

  return (
    <>
      {/* MARK: HeroSection med props */}
      <HeroSection
        title="Välkommen till min sida"
        subtitle="Det här är min inlämningsuppgift i JS Frameworks."
        ctaLabel="Läs mer"
        onCtaClick={handleHeroClick}
      />

      {/* skickar in testimonials */}
      <TestimonialsSection testimonials={dummyTestimonials} />

      {/* skickar in bloggar */}
      <LatestBlogsSection blogs={dummyBlogs} />
    </>
  );
}
