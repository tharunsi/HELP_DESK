import React from 'react';
import './ProfileCard.css';
import { FaEdit } from 'react-icons/fa';


const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-icon">👤</div>
      <div className="profile-info">
        <p><strong>Username:</strong> JohnDoe</p>
        <p><strong>Contact Number:</strong> +91 9876543210</p>
        <p><strong>Email:</strong> john@example.com</p>
        <p><strong>Department:</strong> Technical</p>
      </div>
     <FaEdit className="edit-icon" />
    </div>
  );
};

export default ProfileCard;
