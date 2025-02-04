import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Hero";
import TravelGuide from "./components/Travel-guide/Travel-guide";
import Darshan from "./components/Darshan/Darshan";
import Donate from "./components/Donation/Donation";
import Contact from "./components/Contact/Contact";
import Razorpay from "./components/Razorpay/Razorpay";

const App = () => {
  return (
    <Router>
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Travel-guide" element={<TravelGuide />} />
          <Route path="/darshan" element={<Darshan />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/razorpay" element={<Razorpay />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </main>
    </Router>
  );
};

export default App;
