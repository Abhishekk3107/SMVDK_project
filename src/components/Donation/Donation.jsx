import React from "react";
import { useNavigate } from "react-router-dom";
import qrcode from './qrcodefordonation.jpg'
import "./Donation.css";


const Donate = () => {

  const navigate = useNavigate();
  return (
    <div className="donate-container">
        
      {/* Hero Section */}
      <header className="donate-hero">
      
        <h1>Support the Sacred Journey</h1>
        <p><b>Your donation helps maintain the temple and serve devotees.</b></p>
       
      </header>
      
      {/* Donation Categories */}
      <section className="donation-categories">
        <h2>Ways to Donate</h2>
        <div className="donation-grid">
          <div className="donation-card">
            <h3>Temple Maintenance</h3>
            <p>Help in preserving and maintaining the sacred temple premises.</p>
          </div>
          <div className="donation-card">
            <h3>Langar Seva</h3>
            <p>Contribute to the free food service for devotees visiting the shrine.</p>
          </div>
          <div className="donation-card">
            <h3>Tree Plantation</h3>
            <p>Donate for environmental conservation and plantation initiatives.</p>
          </div>
          <div className="donation-card">
            <h3>Medical Aid</h3>
            <p>Support medical facilities for devotees and local communities.</p>
          </div>
        </div>
      </section>

      {/* Donation QR Code & UPI Details */}
      <section className="donation-upi">
        <h2>Donate via UPI</h2>
        <p>Scan the QR code or enter the UPI ID manually.</p>
        <div className="upi-details">
          <img src={qrcode} alt="UPI QR Code" className="qr-code"/>
          <p className="upi-id">UPI ID: <strong>7065947793@ptaxis</strong></p>
        </div>
      </section>

      {/* Secure Payment Button */}
      <section className="donation-button">
        <button onClick={() => navigate("/razorpay")} className="donate-btn">Proceed to Donate</button>
      </section>

      {/* FAQs */}
      <section className="donation-faq">
        <h2>Frequently Asked Questions (FAQ)</h2>
        <details>
          <summary>Is my donation tax deductible?</summary>
          <p>Yes, all donations are eligible for tax exemption under Section 80G.</p>
        </details>
        <details>
          <summary>Can I donate from outside India?</summary>
          <p>Yes, international donations are accepted via wire transfer.</p>
        </details>
        <details>
          <summary>How will my donation be used?</summary>
          <p>Your donation will be utilized for temple maintenance, charity, and welfare programs.</p>
        </details>
      </section>
    </div>
  );
};

export default Donate;
