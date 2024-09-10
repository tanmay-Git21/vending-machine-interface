import React from "react";
import ProductCard from "./ProductCard";
import "../CSS/Menu.css";

const ProductRow = ({ sectionName }) => {
  // Available products for each section
  const ChipsAvail = [
    { imgsrc: "#", name: "Lays Salted", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Lays Tomato", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 }
  ];

  const NoodlesAvail = [
    { imgsrc: "#", name: "Yippee", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 }
  ];
  const ChocolatesAvail = [
    { imgsrc: "#", name: "Yippee", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 }
  ];
  const BeveragesAvail = [
    { imgsrc: "#", name: "Yippee", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 }
  ];

  // Decide which products to display based on sectionName
  let productsToDisplay = [];
  if (sectionName === "Chips & Wafers") {
    productsToDisplay = ChipsAvail;
  } else if (sectionName === "Noodles") {
    productsToDisplay = NoodlesAvail;
  }else if(sectionName === "Chocolate Bars"){
    productsToDisplay = ChocolatesAvail;
  }else if(sectionName === "Beverages"){
    productsToDisplay = BeveragesAvail
  }

  return (
    <div className="product-section-row">
      <div className="product-section-name">
        <h3>{sectionName}</h3>
      </div>
      <div className="product-view-section">
        {productsToDisplay.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductRow;
