import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      {/* TOP BAR MED TELEFON & EMAIL */}
      <div className="topbar">
        <span> 📞+46 735 89 20 39</span>
        <span>✉ contact@domain.com</span>
      </div>

      {/* HUVUD-NAVIGATION */}
      <nav className="navbar">
        <div className="nav-inner">
          <div className="nav-logo">StorAid</div>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>

          <button className="nav-cta">Book Now</button>
        </div>
      </nav>
    </header>
  );
}
