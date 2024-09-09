import "../CSS/Menu.css";
import ProductCard from "../Components/ProductCard";

function Menu() {
  return (
    <>
      <div className="menu-page-container">
        <div className="menu-heading-div">
          <h3>....🙏...</h3>
          <h1>Peturam</h1>
        </div>
        <div className="menu-product_colletion-div">
          <div className="waffers-parent-div">
            <div className="waffers-heading">
              <h3>Chips</h3>
            </div>
            <div className="waffers-section">
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
            </div>
          </div>

          <div className="noodles-section"></div>
          <div className="chocolate-section"></div>

          <div className="desserts-section"></div>

          <div className="beverages-section"></div>
        </div>
      </div>
    </>
  );
}
export default Menu;
