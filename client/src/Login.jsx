import React, { useState } from 'react';
import './Login.css';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const API = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API}/api/auth/login`, {
        email,
        password
      });

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        // Redirect based on role
        const role = res.data.user.role;
        if (role === "admin") {
          navigate("/admin-dashboard");
        } else if (role === "tech") {
          navigate("/tech-dashboard");
        } else if (role === "operation") {
          navigate("/operation-dashboard");
        } else {
          navigate("/user-dashboard");
        }
      }
    } catch (err) {
      console.log("Login error", err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Helpdesk System</h2>
        <input type="email" placeholder="Email" className="login-input" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="login-input" onChange={(e) => setPassword(e.target.value)} />

        <button className="login-button" onClick={handleLogin}>Sign In</button>

        <div className="login-footer">
          <NavLink to="/forgotpassword"><span className="forgot-password">Forgot password</span></NavLink>
          <NavLink to="/signup"><span className="signup">Sign Up</span></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
