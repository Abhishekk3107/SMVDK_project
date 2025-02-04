import React from "react";
import "./Darshan.css";

const Darshan = () => {
  return (
    <div className="darshan-container">
      {/* Hero Section */}
      <header className="darshan-hero">
        <h1>Mata Vaishno Devi Darshan</h1>
        <p>Experience the divine blessings of Maa Vaishno Devi</p>
      </header>

      {/* Darshan Timings */}
      <section className="darshan-timings">
        <h2>Darshan Timings & Slots</h2>
        <table>
          <thead>
            <tr>
              <th>Darshan Type</th>
              <th>Timings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Morning Aarti</td>
              <td>4:00 AM - 6:00 AM</td>
            </tr>
            <tr>
              <td>General Darshan</td>
              <td>6:00 AM - 10:00 PM</td>
            </tr>
            <tr>
              <td>Special Darshan (VIP)</td>
              <td>8:00 AM - 9:30 AM</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Online Booking */}
      <section className="darshan-booking">
        <h2>Online Darshan Booking</h2>
        <p>Book your darshan slot online for a hassle-free experience.</p>
        <button className="booking-button">Book Now</button>
      </section>

      {/* Darshan Process */}
      <section className="darshan-process">
        <h2>Darshan Process</h2>
        <ol>
          <li>Register at the Yatra Registration Counter.</li>
          <li>Collect your Yatra Parchi (entry pass).</li>
          <li>Proceed to Bhawan via trekking, pony, or helicopter.</li>
          <li>Follow the queue system for darshan.</li>
          <li>Receive prasad and blessings of Maa Vaishno Devi.</li>
        </ol>
      </section>

      {/* Guidelines */}
      <section className="darshan-guidelines">
        <h2>Guidelines for Devotees</h2>
        <ul>
          <li>Maintain cleanliness and follow COVID-19 protocols.</li>
          <li>Wear comfortable clothing suitable for trekking.</li>
          <li>Avoid carrying plastic and non-biodegradable items.</li>
          <li>Follow the instructions of security personnel.</li>
        </ul>
      </section>

      {/* FAQs */}
      <section className="darshan-faq">
        <h2>Frequently Asked Questions (FAQ)</h2>
        <details>
          <summary>How can I book a VIP Darshan?</summary>
          <p>VIP darshan can be booked online or through authorized agents.</p>
        </details>
        <details>
          <summary>Is there any accommodation available near the temple?</summary>
          <p>Yes, various guest houses and hotels are available near the Bhawan.</p>
        </details>
        <details>
          <summary>Are there any special facilities for senior citizens?</summary>
          <p>Yes, battery-operated vehicles and palkis are available.</p>
        </details>
      </section>
    </div>
  );
};

export default Darshan;
