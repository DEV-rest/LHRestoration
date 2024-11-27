import React from "react";
import "./Services.css"; // Custom styles

const ServicePage = () => {
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

  const testimonials = [
    {
      image: 'https://via.placeholder.com/80', // Replace with actual image URLs
      name: 'John Doe',
      stars: '⭐⭐⭐⭐⭐', // Use actual star characters or icons
      feedback: 'Excellent service! My property was restored in no time.',
    },
    {
      image: 'https://via.placeholder.com/80',
      name: 'Jane Smith',
      stars: '⭐⭐⭐⭐',
      feedback: 'Very professional and thorough. Highly recommend.',
    },
    {
      image: 'https://via.placeholder.com/80',
      name: 'Sam Brown',
      stars: '⭐⭐⭐⭐⭐',
      feedback: 'Amazing results and great customer support.',
    },
    {
      image: 'https://via.placeholder.com/80',
      name: 'Emily White',
      stars: '⭐⭐⭐⭐',
      feedback: 'Quick response and effective work. I’m very satisfied.',
    },
  ];

  return (
    <div className="page-container">
      <div className="content-wrap">
        {/* Services Section */}
        <div className="services-section">
          <h2 className="section-heading">Our Services</h2>
          <div className="service-container">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-card-inner">
                  {/* Front Side */}
                  <div className="service-card-front">
                    <div className="service-icon">{service.icon}</div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.frontText}</p>
                  </div>
                  {/* Back Side */}
                  <div className="service-card-back">
                    <h3 className="service-back-title">{service.title}</h3>
                    <p className="service-back-text">{service.backText}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
     <div className="testimonials-section">
        <h2 className="section-heading">What Customers Say About Us</h2>
          <div className="testimonial-container">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-card-inner">
                  {/* Front Side */}
                  <div className="testimonial-card-front">
                    <img className="testimonial-image" src={testimonial.image} alt={testimonial.name} />
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <div className="testimonial-stars">{testimonial.stars}</div>
                  </div>
                  {/* Back Side */}
                  <div className="testimonial-card-back">
                    <p className="testimonial-feedback">{testimonial.feedback}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="footer">
        {/* Footer content */}
        <p>© 2024 Longhorn Restoration. All rights reserved.</p>
      </footer>
    </div>   
  );
};

export default ServicePage;
