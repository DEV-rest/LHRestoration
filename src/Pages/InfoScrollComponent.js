import React, { useEffect, useRef } from "react";
import "./InfoScrollComponent.css";
import ProfileImage from "../Assets/background.jpg";
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
          <button className="call-now-btn">Call Now: (855) 393-2961</button>
        </div>
      </div>

      {/* Right Panel */}
      <div className="right-panel" ref={rightPanelRef}>
        <div className="scroll-section">
          <img src={waters} alt="Water Damage" />
          <h2>Water Damage in the Home</h2>
          <p>
            Water damage is a serious problem that can occur in any home, caused by
            water incidents such as floods, burst water tanks or pipes, water and
            sewage backup, or inclement weather.
          </p>
        </div>
        <div className="scroll-section">
          <img src={water} alt="Emergency Water Removal" />
          <h2>Emergency Water Removal</h2>
          <p>
            Water removal might become an emergency situation if water damage is due
            to a burst or leaked water pipe, water main break, or heavy storm. If not
            removed, water can damage structural elements of your property, such as
            carpets, drywall, and even electrical wiring.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoScrollComponent;
