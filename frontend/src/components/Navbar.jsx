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
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setAboutOpen(false);
            }
        };
        if (aboutOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [aboutOpen]);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1 className="navbar-logo">Uber Clone</h1>
                <h3 className="navbar-link">Ride</h3>
                <h3 className="navbar-link">Drive</h3>
                <h3 className="navbar-link">Business</h3>
                <h3 className="navbar-link">Uber Eats</h3>
                <div className="navbar-about-dropdown" ref={dropdownRef}>
                    <div
                        className="about-trigger"
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
                            <Link to="/about/Offerings">Our Offerings</Link>
                            <Link to="/about/works">How Uber Works</Link>
                            <Link to="/about/sustain">Sustainability</Link>
                            <Link to="/about/news">Newsroom</Link>
                            <Link to="/about/invest">Investor Relations</Link>
                            <Link to="/about/auto">Autonomous</Link>
                            <Link to="/about/blog">Blog</Link>
                            <Link to="/about/hr">Careers</Link>
                        </div>
                    )}
                </div>
            </div>
            <div className="navbar-right">
                <Link to="/">Home</Link>
                <Link to="/rides" style={{ marginLeft: "16px" }}>Rides</Link>
            </div>
        </nav>
    );
}

export default Navbar;