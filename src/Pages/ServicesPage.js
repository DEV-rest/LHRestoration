import React from "react";
import "./Services.css"; // Custom styles

const ServicesPage = () => {
  const services = [
    { title: "Flood Restoration", description: "Longhorn Restoration And Disaster Recovery Offers Professional Flood Restoration Services In Residential And Commercial Property. We respond immediately to minimize the effect of floods, get your space back to being safe, clean and livable. Equipped with the latest technology and a clear focus on minimising your down-time; we will dehydrate, dry, and contain any excess moisture, allowing you to rest easy through difficult periods.", icon: "💧" },
    { title: "Water Extraction", description: "We provide professional water extraction services to effectively remove water from any size flooded room, whether in your home or business. Our skilled team is available for emergency water cleanup, ensuring a rapid response to minimize downtime and reduce the risk of mold and structural damage. Using powerful equipment, we restore your space quickly and thoroughly, so you can return to normal as soon as possible.", icon: "🚿" },
    { title: "Wood Drying", description: "At Longhorn Restoration, we understand the challenges posed by moisture-damaged wood floors. Our specialized wood drying services can reverse the cupping process caused by excessive moisture, restoring your floors without the need for replacement. With advanced techniques and a focus on precision, we repair and preserve your wood floors, saving you time, money, and stress. Let us help you protect the beauty and integrity of your home or business.", icon: "🌳" },
  ];

  const testimonials = [
    { name: "Courtney Matzkanin", feedback: "Best place in Ft Worth! Reliable, fast, clean and friendly. Price was very affordable. I highly recommend them", image: "image1.jpg" },
    { name: "Leonora Spong", feedback: "We are in New Bern, NC which was devastated by Hurricane Florence. We chose Longhorn Restoration to handle the remediation on our and our neighbors flooded garages. As soon as we met Adam we had a sense of relief due to his competency and confidence he could alleviate our growing mold problem. His estimate was much more reasonable than that of another contractor who we felt was trying to take advantage of our situation. He explained the steps that he would take and the length of time involved which we never got from the other contractor. Over the length of time it took to resolve our problem we feel we made a friend in Texas! We are very pleased with his professionalism and work ethic and would gladly recommend his services. During this horrendous event it can be overwhelming and it is a great relief to find a company as honest and capable as Longhorn Restoration.", image: "image2.jpg" },
    { name: "Chandra Buck Manzke", feedback: "I highly recommend Longhorn Restoration. They saved my beautiful gray and cream rug after our dog got very ill. They picked the rug up at our house the day I called, had it back in less than a week and it was very affordable. On top of that, Adam was very friendly. Thank you for the outstanding job!", image: "image3.jpg" },
  ];

  return (
    <div className="services-container">
      <section className="our-services">
        <h2>Our Services</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <h2>What Customers Say About Our Services</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
