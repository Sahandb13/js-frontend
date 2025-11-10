// MARK: Navbar-komponent
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#f0f0f0",
        padding: "1rem",
        display: "flex",
        gap: "1rem",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about-us">About Us</Link>
      <Link to="/contact-us">Contact Us</Link>
    </nav>
  );
}
