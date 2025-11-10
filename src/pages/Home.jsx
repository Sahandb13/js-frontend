// MARK: Home-sida

import HeroSection from "../components/HeroSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";

export default function Home() {
  function handleHeroClick() {
    alert("Det funkar inte än!");
  }

  // Byta ut till API så småningom
  const dummyTestimonials = [
    { text: "Fantastisk service och tydlig sida!", author: "Anna, Malmö" }, // utfyllnad
    { text: "Jag gillar hur allt är uppbyggt.", author: "Erik, Göteborg" }, // utfyllnad
    { text: "En bra övning i React-komponenter.", author: "Sara, Stockholm" }, // utfyllnad
  ];

  return (
    <>
      <HeroSection
        title="Välkommen till min sida"
        subtitle="Det här är min inlämningsuppgift i JS Frameworks."
        ctaLabel="Läs mer"
        onCtaClick={handleHeroClick}
      />

      <TestimonialsSection testimonials={dummyTestimonials} /> // skickar in arrayen som props
    </>
  );
}
