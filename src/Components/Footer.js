import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // Importing required icons
import "./footer.css"; // Custom footer styles
import logo from "../Assets/logo12.png"

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Top section with logo */}
      <div className="footer-top">
        <img src={logo} alt="Logo" className="footer-logo" /> {/* Replace with your logo path */}
      </div>

      {/* Social links */}
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>

      {/* Contact information */}
      <div className="footer-info">
        <div className="footer-item">
          <FaEnvelope className="footer-icon" />
          <span>Email: adam@longhorn-restoration.com</span>
        </div>
        <div className="footer-item">
          <FaPhone className="footer-icon" />
          <span>Phone: (817) 235-0569</span>
        </div>
        <div className="footer-item">
          <FaMapMarkerAlt className="footer-icon" />
          <span>Location: Fort Worth, TX</span>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Longhorn Restoration. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
