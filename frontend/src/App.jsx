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
          <Route path="/about/company" element={<div>About Us</div>} />
          <Route path="/pages/prices" element={<Prices/>} />

        </Routes>
      </main>
      <Footer />
    </Router>
  );
};      
  
export default App;