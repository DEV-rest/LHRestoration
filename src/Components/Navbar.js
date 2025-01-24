import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo12.png";
import logo4 from "../Assets/logo4.png";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [shrink, setShrink] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for the hamburger menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrink(true); // Add shrink class when scrolled down
      } else {
        setShrink(false); // Remove shrink class when scrolled up
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener
    };
  }, []);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <nav className={`navbar-container ${shrink ? "shrink" : ""} ${menuOpen ? "open" : ""}`}>
      <div className="top-bar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <img src={logo4} alt="Second Logo" className="second-logo" />
        </div>
        <div className="emergency-container">
          <span className="emergency-title">Emergency? Call us now 24/7</span>
          <a href="tel:+8172350569" className="emergency-button">
            <FaPhoneAlt className="phone-icon" /> (817) 235-0569
          </a>
        </div>
      </div>

      {/* Hamburger Icon (Mobile Only) */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="navbar-contents">
        <div className="nav-links">
          {/* Home link always visible */}
          <Link to="/" className="nav-item home-item">
            Home
          </Link>
          {/* Hidden links when menu is not open */}
          <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
            <Link to="/our-work" className="nav-item">
              Services
            </Link>
            <Link to="/about-3" className="nav-item">
              About
            </Link>
            <Link to="/members" className="nav-item">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
