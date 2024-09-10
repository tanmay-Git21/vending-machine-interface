import React from "react";
import ProductCard from "./ProductCard";
import "../CSS/Menu.css";
import laysSalted from '../assets/Chips&Wafers/laysSalted.png';
import laysCream from '../assets/Chips&Wafers/laysCream.png';
import cheetosCheese from '../assets/Chips&Wafers/cheetosCheese.png';
import cheetosCrunchy from '../assets/Chips&Wafers/cheetosCrunchy.png';
import doritosCheese from '../assets/Chips&Wafers/doritosCheese.png';
import laysSaltAndVinegar from '../assets/Chips&Wafers/laysSaltAndVinegar.png';
import chickenNoodleSoup from '../Assets/Noodles/chickenNoodleSoup.png';
import knorrChatt from '../Assets/Noodles/knorrChatt.png';
import koreanRamen from '../Assets/Noodles/koreanRamen.png';
import maggieClassic from '../Assets/Noodles/maggieClassic.png';
import maggieCuppa from '../Assets/Noodles/maggieCuppa.png';
import yippeeNoodles from '../Assets/Noodles/yippeeNoodles.png';
import star from '../Assets/Chocolate Bars/5star.png'
import dairymilk from '../Assets/Chocolate Bars/dairymilk.png'
import dairymilkSilk from '../Assets/Chocolate Bars/dairymilkSilk.png'
import kitkat from '../Assets/Chocolate Bars/kitkat.png'
import snickers from '../Assets/Chocolate Bars/snickers.png'
import twix from '../Assets/Chocolate Bars/twix.png'
import classicCoke from '../Assets/Beverages/classicCoke.png';
import dietCoke from '../Assets/Beverages/dietCoke.png';
import espresso from '../Assets/Beverages/espresso.png';
import fantaCan from '../Assets/Beverages/fantaCan.png';
import pepsi from '../Assets/Beverages/pepsiCan.png';
import spritCanpng from '../Assets/Beverages/spritCanpng.png';
import waterBottle from '../Assets/Beverages/waterBottle.png';

const ProductRow = ({ sectionName }) => {
  // Available products for each section
  const ChipsAvail = [
    { imgsrc: laysSalted, name: "Lays Salted", quantity: 10, price: 10 },
    { imgsrc: laysCream, name: "Lays Cream & Onion", quantity: 10, price: 10 },
    { imgsrc: cheetosCheese, name: "Cheetos Cheese", quantity: 10, price: 10 },
    { imgsrc: cheetosCrunchy, name: "Cheetos Crunchy", quantity: 10, price: 10 },
    { imgsrc: doritosCheese, name: "Doritos Cheese", quantity: 10, price: 10 },
    { imgsrc: laysSaltAndVinegar, name: "Lays Salt & Vinegar", quantity: 10, price: 10 },
    
  ];

  const NoodlesAvail = [
      { imgsrc: koreanRamen, name: "Korean Ramen", quantity: 10, price: 30 },
      { imgsrc: knorrChatt, name: "Knorr Chatt Patt", quantity: 10, price: 20 },
      { imgsrc: maggieClassic, name: "Maggie Classic", quantity: 10, price: 15 },
      { imgsrc: maggieCuppa, name: "Maggie Cuppa Noodles", quantity: 10, price: 40 },
      { imgsrc: chickenNoodleSoup, name: "Knorr Chicken Noodle Soup", quantity: 40, price: 10 },
    { imgsrc: yippeeNoodles, name: "Yippee Classic", quantity: 10, price: 15 }
  ];
  const ChocolatesAvail = [
    { imgsrc: star, name: "Eat 5-star Do nothing", quantity: 10, price: 10},
    { imgsrc: dairymilk, name: "Dairymilk", quantity: 10, price: 10 },
    { imgsrc: dairymilkSilk, name: "Dairymilk Silk", quantity: 10, price: 50 },
    { imgsrc: kitkat, name: "KitKat", quantity: 10, price: 20 },
    { imgsrc: snickers, name: "Snickers", quantity: 10, price: 30 },
    { imgsrc: twix, name: "Twix", quantity: 10, price: 20},
   
  ];
  const BeveragesAvail = [
    { imgsrc:classicCoke , name: "Classic Coke", quantity: 10, price: 45 },
    { imgsrc: dietCoke, name: "Diet Coke", quantity: 10, price: 60 },
    { imgsrc: espresso, name: "Nestle Espresso", quantity: 10, price: 50 },
    { imgsrc: fantaCan, name: "Fanta Can", quantity: 10, price: 50 },
    { imgsrc: pepsi, name: "Pepsi Classic", quantity: 10, price: 50 },
    { imgsrc: spritCanpng, name: "Sprit Fresh", quantity: 10, price: 50 },
    { imgsrc: waterBottle, name: "Water Bottle", quantity: 10, price: 20 }
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
