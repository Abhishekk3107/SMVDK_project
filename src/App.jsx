import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Hero";
import TravelGuide from "./components/Travel-guide/Travel-guide";
import Darshan from "./components/Darshan/Darshan";
import Donate from "./components/Donation/Donation";
import Contact from "./components/Contact/Contact";
import Razorpay from "./components/Razorpay/Razorpay";
import Login from "./components/Login/Login"; // Import Login component
import Signup from "./components/Signup/Signup"; // Import Signup component
import Dashboard from "./Dashboard";
import AuthProvider from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Settings from "./Settings";
import UpdateProfile from "./UpdateProfile";
import TravelPlan from "./components/Travelplan/TravelPlan";
import TravelPlan2 from "./components/TravelPlan2/TravelPlan2";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Travel-guide" element={<TravelGuide />} />
            <Route path="/darshan" element={<Darshan />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/razorpay" element={<Razorpay />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/travelplan" element={<TravelPlan />} />
            <Route path="/travelplan2" element={<TravelPlan2 />} />

            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </Router>
  );
};

export default App;
