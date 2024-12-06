import React from 'react';
import './ScrollToTop.css';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className="scroll-to-top-button" onClick={scrollToTop}>
      💧 {/* Water droplet emoji */}
    </button>
  );
};

export default ScrollToTopButton;
