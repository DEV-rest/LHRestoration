// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import logo4 from '../Assets/logo4.png';
import { FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar-container">
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
      <div className="navbar-contents">
        <div className="nav-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/services" className="nav-item">Services</Link>
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
