import React from 'react';
import VanModel from '../Components/VanModel'; // Import the 3D model
import '../Styles/homepage.css';
import usaa from '../Assets/ins_logos/usaa.png';
import state from '../Assets/ins_logos/statefarm.png';
import Progressive from '../Assets/ins_logos/Progressive.png';
import allstate from '../Assets/ins_logos/allstate.png';
import geico from '../Assets/ins_logos/geico.png';
import metlife from '../Assets/ins_logos/metlife.png';
import InfoScrollComponent from './InfoScrollComponent';





const HomePage = () => {
  return (
    
    <div className="homepage-container">
      <br />  <br />  
      {/* Info Box and Model */}
      <div className="info-model-container">
        <div className="info-box">
        
          <h1>"Drying Out DFW, Restoring Fort Worth – Water Damage Solutions You Can Trust!"</h1>
          <p>
            We aim to revitalize homes and businesses by restoring water-damaged areas, breathing new life into wood surfaces, and ensuring the structural integrity of every project.
          </p>
          <button>Learn More</button>
        </div>

        {/* 3D Model */}
        <div className="model-container">
          <VanModel scale={2.5} />
        </div>
      </div>
         < br />
      {/* Insurance Section */}
      <div className="insurance-section">
        <h3>Longhorn Restoration works directly with your Insurance company</h3>
        <div className="insurance-logos">
          <img src={usaa} alt="USAA" />
          <img src={state} alt="State Farm" />
          <img src={Progressive} alt="Progressive" />
          <img src={allstate} alt="Allstate" />
          <img src={geico} alt="Nationwide" />
          <img src={metlife} alt="MetLife" />
        </div>

      </div>

      <div> <InfoScrollComponent /></div>

      

    </div>
      
  );
};

export default HomePage;
