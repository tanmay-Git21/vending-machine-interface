import React from "react";
import "../CSS/Menu.css";
import ProductRow from "../Components/ProductRow";

function Menu() {
  const Sections = [
    { name: "Chips & Wafers" },  // Example products array
    { name: "Noodles" },          // Example products array
    { name: "Chocolate Bars" },   // Example products array
    { name: "Beverages" }          // Example products array
  ];

  return (
    <>
      <div className="menu-page-container">
        <div className="menu-heading-div">
          <h3>....🙏...</h3>
          <h1>Peturam</h1>
        </div>
        <div className="menu-product_collection-div">
          {Sections.map((section) => (
            <ProductRow
              sectionName={section.name}
              key={section.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
