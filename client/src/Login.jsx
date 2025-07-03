import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Helpdesk System</h2>
        <input type="text" placeholder="Username" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button className="login-button">Sign In</button>
        <div className="login-footer">
          <span className="forgot-password">Forgot password</span>
          <span className="signup">Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
