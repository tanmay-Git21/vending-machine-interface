import React from 'react';
import '../CSS/ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className='card'>
      <div className='product-img'>
        <img src={product.imgsrc} alt={product.name} /> {/* Display the image */}
      </div>
      <div className='product-name'>
        {product.name}  {/* Display the product name */}
      </div>
      <div className='product-info'>
        Qty: {product.quantity} | Rs. {product.price}  {/* Display quantity and price */}
      </div>
      <div className='product-add'>
        <button className='addButton'>Add</button>  {/* Add button */}
      </div>
    </div>
  );
}

export default ProductCard;
