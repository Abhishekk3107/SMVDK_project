import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; 
const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="dashboard-container">
      <h2>Welcome to <span className="highlight">Vaishno Devi Travel</span></h2>
      <p className="email">Email: {user?.email}</p>

      {/* Profile Picture with Border & Styling */}
      <img 
        src={user?.profilePic ? `http://localhost:5000/${user.profilePic}` : "https://via.placeholder.com/100"} 
        alt="Profile" 
        className="profile-pic"
      />

      {/* Button Section */}
      <div className="button-group">
        <button className="settings-btn" onClick={() => navigate("/settings")}>Settings</button>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
