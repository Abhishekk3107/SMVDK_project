import React from "react";
import "./Travel-guide.css";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaTrain, FaHotel, FaCalendarAlt } from "react-icons/fa";


const TravelGuide = () => {

  const navigate = useNavigate();
  return (
    <div className="travel-guide">
      {/* Header Section */}
      <header className="travel-header">
        <h1>Vaishno Devi Travel Guide</h1>
        <p>Your complete guide to a divine and memorable journey.</p>
      </header>

      {/* Introduction Section */}
      <section className="introduction">
        <img
          src="https://www.sriramwallpapers.com/god-images/maa-vaishno-wallpapers/thumb/vaishno-devi-wallpapers.jpg"
          alt="Vaishno Devi Temple"
          className="intro-image"
        />
        <div className="intro-text">
          <h2>About Vaishno Devi</h2>
          <p>
            The <b>Vaishno Devi Temple</b> is a holy pilgrimage site dedicated to <b>Goddess Vaishno Devi</b>, located in the Trikuta Mountains of Jammu and Kashmir. Millions of devotees visit this sacred place every year seeking blessings.
          </p>
        </div>
      </section>

      {/* Travel Steps Section */}
      <section className="travel-steps">
        <h2>How to Reach Vaishno Devi</h2>
        <div className="steps-container">
          {/* Step 1 - Best Time to Visit */}
          <div className="step">
            <FaCalendarAlt className="step-icon" />
            <h3>Best Time to Visit</h3>
            <p>
              The ideal time to visit is <u>March to October</u> for pleasant weather, and <u>Navratri</u> for a spiritual experience.
            </p>
          </div>

          {/* Step 2 - Travel Routes */}
          <div className="step">
            <FaMapMarkerAlt className="step-icon" />
            <h3>Travel Routes</h3>
            <p>
              The journey starts from <u>Katra</u>, which is well-connected by <u>road, rail, and air</u> to major Indian cities.
            </p>
          </div>

          {/* Step 3 - Transportation */}
          <div className="step">
            <FaTrain className="step-icon" />
            <h3>How to Reach Katra</h3>
            <p>
              <b>By Train:</b> The nearest railway station is <u>Shri Mata Vaishno Devi Katra</u> (SVDK).
              <br/>  
              <b>By Air:</b> Jammu Airport is <u>50 km</u> away.  
              <br/>
              <b>By Road:</b> Regular buses & taxis available.
            </p>
          </div>

          {/* Step 4 - Accommodation */}
          <div className="step">
            <FaHotel className="step-icon" />
            <h3>Accommodation</h3>
            <p>
              Katra offers <u>budget hotels, luxury hotels, and Dharamshalas</u> for pilgrims. Shri Mata Vaishno Devi Shrine Board also provides rooms at affordable rates.
            </p>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="cta-section">
        <h2>Plan Your Journey Today!</h2>
        <p>Get ready for a divine experience at Vaishno Devi.</p>
        <button className="cta-button" onClick={()=>navigate("/travelplan")}>Start Planning</button>
      </section>
    </div>
  );
};

export default TravelGuide;
