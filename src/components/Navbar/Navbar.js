import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";
import "./Navbar.css"; // Import external CSS file

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <h1 className="logo">Vaishno Devi</h1>

        {/* Desktop Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/travel-guide" onClick={() => setMenuOpen(false)}>Travel Guide</Link></li>
          <li><Link to="/darshan" onClick={() => setMenuOpen(false)}>Darshan</Link></li>
          <li><Link to="/donate" onClick={() => setMenuOpen(false)}>Donate</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
        {/* Helpline (Visible on larger screens) */}
        <div className="helpline">
          <FaPhone className="phone-icon" />
          <span>1800-180-2020</span>
        </div>

        {/* Hamburger Menu (for Mobile) */}
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
