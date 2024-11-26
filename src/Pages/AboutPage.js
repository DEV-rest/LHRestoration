import React from "react";
import "./about.css"; // Import custom stylesn
import Image1 from "../Assets/image1.jpeg";
import Image2 from "../Assets/image2.jpg";


const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <div className="text-content">
          <h4>Who We Are</h4>
          <h2>Who We Are</h2>
          <p>
          Longhorn Restoration is a family owned and operated business serving the Fort Worth, Texas area for over 25 years. We provide a bonded and insured team as a trusted leader in water and wood restoration, our team are committed to serve you with a professional manner and a happy heart.
           Founded by Fort Worth Native, Adam Abstein, our passion for detail and excellence drives us to restore and protect your home or business with the urgency it deserves.
          </p>
        </div>
        <div className="image-content">
          <img src={Image1} alt="Who We Are" />
        </div>
      </div>

      <div className="about-section reverse">
        <div className="image-content">
          <img src={Image2} alt="Why Us" />
        </div>
        <div className="text-content">
          <h4>Why Us</h4>
          <h2>Why Us</h2>
          <p>
          The Longhorn Restoration team is dedicated to workmanship and client satisfaction. We have more than two decades of experience that you can rely on, and we focus on our clients.
           Our professional staff keeps you apprised of everything going on the whole way through, and gives their all to every job. Under the direction of Adam Abstein — a man whose commitment to service is out of this world — we go the extra mile to make sure every client is 110% satisfied with his service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
