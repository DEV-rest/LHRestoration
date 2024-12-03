import React, { useState } from "react";
import Testimonials from "./Testimonials"; // Import the new component
import "./Services.css";

const ServicePage = () => {
  const [activeCard, setActiveCard] = useState(null);

  const services = [
    {
      icon: '💧',
      title: 'Flood Restoration',
      frontText: 'Professional flood recovery services. We help restore your property after flooding.',
      backText: 'Minimize downtime with advanced technology. Dehydrate, dry, and contain moisture effectively!',
    },
    {
      icon: '🚿',
      title: 'Water Extraction',
      frontText: 'Rapid water removal services for homes and businesses.',
      backText: 'Reduce mold and structural risks. We ensure a thorough and quick cleanup!',
    },
    {
      icon: '🌳',
      title: 'Wood Drying',
      frontText: 'Restore your wood floors from moisture damage.',
      backText: 'Reverse cupping and preserve your wood floors with precision techniques!',
    },
    {
      icon: '💨',
      title: 'Drying and Dehumidifying',
      frontText: 'Effective moisture removal for a safe, dry environment.',
      backText: 'Prevent mold and structural damage with advanced dehumidifying solutions!',
    },
  ];

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="services-page">
      <h2 className="section-heading">Our Services</h2>
      <div className="service-container">
        {services.map((service, index) => (
          <div
            className={`service-card ${activeCard === index ? "active" : ""}`}
            key={index}
            onClick={() => handleCardClick(index)}
          >
            <div className="service-card-inner">
              <div className="service-card-front">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.frontText}</p>
              </div>
              <div className="service-card-back">
                <h3 className="service-back-title">{service.title}</h3>
                <p className="service-back-text">{service.backText}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
       <br /> <br />

      {/* Add Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default ServicePage;
