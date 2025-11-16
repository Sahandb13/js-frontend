import { Link } from "react-router-dom";
import "./Navbar.css";

// MARK: Navbar – visas på alla sidor
export default function Navbar() {
  return (
    <header>
      {/* Övre kontaktbar - denna sektion är framtagen med hjälp av AI för kontaktinformation layout */}
      <div className="topbar">
        <span>📞 +46 8 123 122 44</span>
        <span>✉ contact@domain.com</span>
      </div>

      {/* Huvudmenyn med navigation */}
      <nav className="navbar">
        <div className="nav-inner">

          {/* Logo med länk till startsidan */}
          <Link to="/" className="nav-logo">
            <img 
              src="/Logo.svg" 
              alt="StorAid Logo" 
              className="logo-image" 
            />
          </Link>

          {/* Navigationslänkar till sidorna */}
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>

          {/* CTA-knapp för att boka */}
          <Link to="/contact-us" className="nav-cta">
            Book Now
          </Link>
        </div>
      </nav>
    </header>
  );
}