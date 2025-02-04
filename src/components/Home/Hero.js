import React from 'react';
import './Hero.css'; // Importing the separate CSS file

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Welcome to Mata Vaishno Devi</h1>
        <p className="hero-subtitle">
          Begin your spiritual journey to one of India's most sacred shrines
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search for information, services, or facilities..."
            className="search-input"
          />
        </div>

        <div className="hero-button-container">
          <button className="hero-button">Plan Your Visit Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
