// MARK: Home-sida

import HeroSection from "../components/HeroSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import LatestBlogsSection from "../components/LatestBlogsSection.jsx";
import FAQSection from "../components/FAQSection.jsx";  

export default function Home() {
  function handleHeroClick() {
    alert("Hero-knappen klickades!"); // utfyllnadstext
  }
/* MARK: Testdata för Testimonials */
  // Testdata för Testimonials
  const dummyTestimonials = [
    { text: "Fantastisk service och tydlig sida!", author: "Anna, Malmö" }, // utfyllnadstext
    { text: "Jag gillar hur allt är uppbyggt.", author: "Erik, Göteborg" }, // utfyllnadstext
    { text: "En bra övning i React-komponenter.", author: "Sara, Stockholm" }, // utfyllnadstext
  ];
/* MARK: Testdata för Blogs */
  // Testdata för Blogs
  const dummyBlogs = [
    {
      title: "Bygga återanvändbara komponenter i React",
      date: "2025-11-01",
      excerpt: "Så här delar man upp sin sida i små, smarta komponenter...", // utfyllnadstext
    },
    {
      title: "Varför Vite är så snabbt och smidigt",
      date: "2025-10-28",
      excerpt: "Vi tittar på HMR och hur Vite hjälper vid utveckling.", // utfyllnadstext
    },
    {
      title: "Koppla ett Web API till React",
      date: "2025-10-20",
      excerpt: "Lär dig använda fetch, useEffect och state för att hämta data.",  // utfyllnadstext
    },
  ];

  return (
    <>
      {/* MARK: HeroSection med props */}
      <HeroSection
        title="Välkommen till min sida"
        subtitle="Det här är min inlämningsuppgift i JS Frameworks." // utfyllnadstext
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
