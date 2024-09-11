import React, { useState, useEffect } from "react";
import "../CSS/Menu.css";
import ProductRow from "../Components/ProductRow";
import { RiFontSize, RiShoppingBasketLine } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";
import AddedCard from "../Components/addedCard";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Menu() {

  const navigate2 = useNavigate();
  const Sections = [
    { name: "Chips & Wafers" },
    { name: "Noodles" },
    { name: "Chocolate Bars" },
    { name: "Beverages" },
  ];

  const [cartVisibility, setCartVisibility] = useState(0);
  const [addedItems, setAddedItems] = useState([]);

  const handleShoppinCartDiv = () => {
    setCartVisibility((prevVisibility) => (prevVisibility === 0 ? 1 : 0));
  };

  useEffect(() => {
    const cart = document.getElementsByClassName("shopping-cart-div");
    if (cart.length > 0) {
      cart[0].style.right = cartVisibility ? "0" : "-30vw"; // Assuming you want to slide the cart in and out
    }
  }, [cartVisibility]);

  const handleAddItem = (item) => {
    setAddedItems((prevItems) => [...prevItems, item]);
  };

  const handleCancleButton=()=>{
    handleShoppinCartDiv()


    if(addedItems.length === 0){
      toast.error("Basket is already empty")
      setAddedItems([]);
    }else if(addedItems.length > 0){
      toast.error("items have been removed");
      setAddedItems([]);
    }
    
    
  }


const handletoBillButton=()=>{
  if(addedItems.length === 0){
    toast.error("Basket is empty nothing to buy")
  }else if(addedItems.length > 0){
    
    navigate2("/billing");

  }
}

  useEffect(() => {
    console.log(addedItems);
  }, [addedItems]);

  return (
    <>
      <div className="menu-page-container">
        <div className="menu-heading-div">
          <h1>Peturam</h1>
          <div className="shopping-cart" onClick={handleShoppinCartDiv}>
            <RiShoppingBasketLine className="icon"></RiShoppingBasketLine>
            <div className="itemsCounter"><h4>+{addedItems.length}</h4></div>
          </div>
        </div>
        <div className="menu-product_collection-div">
          <div className="emptydiv">
            <br />
            <br />
            <br />
          </div>
          {Sections.map((section) => (
            <ProductRow
              sectionName={section.name}
              key={section.name}
              handleAddItem={handleAddItem}
            />
          ))}
        </div>
        <div className="shopping-cart-div">
          <div className="closeCart" onClick={handleShoppinCartDiv}>
            <FaArrowLeft />
          </div>
          <div className="showing-items-section">
            {addedItems.map((item, index) => (
              <AddedCard key={index} item={item} />
            ))}
          </div>
          <div className="totalAmount">
            <h4>Total amount:</h4>
            <h4>Rs. {addedItems.reduce((total, item) => total + item.productPrice, 0)}</h4>
          </div>
          <div className="cancleProceedDiv">
            <button className="cancle" onClick={handleCancleButton}>
              <h4>Cancel orders</h4>
            </button>
            <button className="tobill" onClick={handletoBillButton}>
              <h4>Proceed to payment</h4>
            </button>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
}

export default Menu;
