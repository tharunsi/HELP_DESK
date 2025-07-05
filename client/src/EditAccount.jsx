import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './EditAccount.css';
import { NavLink, useNavigate } from "react-router-dom";

const EditAccount = () => {
  return (
    <div className="edit-account-container">
      <Header />
      <Sidebar />

      <main className="edit-account-main">
        <h2 className="edit-title">User Profile</h2>

        <div className="edit-box">
          <div className="edit-tab">Edit Account</div>

         <form className="edit-form">
  <div className="form-row">
    <label>Username</label>
    <input type="text" placeholder="Enter username" />
  </div>

  <div className="form-row">
    <label>Current Password</label>
    <input type="password" placeholder="Enter current password" />
  </div>

  <div className="form-row">
    <label>New Password</label>
    <input type="password" placeholder="Enter new password" />
  </div>

  <div className="form-row">
    <label>Confirm Password</label>
    <input type="password" placeholder="Confirm new password" />
  </div>

  <div className="form-row">
    <label>Email</label>
    <input type="email" placeholder="Enter email" />
  </div>

  <div className="form-row">
    <label>Real Name</label>
    <input type="text" placeholder="Enter real name" />
  </div>

  <div className="form-row">
    <label>Access Level</label>
    <input type="text" placeholder="User / Admin" />
  </div>

  <div className="form-row">
    <label>Project Access Level</label>
    <input type="text" placeholder="Limited / Full" />
  </div>

  <div className="form-button">
    <NavLink to='/userprofile'><button type="submit" className="update-btn">Update User</button></NavLink>
  </div>
</form>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EditAccount;
