import React, { useState } from "react";
import axios from "axios";
import "./TravelPlan2.css"; // Import CSS file

const packages = [
  {
    id: 1,
    name: "Package 1",
    details: "Mata Vaishno Devi Darshan, 2 Nights & 3 Days, AC Bus Travel, Hotel Stay & Prasad",
    price: 8000,
  },
  {
    id: 2,
    name: "Package 2",
    details: "Mata Vaishno Devi Darshan, 2 Nights & 3 Days, Train & Cab Travel, Hotel Stay & VIP Darshan",
    price: 8000,
  },
  {
    id: 3,
    name: "Package 3",
    details: "Mata Vaishno Devi Darshan, 3 Nights & 4 Days, Helicopter Ride, Luxury Hotel, Special Prasad",
    price: 12000,
  },
  {
    id: 4,
    name: "Special Package only for (November,December and January)",
    details: "4 Nights & 5 Days, Mata Vaishno Devi Darshan, Patnitop & Nathatop Sightseeing, Meals & Accommodation",
    price: 18000,
  },
];

const TravelPlan2 = () => {
  const [traveler, setTraveler] = useState({ name: "", email: "", phone: "" });

  const handlePayment = async (selectedPackage) => {
    if (!traveler.name || !traveler.email || !traveler.phone) {
      alert("Please fill all your details");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:5000/travel-order", {
        packageName: selectedPackage.name,
        amount: selectedPackage.price * 100,
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

  return (
    <div className="travel-outside">
      <div className="mantra">
        <h2> "Jai Mata Di" </h2>
        <p>🔹 "शेरों वाली मैया के दरबार में, दुःख दर्द मिटाए जाते हैं।"</p>
      </div>

      <h1>🙏 Plan Your Vaishno Devi Trip 🙏</h1>

      <div className="travel-container">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <h2>{pkg.name}</h2>
            <p>{pkg.details}</p>
            <h3>💰 Price: ₹{pkg.price}</h3>

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

            <button className="pay-button" onClick={() => handlePayment(pkg)}>
              Proceed to Pay ₹{pkg.price}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelPlan2;
