import React, { useEffect, useRef } from "react";
import "./InfoScrollComponent.css";
import ProfileImage from "../Assets/img0.png";
import flooddamage from "../Assets/flood-damage.jpeg";
import water from "../Assets/waterremoval.jpeg";
import waters from "../Assets/wooddamge.jpeg";

const InfoScrollComponent = () => {
  const rightPanelRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = (e) => {
      const rightPanel = rightPanelRef.current;
  
      // Check if the user is scrolling downward
      if (e.deltaY > 0) {
        // Prevent container scrolling if right panel has content left to scroll
        if (rightPanel.scrollTop + rightPanel.clientHeight < rightPanel.scrollHeight) {
          rightPanel.scrollTop += e.deltaY;
          e.preventDefault();
        }
      }
  
      // Check if the user is scrolling upward
      if (e.deltaY < 0) {
        // Allow container scrolling if right panel is at the top
        if (rightPanel.scrollTop > 0) {
          rightPanel.scrollTop += e.deltaY;
          e.preventDefault();
        }
      }
    };
  
    const container = containerRef.current;
    container.addEventListener("wheel", handleScroll);
  
    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, []);
  

  return (
    <div className="info-scroll-container" ref={containerRef}>
      {/* Left Panel */}
      <div className="left-panel">
        <div className="contact-card">
          <img src={ProfileImage} alt="Support" className="profile-image" />
          <h2>We’re Here to Help</h2>
          <p>
            Our 24-hour operators are ready to take your call and immediately
            dispatch a flood recovery expert to your property.
          </p>
          <a href="tel:+18172350569" className="call-now-btn">
          Call Now: (817) 235-0569
          </a>
        </div>
      </div>

      {/* Right Panel */}
      <div className="right-panel" ref={rightPanelRef}>
        <div className="scroll-section">
          <img src={waters} alt="Water Damage" />
          <h2>Addressing Water Damage in Your Home</h2>
          <p>
          Water damage is a significant issue that can affect any home, resulting from incidents like floods, burst pipes or tanks, water and sewage backups, or severe weather conditions.
          As a dependable partner in restoration, we’re here to support you every step of the way, delivering expert solutions to rebuild not just your home but also your sense of security and peace of mind.With our dedicated team and proven expertise, you can trust us to restore what matters most, ensuring a seamless recovery experience.
          </p>
        </div>
        <div className="scroll-section">
          <img src={water} alt="Emergency Water Removal" />
          <h2>Wood Restoration by Extracting Moisture</h2>
          <p>
          Excess moisture can cause significant damage to wood, leading to issues such as warping, cupping, and reduced structural integrity.
          With our reputation for reliability, we’re here to support you, employing advanced techniques to remove moisture and restore your wood surfaces, ensuring their durability, beauty, and long-lasting quality.
          Our skilled team understands the importance of preserving your home’s character and value, treating each project with precision. Trust us to not only address the immediate damage but also to implement preventative measures that protect your investment for years to come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoScrollComponent;
