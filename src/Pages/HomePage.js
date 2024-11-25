import React from 'react';
import VanModel from '../Components/VanModel'; // Import the VanModel component
import '../Styles/homepage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Left Section */}
      <div className="info-box">
        <h1>Longhorn Restoration</h1>
        <p>
          We provide expert restoration services with a commitment to quality and care.
          Let us bring your projects to life with precision and passion.
        </p>
        <button>Learn More</button>
      </div>

      {/* Right Section */}
      <div className="model-container">
        <VanModel /> 
        
      </div>
    </div>
  );
};

export default HomePage;
