import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/contactUs.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>

      <main style={{ padding: "1rem", minHeight: "70vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
