import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import ArrowDown from "../assets/ArrowDown.svg"; 


function Navbar() {
    const [aboutOpen, setAboutOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleAboutClick = () => {
        setAboutOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target)) {
                setAboutOpen(false);
            }
        };
        if (aboutOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [aboutOpen]);

    // Import the arrow down image

    return (
        <nav className="navbar" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {/* Logo on the left */}
            <div style={{ display: "flex", alignItems: "center" }}>
                <h1 style={{ marginRight: "24px" }}>Uber Clone</h1>
                {/* Navigation items */}
                <h3 style={{ margin: "0 12px", fontSize: "1rem" }}>Ride</h3>
                <h3 style={{ margin: "0 12px", fontSize: "1rem" }}>Drive</h3>
                <h3 style={{ margin: "0 12px", fontSize: "1rem" }}>Business</h3>
                <h3 style={{ margin: "0 12px", fontSize: "1rem" }}>Uber Eats</h3>
                <div className="navbar-about-dropdown" ref={dropdownRef}>
                    <div
                        className="about-trigger"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            margin: "0 12px",
                            fontSize: "1rem",
                            cursor: "pointer",
                            userSelect: "none",
                        }}
                        onClick={handleAboutClick}
                    >
                        About
                        <img
                            className={`ArrowDown${aboutOpen ? " rotated" : ""}`}
                            src={ArrowDown}
                            alt="arrow down"
                        />
                    </div>
                    {aboutOpen && (
                        <div className="about-dropdown-menu">
                            <Link to="/about/company">About us</Link>
                            <Link to="/about/team">Our Offerings</Link>
                            <Link to="/about/contact">How Uber Works</Link>
                            <Link to="/about/contact">Sustainability</Link>
                            <Link to="/about/contact">Newsroom</Link>
                            <Link to="/about/contact">Investor Relations</Link>
                            <Link to="/about/contact">Autonomous</Link>
                            <Link to="/about/contact">Blog</Link>
                            <Link to="/about/contact">Careers</Link>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/rides" style={{ marginLeft: "16px" }}>Rides</Link>
            </div>
        </nav>
    );
}

export default Navbar;