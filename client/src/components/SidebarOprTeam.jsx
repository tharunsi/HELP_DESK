import React from 'react';
import './Sidebar.css';
import { FaTachometerAlt, FaPlus, FaTicketAlt,FaClipboardCheck, FaChartLine } from 'react-icons/fa';
import { NavLink, useNavigate } from "react-router-dom";

const SidebarOperationTeam = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Helpdesk</h2>
      <ul className="sidebar-menu">
        <li><FaTachometerAlt /> Dashboard</li>
        <li><FaClipboardCheck /> Ticket Approval</li>
  
        <li><FaTicketAlt /> My Ticket</li>
        <li><FaChartLine /> Performance</li>
      </ul>
    </div>
  );
};

export default SidebarOperationTeam;
