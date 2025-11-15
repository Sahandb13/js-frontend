import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <div className="topbar">
        <span>📞 +46 700 00 00 00</span>
        <span>✉ contact@domain.com</span>
      </div>

      <nav className="navbar">
        <div className="nav-inner">
          <div className="nav-logo">StorAid</div>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>

          <Link to="/contact-us" className="nav-cta">
            Book Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
