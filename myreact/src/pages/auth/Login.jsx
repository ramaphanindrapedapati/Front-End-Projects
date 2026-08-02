import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login(role);
    navigate("/" + role);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Select your role to continue</p>

        <button
          className="login-btn customer-btn"
          onClick={() => handleLogin("customer")}
        >
          Login as Customer
        </button>

        <button
          className="login-btn manager-btn"
          onClick={() => handleLogin("manager")}
        >
          Login as Manager
        </button>
      </div>
    </div>
  );
}

export default Login;