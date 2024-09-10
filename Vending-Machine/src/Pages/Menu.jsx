import React, { useEffect, useState } from "react";
import "../CSS/Menu.css";
import ProductRow from "../Components/ProductRow";
import { RiShoppingBasketLine } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";
import AddedCard from "../Components/addedCard";

function Menu() {
  const Sections = [
    { name: "Chips & Wafers" },  // Example products array
    { name: "Noodles" },          // Example products array
    { name: "Chocolate Bars" },   // Example products array
    { name: "Beverages" }          // Example products array
  ];

const [cartVisibility,setCartVisibility]=useState(0);

  const handleShoppinCartDiv =()=>{
  if(cartVisibility === 0){
    setCartVisibility(1)
  }
  if(cartVisibility === 1){
    setCartVisibility(0)
  }
  }

  
    useEffect(() => {
      const cart = document.getElementsByClassName('shopping-cart-div');
      if (cart.length > 0) {
        cart[0].style.right = cartVisibility ? '0' : '-30vw'; // Assuming you want to slide the cart in and out
      }
    }, [cartVisibility]);


  return (
    <>
      <div className="menu-page-container">
        <div className="menu-heading-div">
         
          <h1>Peturam</h1>
          <div className="shopping-cart" onClick={()=>handleShoppinCartDiv()} >
            <RiShoppingBasketLine className="icon"></RiShoppingBasketLine>
            {/* <div className="items-counter">+1</div> */}
          </div>
        </div>
        <div className="menu-product_collection-div">
          <div className="emptydiv">
            <br /><br />
            <br />
          </div>
          {Sections.map((section) => (
            <ProductRow
              sectionName={section.name}
              key={section.name}
            />
          ))}
        </div>
        <div className="shopping-cart-div">
            <div className="closeCart" onClick={()=>handleShoppinCartDiv()}>
              <FaArrowLeft></FaArrowLeft>
            </div>
            <div className="showing-items-section">
              <AddedCard></AddedCard>
              <AddedCard></AddedCard>
              <AddedCard></AddedCard>
              <AddedCard></AddedCard>
              <AddedCard></AddedCard>
              <AddedCard></AddedCard> 
              <AddedCard></AddedCard> 
              <AddedCard></AddedCard> 
            </div>
            <div className="totalAmount">
              <h4>Total amount:</h4>
              <h4>Rs.100</h4>
            </div>
            <div className="cancleProceedDiv">
              <button className="cancle"><h4>Cancle orders</h4></button>
              <button className="tobill"><h4>Proceed to payment</h4></button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
