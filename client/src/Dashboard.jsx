import React from 'react';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './Dashboard.css'; // external CSS file

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <h1 className="dashboard-title">Dashboard</h1>

        <div className="stats-container">
          <div className="stat-box blue">
            <p>Total Tickets</p>
            <h2>12</h2>
          </div>
          <div className="stat-box green">
            <p>Total Solved</p>
            <h2>8</h2>
          </div>
          <div className="stat-box red">
            <p>Total Awaiting Approval</p>
            <h2>2</h2>
          </div>
          <div className="stat-box yellow">
            <p>Total In Progress</p>
            <h2>2</h2>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
