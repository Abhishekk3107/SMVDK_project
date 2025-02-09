import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateProfile = () => {
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Initialize state with existing user details
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState(""); // Optional
  const [profilePic, setProfilePic] = useState(user?.profilePic || "");
  const [file, setFile] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Store the selected file
  };

  // Handle profile update
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = profilePic;
      
      if (file) {
        const formData = new FormData();
        formData.append("profilePic", file);
        
        const uploadResponse = await axios.post("http://localhost:5000/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        imageUrl = uploadResponse.data.imageUrl;
      }

      // Update profile details
      await axios.put("http://localhost:5000/update-profile", { email, password, profilePic: imageUrl });

      // Update context with new user details
      login({ ...user, email, profilePic: imageUrl });
      alert("Profile updated successfully!");
      navigate("/dashboard"); 
    } catch (error) {
      alert("Failed to update profile: " + error.response.data);
    }
  };

  return (
    <div>
      <h2>Update Profile</h2>

      {/* Profile Picture Preview */}
      {profilePic && <img src={`http://localhost:5000/${profilePic}`} alt="Profile" width="100" height="100" />}

      {/* Upload Input */}
      <input type="file" accept="image/*" onChange={handleFileChange} />

      {/* Email Input */}
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

      {/* Password Input (optional) */}
      <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleUpdate}>Update Profile</button>
      <button onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
    </div>
  );
};

export default UpdateProfile;
