import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa"; // Importing required icons
import "./footer.css"; // Custom footer styles
import logo from "../Assets/logo12.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Top section with navigation links */}
      <div className="footer-top">
        <img src={logo} alt="Logo" className="footer-logo" /> {/* Replace with your logo path */}
      </div>

      {/* Social links */}
      <div className="footer-social">
        <a href="https://www.facebook.com/LHRestoration" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/longhornrestoration/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>

      {/* Contact information */}
      <div className="footer-info">
        <div className="footer-item">
          <a href="mailto:adam@longhorn-restoration.com" className="footer-link">
            <FaEnvelope className="footer-icon" />
            <span>Email: adam@longhorn-restoration.com</span>
          </a>
        </div>
        <div className="footer-item">
          <a href="tel:+18172350569" className="footer-link">
            <FaPhone className="footer-icon" />
            <span>Phone: (817) 235-0569</span>
          </a>
        </div>
        <div className="footer-item">
          <a
            href="https://www.google.com/maps/place/Fort+Worth,+TX"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaMapMarkerAlt className="footer-icon" />
            <span>Location: Fort Worth, TX</span>
          </a>
        </div>
      </div>

      {/* Navigation links */}
      <div className="footer-navigation">
        <a href="/about-3" target="_blank" rel="noopener noreferrer">About Us</a>
        <span>|</span>
        <a href="/our-work" target="_blank" rel="noopener noreferrer">Service Area</a>
        <span>|</span>
        <a href="/members" target="_blank" rel="noopener noreferrer">Contact Us</a>
        <span>|</span>
        <a href="/agents-inspection-form">Agents Inspection Form</a>
        <span>|</span>
        <a href="/privacy-policy">Privacy Policy</a>
        <span>|</span>
        <a href="/sitemap">Sitemap</a>
      </div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Longhorn Restoration. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
