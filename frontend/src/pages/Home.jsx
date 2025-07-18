import RideForm from '../components/RideForm';

const Home = () => {
  return (
    <div className="home-hero">
      <div className="home-hero-left">
        <h1 className="home-hero-title">Go anywhere with Uber</h1>
        <form className="home-ride-form">
          <div className="home-form-group">
            <span className="home-dot pickup"></span>
            <input
              className="home-input"
              type="text"
              placeholder="Pickup location"
            />
            <span className="home-icon">&#x1F6F0;</span>
          </div>
          <div className="home-form-group">
            <span className="home-dot dropoff"></span>
            <input
              className="home-input"
              type="text"
              placeholder="Dropoff location"
            />
          </div>
          <div className="home-form-row">
            <div className="home-form-col">
              <label className="home-label">Date</label>
              <div className="home-form-input">
                <span className="home-icon">&#x1F4C5;</span>
                <span>Today</span>
              </div>
            </div>
            <div className="home-form-col">
              <label className="home-label">Time</label>
              <div className="home-form-input">
                <span className="home-icon">&#x23F0;</span>
                <span>Now</span>
                <span className="home-arrow">&#9660;</span>
              </div>
            </div>
          </div>
          <div className="home-form-actions">
            <button className="home-prices-btn">See prices</button>
            <span className="home-login-link">
              Log in to see your recent activity
            </span>
          </div>
        </form>
      </div>
      <div className="home-hero-right">
        {/* Replace src with your image path */}
        <img
          className="home-hero-img"
          src="your-image-path.jpg"
          alt="Uber ride"
        />
      </div>
    </div>
  );
};

export default Home;