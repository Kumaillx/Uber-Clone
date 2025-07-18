import { useNavigate } from "react-router-dom";

const Footer = () => {
  
  const navigate = useNavigate();

  const handleSeePrices = (e) => {
    //prevent the default form submission
    e.preventDefault();
    // Navigate to the Prices page
    // Assuming the Prices page
    navigate("pages/prices");
  }
  
  return (
    <footer 
    onClick={handleSeePrices}
    className="footer">
      <p> See Prices</p>
    </footer>
    
  );
};

export default Footer;