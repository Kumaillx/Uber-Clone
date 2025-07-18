import RideForm from '../components/RideForm';
import homeImg from '../assets/Home-img1.jpg';

const Home = () => {
  return (
    <div className="home-hero">
      <div className="home-hero-left">
        <h1 className="home-hero-title">Go anywhere with Uber</h1>
        <RideForm/>
        <form className="home-hero-form">
          <div className="home-hero-form-inputs">

            <button className="home-prices-btn">See prices</button>
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