import React from 'react';
import './Sidebar.css';
import { FaTachometerAlt, FaPlus, FaTicketAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Helpdesk</h2>
      <ul className="sidebar-menu">
        <li><FaTachometerAlt /> Dashboard</li>
        <li><FaPlus /> New Ticket</li>
        <li><FaTicketAlt /> My Ticket</li>
      </ul>
    </div>
  );
};

export default Sidebar;
