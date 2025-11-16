import { Link } from "react-router-dom";
import "./Navbar.css";

// MARK: Navbar – visas på alla sidor
export default function Navbar() {
  return (
    <header>
      {/* Övre kontaktbar */}
      <div className="topbar">
        <span>📞 +46 8 123 122 44</span>
        <span>✉ contact@domain.com</span>
      </div>

      {/* Huvudmenyn */}
      <nav className="navbar">
        <div className="nav-inner">

          {/* Logo-bild */}
          <Link to="/" className="nav-logo">
            <img 
              src="/Logo.svg" 
              alt="StorAid Logo" 
              className="logo-image" 
            />
          </Link>

          {/* Navigationslänkar */}
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>

          {/* Call-To-Action knapp */}
          <Link to="/contact-us" className="nav-cta">
            Book Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
