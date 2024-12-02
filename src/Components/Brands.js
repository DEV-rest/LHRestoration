import React from "react";
import "./Brands.css";

const Brands = ({ brands }) => {
  // Split the brands array into two groups
  const midpoint = Math.ceil(brands.length / 2);
  const firstRowBrands = brands.slice(0, midpoint);
  const secondRowBrands = brands.slice(midpoint);

  return (
    <div className="brands-section">
      {/* Heading */}
      <h2 className="brands-heading">"Proud to Have Worked with Top Commercial Clients:"</h2>

      <div className="brand-container">
        {/* First Row */}
        <div className="brand-row row-left-to-right">
          {firstRowBrands.map((brand, index) => (
            <div key={`brand-row1-${index}`} className="brand-item">
              <div className="brand-box">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="brand"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="brand-row row-right-to-left">
          {secondRowBrands.map((brand, index) => (
            <div key={`brand-row2-${index}`} className="brand-item">
              <div className="brand-box">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="brand"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
