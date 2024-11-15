import React, { useState } from 'react';
import './PersonalLoan.css';

const PersonalLoan = () => {
  const [showForm, setShowForm] = useState(false); // State to control the form visibility

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="personal-loan">
      <h2>Personal Loan Application Requirements</h2>
      <p>To apply for a personal loan, you must meet the following eligibility criteria:</p>
      <ul>
        <li>You must be a Kenyan citizen.</li>
        <li>You must have a valid Kenyan National ID.</li>
        <li>You must not have committed any illegal crimes in Kenya.</li>
      </ul>
      <p>Ensure that all the necessary documents are available before proceeding with your application.</p>
      
      {/* Button to toggle form visibility */}
      <button onClick={handleFormToggle}>
        {showForm ? 'Hide Application Form' : 'Apply for Loan'}
      </button>

      {/* Application Form */}
      {showForm && (
        <form className="loan-application-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="middleName">Middle Name</label>
            <input type="text" id="middleName" name="middleName" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div className="form-group">
            <label htmlFor="idNumber">ID Number</label>
            <input type="text" id="idNumber" name="idNumber" required />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" required />
          </div>
          <div className="form-group">
            <label htmlFor="maritalStatus">Marital Status</label>
            <select id="maritalStatus" name="maritalStatus" required>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="loanReason">Reason for Applying</label>
            <textarea id="loanReason" name="loanReason" required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="loanAmount">Amount to Apply</label>
            <input type="number" id="loanAmount" name="loanAmount" required />
          </div>
          <button type="submit" className="submit-btn">Submit Application</button>
        </form>
      )}
    </div>
  );
};

export default PersonalLoan;
