import React from 'react';
import './ProfileCard.css';
import { FaEdit } from 'react-icons/fa';
import { NavLink, useNavigate } from "react-router-dom";


const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-icon">👤</div>
      <div className="profile-info">
        <p><strong>Username:</strong> Tharun</p>
        <p><strong>Contact Number:</strong> +91 9080681436</p>
        <p><strong>Email:</strong> tharun@gmail.com</p>
        <p><strong>Department:</strong> Technical</p>
      </div>
     <NavLink to='/usereditprofile'><FaEdit className="edit-icon" /></NavLink>
    </div>
  );
};

export default ProfileCard;
