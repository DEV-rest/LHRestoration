import React, { useEffect } from "react";
import "./Brands.css";

const Brands = ({ brands }) => {
  const divideIntoRows = (items, itemsPerRow = 2) => {
    const rows = [];
    for (let i = 0; i < items.length; i += itemsPerRow) {
      rows.push(items.slice(i, i + itemsPerRow));
    }
    return rows;
  };

  const rows = divideIntoRows(brands, Math.ceil(brands.length / 2));

  useEffect(() => {
    const handleScroll = () => {
      const heading = document.querySelector(".brands-heading");
      const brandsContainer = document.querySelector(".brands-section");

      if (!heading || !brandsContainer) return;

      const words = heading.querySelectorAll("span.word");
      const brandsContainerRect = brandsContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the brands container is in view
      if (brandsContainerRect.top + brandsContainerRect.height > 0 && brandsContainerRect.bottom < windowHeight) {
        // Calculate scroll progress within the brands container
        const containerScrollHeight = brandsContainerRect.height;
        const scrollPositionInContainer = Math.max(0, windowHeight - brandsContainerRect.top);
        const scrollProgress = Math.min(
          1,
          scrollPositionInContainer / containerScrollHeight
        );

        // Determine which word should be highlighted
        const highlightIndex = Math.floor(scrollProgress * (words.length - 1));

        words.forEach((word, index) => {
          word.style.setProperty("--highlight-opacity", index <= highlightIndex ? 1 : 0);
        });
      } else {
        // Reset highlights when the brands container is not in view
        words.forEach((word) => {
          word.style.setProperty("--highlight-opacity", 0);
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="brands-section">
      <h2 className="brands-heading">
      <span>
  {"Trusted Partner to Thousands of Commercial Clients"
    .split(" ")
    .map((word, index) => (
      <span key={index} className="word">
        {word}{" "}
      </span>
    ))}
   </span>

      </h2>
      <div className="brand-container">
        {rows.map((rowBrands, rowIndex) => (
          <div
            key={`brand-row-${rowIndex}`}
            className={`brand-row ${
              rowIndex % 2 === 0 ? "row-left-to-right" : "row-right-to-left"
            }`}
          >
            {rowBrands.map((brand, index) => (
              <div key={`brand-item-${rowIndex}-${index}`} className="brand-item">
                <div className="brand-box">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="brand"
                    onError={(e) => (e.target.src = "/path/to/placeholder.png")}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
