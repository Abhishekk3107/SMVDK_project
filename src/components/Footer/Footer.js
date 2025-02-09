import React from "react";
import "./Footer.css"; // Import CSS file
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: About Us */}
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            Welcome to <b>Vaishno Devi Travel</b>, your trusted pilgrimage travel partner. We offer well-planned, comfortable, and affordable packages for a divine and memorable experience.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/travelplan2">Packages</a></li>
            <li><a href="/darshan">Darshan</a></li>
            <li><a href="/razorpay">Donate</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Details */}
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>📍 Jammu & Kashmir, India</p>
          <p>📞 <a href="tel:+917065947793">+91 70659 47793</a></p>
          <p>📧 <a href="mailto:support@vaishnodevitravel.com">support@vaishnodevitravel.com</a></p>
        </div>

        {/* Column 4: Social Media */}
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://wa.me/917065947793" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="mailto:support@vaishnodevitravel.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Vaishno Devi Travel. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
