import React from 'react';


import Footer from './components/Footer';
import ProfileCard from './components/ProfileCard';
import FeedbackCard from './components/FeedbackCard';
import './UserProfile.css';
import SidebarOperationTeam from './components/SidebarOprTeam';
import HeaderOpr from './components/HeaderOpr';

const OperatorProfile = () => {
  return (
    <div className="user-profile-container">
      <HeaderOpr />
      <SidebarOperationTeam />

      <main className="profile-content">
        <h2>User Profile</h2>

        <div className="profile-grid">
          <ProfileCard />
          <FeedbackCard />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OperatorProfile;
