import React from "react";
import "../CSS/ProductCard.css";
import toast, { Toaster } from "react-hot-toast";

function ProductCard({ product, handleAddItem }) {
  const handleAddClick = () => {
    const item = {
      productName: product.name,
      productPrice: product.price,
      productQuantity: 1, // Assume 1 for now
      productImage : product.imgsrc
    };
    handleAddItem(item);  // Call the function passed from parent to update the cart
    toast.success(`${product.name} added successfully`);
  };

  return (
    <div className="card">
      <div className="product-img">
        <img className="product-image" src={product.imgsrc} alt={product.name} />
      </div>
      <div className="product-name">{product.name}</div>
      <div className="product-info">
        Qty: {product.quantity} | Rs. {product.price}
      </div>
      <div className="product-add">
        <button className="addButton" onClick={handleAddClick}>
          Add
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default ProductCard;
