import React from 'react';
import VanModel from '../Components/VanModel'; // Import the VanModel component
import '../Styles/homepage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Left Section */}
      <div className="info-box">
        <h1>Longhorn Restoration</h1>
        <h2>"Reviving Spaces, Restoring Strength"</h2>
        <p>
        We aim to revitalize homes and businesses by restoring water-damaged areas, breathing new life into wood surfaces, and ensuring the structural integrity of every project. 
        With a commitment to quality and attention to detail, we bring spaces back to their original beauty and strength.
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
