import {Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1> Uber Clone</h1>
            <div>
                <Link to = "/"> Home</Link>
                <Link to="/rides"> Rides</Link>
            </div>
        </nav>
    );
};

export default Navbar;