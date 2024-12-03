import React, { useEffect, useState } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    const section = document.querySelector(".testimonials-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const testimonials = [
    {
      image: 'https://via.placeholder.com/80',
      name: 'John Doe',
      stars: '⭐⭐⭐⭐⭐',
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
    <div className={`testimonials-section ${isVisible ? "visible" : ""}`}>
      <h2 className="section-heading">What Customers Say About Us</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div
            className={`testimonial-card ${isVisible ? "animate-card" : ""}`}
            key={index}
            style={{ animationDelay: `${index * 0.2}s` }} // Stagger the animation
          >
            <img className="testimonial-image" src={testimonial.image} alt={testimonial.name} />
            <h4 className="testimonial-name">{testimonial.name}</h4>
            <div className="testimonial-stars">{testimonial.stars}</div>
            <p className="testimonial-feedback">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
