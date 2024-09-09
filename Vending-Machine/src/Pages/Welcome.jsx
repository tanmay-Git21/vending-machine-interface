import { useNavigate } from "react-router-dom";
import "../CSS/Welcome.css";

function Welcome() {
  const navigate = useNavigate();
  const handleProceed = () => {
    navigate("/menu");
  };

  return (
    <>
      <div className="WelcomePage">
        <div className="content-container">
          <h1>Welcome to Peturam</h1>
          <button className="ProceedButton" onClick={handleProceed}>
            Proceed to shop
          </button>
        </div>
      </div>
    </>
  );
}
export default Welcome;
