import React from 'react';
import SidebarOprTeam from './components/SidebarOprTeam';
import Footer from './components/Footer';
import './Dashboard.css'; 
import Header from './components/Header';
import { FaChartBar, FaHeadset, FaTools, FaStar } from 'react-icons/fa';
import { NavLink, useNavigate } from "react-router-dom";

const DashboardOperationTeam = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <SidebarOprTeam />
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
         <div className="bottom-widgets">
  <div className="chart-box">
     <FaChartBar className="chart-icon" />
  </div>

  <div className="support-box">
    <div className="team-info">
      <div>
        <FaHeadset className="team-icon" />
        <p><strong>3</strong><br />Technical Supports</p>
      </div>
      <div>
         <FaTools className="team-icon" />
        <p><strong>4</strong><br />Operation Team</p>
      </div>
    </div>
    <div className="feedback">
      <p>Customer Feedback</p>
       <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar style={{ opacity: 0.5 }} />
    </div>
  </div>
</div>

        <Footer />
      </div>
    </div>
  );
};

export default DashboardOperationTeam;
