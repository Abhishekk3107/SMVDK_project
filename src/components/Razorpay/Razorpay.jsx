import React, { useState } from "react";
import axios from "axios";
import "./Razorpay.css";

const Razorpay = () => {
  const [amount, setAmount] = useState("");

  const handlePayment = async () => {
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:5000/create-order", { amount });

      const options = {
        key: "rzp_live_sYorYOmCrlo6BP",
        amount: data.amount,
        currency: "INR",
        name: "Vaishno Devi Trust",
        description: "Donate for a noble cause",
        order_id: data.id,
        handler: async function (response) {
          try {
            const verify = await axios.post("http://localhost:5000/verify-payment", response);
            alert(verify.data.message);
          } catch (error) {
            alert("Payment verification failed");
          }
        },
        theme: {
          color: "#D32F2F",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment Error: ", error);
    }
  };

  return (
    <div className="donate-containers">
      <div className="donate-box">
        <h1> Donate for Mata Vaishno Devi </h1>
        <p>Your contribution helps in maintaining the shrine and providing facilities to pilgrims.</p>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter donation amount (INR)"
          className="donate-input"
        />

        <button onClick={handlePayment} className="donate-button">
          Donate Now 
        </button>
      </div>
    </div>
  );
};

export default Razorpay;
