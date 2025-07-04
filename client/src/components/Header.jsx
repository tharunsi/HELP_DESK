import React from 'react';
import './Header.css';
import { FaBell, FaUserCircle, FaCog } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h2 className="header-logo">Helpdesk</h2>
      </div>

      <div className="header-right">
        <select className="lang-select">
          <option>EN</option>
          <option>BN</option>
        </select>
        <FaBell className="header-icon" />
        <FaUserCircle className="header-icon" />
        <FaCog className="header-icon" />
      </div>
    </header>
  );
};

export default Header;
