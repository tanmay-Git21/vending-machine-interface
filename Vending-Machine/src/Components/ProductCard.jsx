import React, { useState } from "react";
import "../CSS/ProductCard.css";
import toast, { Toaster } from "react-hot-toast";

function ProductCard({ product }) {

  const [addedItems,setAddedItems]=useState([]);




  const handleAddItems = (name,price,quantity) => {

    const item ={productName:name,productPrice:price,productQuantity: quantity }
      // Add the new item to the list
      setAddedItems((prevItems) => [...prevItems, item]); // Use functional update form
    
      // Log the updated items list
      console.log([...addedItems, item]); // Log the new array to see the result
  };

  return (
    <div className="card">
      <div className="product-img">
        <img className="product-image" src={product.imgsrc} />{" "}
        {/* Display the image */}
      </div>
      <div className="product-name">
        {product.name} {/* Display the product name */}
      </div>
      <div className="product-info">
        Qty: {product.quantity} | Rs. {product.price}{" "}
        {/* Display quantity and price */}
      </div>
      <div className="product-add">
        <button
          className="addButton"
          onClick={() => {
            handleAddItems(product.name , product.price,1);
            toast.success(`${product.name} added successfully`);
          }}
        >
          Add
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default ProductCard;
