import React, { useEffect } from "react";
import "./Brands.css";


const Brands = ({ brands }) => {
  // Function to divide brands into rows dynamically
  const divideIntoRows = (items, itemsPerRow = 2) => {
    const rows = [];
    for (let i = 0; i < items.length; i += itemsPerRow) {
      rows.push(items.slice(i, i + itemsPerRow));
    }
    return rows;
  };

  // Generate rows dynamically
  const rows = divideIntoRows(brands, Math.ceil(brands.length / 2));

  useEffect(() => {
    const handleScroll = () => {
      const heading = document.querySelector(".brands-heading");
      if (!heading) return;

      const spans = heading.querySelectorAll("span");
      const rect = heading.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const visibility = Math.min(100, ((windowHeight - rect.top) / windowHeight) * 100);
        const segmentWidth = visibility / spans.length;

        spans.forEach((span, index) => {
          // Set each span's highlight width progressively
          const highlightWidth = Math.min(100, segmentWidth * (index + 1));
          span.style.setProperty("--highlight-width", `${highlightWidth}%`);
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
      {/* Heading */}
      <h2 className="brands-heading">
        <span>"Proud to Have Worked with Top Commercial Clients:"</span>
      </h2>

      <div className="brand-container">
        {/* Render rows */}
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
