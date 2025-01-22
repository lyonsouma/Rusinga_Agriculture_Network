import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "../assets/icons/facebook-app-symbol.png";
import TikTok from "../assets/icons/tik-tok.png";
import Youtube from "../assets/icons/youtube.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>Rusinga Agriculture Network</h3>
          <p>
            At Rusinga Agriculture Network , we are committed to sustainable and
            quality farming practices that benefit our community and the
            environment.
          </p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/team">Our Team</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:info@rusinet.org">rusinganework@gmail.com</a>
            </li>
            <li>
              Phone: <a href="tel:+254111689847">+254111689847</a>
            </li>
            <li>Address: Rusinga Island, Homabay County, Kenya</li>
          </ul>
        </div>

        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://web.facebook.com/profile.php?id=61562175321336"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FacebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a
              href="https://www.tiktok.com/@rusingapoultrypride"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TikTok} alt="TikTok" className="social-icon" />
            </a>
            <a
              href="https://www.youtube.com/@RusingaPoultryPride"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Youtube} alt="Youtube" className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <h6>
          &copy; {new Date().getFullYear()} Rusinga Agriculture Network. All
          rights reserved.
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
