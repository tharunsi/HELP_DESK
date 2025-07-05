import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ProfileCard from './components/ProfileCard';
import FeedbackCard from './components/FeedbackCard';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="user-profile-container">
      <Header />
      <Sidebar />

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

export default UserProfile;
