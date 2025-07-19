import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Rides from "./pages/Rides";
import Home from "./pages/Home";
import "./index.css";
import Prices from "./pages/Prices";


const App = () => {
  
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rides" element={<Rides />} />

          <Route path="/about/company" 
          element={
            <div>About Us</div>
            
            } />
          
          <Route path="/about/Offerings" element=
          {
            <div>Hello I Offer</div>
          } />
          
          <Route path="/about/hr" 
          element=
          {
            <div>Hello I am HR</div>
          } />

          <Route path="/about/works" element={<div>How Uber Works</div>} />
          
          <Route path="/about/sustain" element={<div>Sustainability</div>} />
          
          <Route path="/about/news" element={<div>Newsroom</div>} />
          
          <Route path="/about/invest" element={<div>Investor Relations</div>} />
          
          <Route path="/about/auto" element={<div>Autonomous</div>} />
          
          <Route path="/about/blog" element={<div>Blog</div>} />
          


          <Route path="/pages/prices" element={<Prices/>} />

        </Routes>
      </main>
      <Footer />
    </Router>
  );
};      
  
export default App;