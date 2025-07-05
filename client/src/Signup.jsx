import React, { useState } from 'react';
import './Login.css';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('user'); // Add role input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_BASE_URL;

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/api/auth/register`, {
        name,
        email,
        password,
        role
      });
      if (res.data.success) {
        navigate('/');
      }
    } catch (err) {
      console.log('Signup error:', err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Helpdesk System</h2>
        <input type="text" placeholder="Username" className="login-input" onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" className="login-input" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="login-input" onChange={(e) => setPassword(e.target.value)} />

        {/* Role selection */}
        <select className="login-input" onChange={(e) => setRole(e.target.value)} value={role}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="operation">Operation Team</option>
          <option value="tech">Tech Support</option>
        </select>

        <button className="signup-button" onClick={handleSignup}>Sign Up</button>

        <div className="login-footer">
          <span>Already have an account?</span>
          <NavLink to="/login" className="signup">Sign In</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Signup;
