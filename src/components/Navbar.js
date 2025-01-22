import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import from react-router-dom
import '../styles/Navbar.css';
import { FaBars } from "react-icons/fa";
import Logo from "../assets/images/Logo.png";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="navbar">
            {/* Logo Image */}
            <Link to="/" className="brand">
                <img 
                    src={Logo}
                    alt="Rusinga Agriculture Network Logo" 
                    className="logo" 
                />
            </Link>

            <div className={`navlinks ${showMenu ? 'show' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/team">Our Team</Link>
                <Link to="/contact">
                    <button className="contact-btn">Contact Us</button>
                </Link>
            </div>

            <div className="toggle-bar" onClick={toggleMenu}>
                <FaBars />
            </div>
        </div>
    );
};

export default NavBar;
