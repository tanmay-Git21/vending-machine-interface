import React from 'react';
import '../CSS/addedCard.css';

const AddedCard = ({ item }) => {
  return (
    <div className="container">
      <div className="something">
        <h3>{item.productName}</h3>
        <p>Price: Rs. {item.productPrice}</p>
        <p>Quantity: {item.productQuantity}</p>
      </div>
      <div className='imageDiv'>
        <img className='addedItemImage' src={item.productImage}/>
      </div>
    </div>
  );
};

export default AddedCard;
