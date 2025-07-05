import React from 'react';
import './Sidebar.css';
import { FaTachometerAlt, FaPlus, FaTicketAlt,FaClipboardCheck, FaChartLine } from 'react-icons/fa';
import { NavLink, useNavigate } from "react-router-dom";

const SidebarOperationTeam = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Helpdesk</h2>
      <ul className="sidebar-menu">
        <NavLink to='/operation-dashboard'><li><FaTachometerAlt /> Dashboard</li></NavLink>
        <NavLink to='/ticketapproval'><li><FaClipboardCheck /> Ticket Approval</li></NavLink>
  
        <NavLink to='/newticket-opr'><li><FaTicketAlt /> My Ticket</li></NavLink>
        <li><FaChartLine /> Performance</li>
      </ul>
    </div>
  );
};

export default SidebarOperationTeam;
