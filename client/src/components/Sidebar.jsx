import React from 'react';
import './Sidebar.css';
import { FaTachometerAlt, FaPlus, FaTicketAlt } from 'react-icons/fa';
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Helpdesk</h2>
      <ul className="sidebar-menu">
        <NavLink to='/user-dashboard'><li><FaTachometerAlt /> Dashboard</li></NavLink>
      <NavLink to='/newticket'> <li><FaPlus /> New Ticket</li></NavLink>
        <NavLink to='/myticket'><li><FaTicketAlt /> My Ticket</li></NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
