import React, { useState } from "react";
import Testimonials from "./Testimonials"; // Import the new component
import "./Services.css";

const ServicePage = () => {
  const [activeCard, setActiveCard] = useState(null);

  const services = [
    {
      icon: '💧',
      title: 'Flood Restoration',
      frontText: "Flood Recovery Experts: Transforming Chaos into Calm",
      backText: 'Longhorn Restoration offers professional flood restoration services for residential and commercial properties, whether big or small.Equipped with state-of-the-art tools and years of experience, we can extract water fast, dry all affected areas, and return your space to its best condition. Trust us to handle restoration needs with care and professionalism.',
    },
    {
      icon: '🚿',
      title: 'Water Extraction',
      frontText: 'Efficient water removal tailored for any property size.',
      backText: 'Prevent long-term damage and health hazards. Our team guarantees swift and complete restoration, using advanced equipment to remove every trace of moisture. We prioritize your safety and property value, ensuring a seamless recovery process with minimal disruption.',
    },
    {
      icon: '🌳',
      title: 'Wood Drying',
      frontText: 'Bring your wood floors back to life after water damage.',
      backText: 'Wood floors with excessive moisture often begin to cup, which many believe is unrepairable. Our expert team can reverse the cupping process and restore your floors without the need for replacement. We use specialized techniques to ensure precise, high-quality results that preserve your home’s value.'
      
    },
    {
      icon: '💨',
      title: 'Drying and Dehumidifying',
      frontText: 'Effective moisture removal for a safe, dry environment.',
      backText: 'Combat mold growth and prevent structural damage with our advanced dehumidifying solutions. We ensure a thorough drying process, maintaining a healthy space and protecting your property from long-term damage.'
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
