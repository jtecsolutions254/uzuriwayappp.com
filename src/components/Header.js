import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = ({ toggleSidebar }) => (
  <header className="header">
    <div className="menu-icon" onClick={toggleSidebar}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
    <div className="header-content">
      <h1>UZURI WAY SACCO LIMITED</h1>
      <nav className="header-nav">
        <a href="/home-page">Home</a>
        <a href="/loans/boost">Boost Loan</a>
        <a href="/loans/normal">Normal Loans</a>
        
     </nav>
    </div>
  </header>
);

export default Header;