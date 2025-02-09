import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Settings = () => {
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  // State for user inputs
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(user?.profilePic || "");
  const [file, setFile] = useState(null);
  const [saving, setSaving] = useState(false); // Loading state

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Save Changes Function
  const handleSaveChanges = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      let imageUrl = profilePic;

      // Upload new profile picture if selected
      if (file) {
        const formData = new FormData();
        formData.append("profilePic", file);

        const uploadResponse = await axios.post("http://localhost:5000/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        imageUrl = uploadResponse.data.imageUrl;
      }

      // Update user profile
      await axios.put("http://localhost:5000/update-profile", { email, password, profilePic: imageUrl });

      login({ ...user, email, profilePic: imageUrl }); // Update context with new details
      alert("Profile updated successfully!");
    } catch (error) {
      alert("Error updating profile: " + error.response.data);
    }

    setSaving(false);
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>

      {/* Profile Picture Preview */}
      <img src={profilePic ? `http://localhost:5000/${profilePic}` : "https://via.placeholder.com/100"} alt="Profile" width="100" height="100" />

      {/* Upload Profile Picture */}
      <input type="file" accept="image/*" onChange={handleFileChange} />

      {/* Email Input */}
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

      {/* Password Input */}
      <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />

      {/* Save Changes Button */}
      <button onClick={handleSaveChanges} disabled={saving}>
        {saving ? "Saving..." : "Save Changes"}
      </button>

      <button onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
    </div>
  );
};

export default Settings;
