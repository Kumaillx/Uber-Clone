import {Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1> Uber Clone</h1>
            <div>
                <link to = "/"> Home</link>
                <Link to="/rides"> Rides</Link>
            </div>
        </nav>
    );
};

export default Navbar;