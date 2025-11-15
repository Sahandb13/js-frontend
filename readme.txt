StorAid – Inlämningsuppgift (React + Web API). Här siktar jag på G

Detta är min inlämningsuppgift där jag byggt upp en webbplats i React (Vite) utifrån en given Figma-design. Fokus i uppgiften är att använda återanvändbara komponenter och hämta data från ett Web API.


React (Vite)

React Router

Fetch API

CSS (egen styling)

Web API tillhandahållet i kursen

 Struktur och komponenter

Sidan är uppdelad i flera återanvändbara komponenter.
Några exempel:

Navbar – används på alla sidor

Footer – används på alla sidor

HeroSection

TestimonialsSection (hämtar data från API)

LatestBlogsSection (hämtar data från API)

FAQSection (hämtar data från API + accordion)

Dessa komponenter används på olika sidor och kan återanvändas utan att skriva om samma kod igen.

 Sidor

Home – visar hero, testimonials, bloggar och FAQ

About Us – statisk informationssida

Contact Us – formulär med validering som skickar data till API:et med POST

 API-integration

Följande data hämtas från API:t:

Testimonials

Bloggar

FAQs

Contact-formuläret skickar data via:

POST /api/contact


med en JSON-body som matchar API:ets modell.

Validering

Alla fält markerade med * valideras innan formuläret skickas.
Vid fel får användaren ett enkelt felmeddelande.

 Kör projektet lokalt

Klona repositoriet

Installera paket

npm install


Starta dev-server

npm run dev
