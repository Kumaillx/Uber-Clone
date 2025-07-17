import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Adwn from "../assets/ardwn.png"; // Adjust path based on your file structure

const Navbar = () => {
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
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [aboutOpen]);

  return (
    <nav
      className="navbar"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#000",
        padding: "10px 20px",
        color: "#fff",
      }}
    >
      {/* Left section: Logo and Navigation Items */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 style={{ marginRight: "24px", fontSize: "1.5rem", color: "#fff" }}>Uber</h1>
        <h3 style={{ margin: "0 12px", fontSize: "1rem", color: "#fff" }}>Ride</h3>
        <h3 style={{ margin: "0 12px", fontSize: "1rem", color: "#fff" }}>Drive</h3>
        <h3 style={{ margin: "0 12px", fontSize: "1rem", color: "#fff" }}>Business</h3>
        <h3 style={{ margin: "0 12px", fontSize: "1rem", color: "#fff" }}>Uber Eats</h3>
        <div className="navbar-about-dropdown" ref={dropdownRef} style={{ position: "relative" }}>
          <h3
            style={{
              margin: "0 12px",
              fontSize: "1rem",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
            onClick={handleAboutClick}
          >
            About{" "}
            <img
              src={Adwn}
              alt="Dropdown Arrow"
              style={{ width: "12px", height: "12px", marginLeft: "4px" }}
            />
          </h3>
          {aboutOpen && (
            <div
              className="about-dropdown-menu"
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "4px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                minWidth: "150px",
                zIndex: 1,
              }}
            >
              <Link
                to="/about/company"
                style={{ display: "block", padding: "8px 16px", textDecoration: "none", color: "#000" }}
              >
                Company
              </Link>
              <Link
                to="/about/team"
                style={{ display: "block", padding: "8px 16px", textDecoration: "none", color: "#000" }}
              >
                Team
              </Link>
              <Link
                to="/about/contact"
                style={{ display: "block", padding: "8px 16px", textDecoration: "none", color: "#000" }}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Right section: Language, Help, Login, Sign up */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ margin: "0 12px", fontSize: "1rem", color: "#fff" }}>EN</span>
        <span style={{ margin: "0 12px", fontSize: "1rem", color: "#fff" }}>Help</span>
        <Link to="/login" style={{ margin: "0 12px", fontSize: "1rem", color: "#fff", textDecoration: "none" }}>
          Log in
        </Link>
        <button
          style={{
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;