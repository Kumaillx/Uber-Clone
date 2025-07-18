import RideForm from '../components/RideForm';
import homeImg from '../assets/Home-img1.jpg';
import { useNavigate } from "react-router-dom";



const Home = () => {
//   Handling the navigation to the Prices page  
  const navigate = useNavigate();

  const handleSeePrices = (e) => {
    //prevent the default form submission
    e.preventDefault();
    // Navigate to the Prices page
    // Assuming the Prices page
    navigate("pages/prices");

    // navigate({prices});
  };

  return (
    <div className="home-hero">
      <div className="home-hero-left">
        <h1 className="home-hero-title">Go anywhere with Uber</h1>
        <RideForm/>
        <form className="home-hero-form">
          <div className="home-hero-form-inputs">
            <button
                // Should render towards the Prices page
              className="home-prices-btn"
              onClick={handleSeePrices}
              type="button"
            >
              See prices
            </button>
            <span className="home-login-link">
              Log in to see your recent activity
            </span>
          </div>
        </form>
      </div>
      <div className="home-hero-right">
        <img
          className="home-hero-img"
          src={homeImg}
          alt="Uber ride"
        />
      </div>
    </div>


  );
};

export default Home;