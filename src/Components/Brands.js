import React from "react";
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

  return (
    <div className="brands-section">
      {/* Heading */}
      <h2 className="brands-heading">
        "Proud to Have Worked with Top Commercial Clients:"
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
