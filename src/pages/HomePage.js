import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Uzuri Way Loans Sacco</h1>
      <p>We are dedicated to providing financial support and affordable loan solutions for our members. Uzuri Way Loans Sacco is committed to helping individuals and businesses grow by offering flexible financial products tailored to their needs.</p>

      {/* Mission and Vision Section */}
      <div className="mission-vision">
        <h2>Our Mission</h2>
        <p>To empower our members by providing reliable and accessible financial services, fostering economic growth and financial independence.</p>
        
        <h2>Our Vision</h2>
        <p>To be a leading Sacco in Kenya, known for trustworthiness, efficiency, and commitment to supporting our members' financial goals.</p>
      </div>

      {/* Loan Options Overview */}
      <div className="loan-overview">
        <h2>Our Loan Products</h2>
        <p>We offer a variety of loan products to meet your financial needs:</p>

        <ul className="loan-types">
          <li>
            <h3>Personal Loan</h3>
            <p>A loan tailored for individuals to meet personal financial needs. <Link to="/loans/personal">Learn More</Link></p>
          </li>
          <li>
            <h3>Business Loan (Biashara Loan)</h3>
            <p>Designed for entrepreneurs and businesses looking for capital. <Link to="/loans/business">Learn More</Link></p>
          </li>
          <li>
            <h3>School Fees Loan</h3>
            <p>Helps students and families finance educational expenses. <Link to="/loans/student">Learn More</Link></p>
          </li>
          <li>
            <h3>Boost Loan</h3>
            <p>Short-term loan for quick financial support with flexible terms. <Link to="/loans/boost">Learn More</Link></p>
          </li>
        </ul>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta">
        <h2>Join Uzuri Way Loans Sacco</h2>
        <p>Become a member and unlock access to reliable financial solutions designed to help you achieve your financial goals.</p>
        <Link to="/membership" className="join-btn">Become a Member</Link>
      </div>
    </div>
  );
};

export default HomePage;
