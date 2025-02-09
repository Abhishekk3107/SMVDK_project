import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await axios.post("http://localhost:5000/login", { email, password });
      setUser({ email, token: data.token });
      localStorage.setItem("user", JSON.stringify({ email, token: data.token }));
      return { success: true };
    } catch (error) {
      return { success: false, message: "Invalid credentials" };
    }
  };

  const signup = async (email, password) => {
    try {
      await axios.post("http://localhost:5000/signup", { email, password });
      return { success: true };
    } catch (error) {
      return { success: false, message: "Signup failed" };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
