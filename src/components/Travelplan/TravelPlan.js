import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./TravelPlan.css"; // Import CSS file

const packages = [
  { id: 1, name: "Package 1", price: 8000 },
  { id: 1, name: "Package 2", price: 8000 },
  { id: 3, name: "Package 3", price: 12000 },
  { id: 4, name: "Special Package only for (November,December and January)", price: 18000 },
];

const TravelPlan = () => {
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);
  const [traveler, setTraveler] = useState({ name: "", email: "", phone: "" });

  const handlePayment = async () => {
    if (!traveler.name || !traveler.email || !traveler.phone) {
      alert("Please fill all the details");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:5000/travel-order", {
        packageName: selectedPackage.name,
        amount: selectedPackage.price * 100, // Razorpay accepts in paise
        traveler,
      });

      const options = {
        key: "rzp_live_sYorYOmCrlo6BP",
        amount: selectedPackage.price * 100,
        currency: "INR",
        name: "Vaishno Devi Travel",
        description: selectedPackage.name,
        order_id: data.orderId,
        handler: async function (response) {
          try {
            const verify = await axios.post("http://localhost:5000/travel-verify-payment", response);
            alert(verify.data.message);
          } catch (error) {
            alert("Payment verification failed");
          }
        },
        prefill: {
          name: traveler.name,
          email: traveler.email,
          contact: traveler.phone,
        },
        theme: { color: "#f15a29" },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="travel-outside">
    <div className="travel-container">
    <div className="mantra">
        <h2> "Jai Mata Di" </h2>
        <p>🔹 "शेरों वाली मैया के दरबार में, दुःख दर्द मिटाए जाते हैं।"</p>
      </div>
      <h1>Plan Your Vaishno Devi Trip</h1>

      <div className="form-group">
        <label>Select Your Package</label>
        <select onChange={(e) => setSelectedPackage(packages[e.target.value])}>
          {packages.map((pkg, index) => (
            <option key={pkg.id} value={index}>
              {pkg.name} - ₹{pkg.price}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <input
          type="text"
          placeholder="Full Name"
          value={traveler.name}
          onChange={(e) => setTraveler({ ...traveler, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={traveler.email}
          onChange={(e) => setTraveler({ ...traveler, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={traveler.phone}
          onChange={(e) => setTraveler({ ...traveler, phone: e.target.value })}
        />
      </div>

      <button className="pay-button" onClick={handlePayment}>
        Proceed to Pay ₹{selectedPackage.price}
      </button>
    </div>
    <button onClick={()=>navigate("/travelplan2")}>More Details</button>
    </div>
  );
};

export default TravelPlan;
