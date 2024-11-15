import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <nav
      className={`sidebar d-flex flex-column p-3 bg-light ${isOpen ? 'show' : 'hide'}`}
      style={{ height: '100vh', width: '200px', position: 'fixed', left: 0, top: 0 }}
    >
      <button className="close-btn" onClick={toggleSidebar}>X</button>
      <h2>Menu</h2>
      <div className="links-container">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/" className="nav-link">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/agent-performance" className="nav-link">Agent Performance</Link>
          </li>
          <li className="nav-item">
            <Link to="/accounting-reports" className="nav-link">Accounting Reports</Link>
          </li>
          <li className="nav-item">
            <Link to="/customer-register" className="nav-link">Customer Register</Link>
          </li>
          <li className="nav-item">
            <Link to="/loan-repayment-history" className="nav-link">Loan Repayment History</Link>
          </li>
          <li className="nav-item">
            <Link to="/arrears-report" className="nav-link">Arrears Report</Link>
          </li>
          <li className="nav-item">
            <Link to="/savings-report" className="nav-link">Savings Report</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
