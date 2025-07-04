import React from 'react';
import './Login.css';
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Helpdesk System</h2>
        <input type="text" placeholder="Username" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
       <NavLink to="/dashboard"> <button className="login-button">Sign In</button></NavLink>
        <div className="login-footer">
          <NavLink to="/forgotpassword"> <span className="forgot-password">Forgot password</span></NavLink>
          <NavLink to="/signup"> <span className="signup">Sign Up</span></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
