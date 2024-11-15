import React, { useState } from 'react';
import './BoostLoan.css';

const BoostLoan = () => {
  const [showForm, setShowForm] = useState(false);

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="boost-loan">
      <h2>Boost Loan Requirements and Terms</h2>
      <p>To apply for a Boost loan, you must meet the following requirements:</p>
      <ul>
        <li>Loan limit eligibility is 2.5x the applicant's savings</li>
        <li>Must be guaranteed by 1-3 guarantors depending on the loan amount:
          <ul>
            <li>Loans above Ksh 10,000 require at least 3 guarantors</li>
            <li>Loans equal to or less than Ksh 5,000 require at least 1 guarantor</li>
          </ul>
        </li>
        <li>Maximum Boost loan amount is Ksh 20,000</li>
        <li>Interest rate of 15% is applied to all Boost loans</li>
        <li>All Boost loans are repayable within a maximum of 1 month</li>
        <li>All Boost loans incur a 2.5% Loan Cover Fee and 2.5% Processing Fee</li>
      </ul>

      {/* Sample Boost Loan Table */}
      <h3>Sample Boost Loan Terms</h3>
      <table className="boost-loan-table">
        <thead>
          <tr>
            <th>Loan Amount (Ksh)</th>
            <th>Interest Rate (%)</th>
            <th>Repayment Period (Months)</th>
            <th>Guarantors Required</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5,000</td>
            <td>15</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>10,000</td>
            <td>15</td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>15,000</td>
            <td>15</td>
            <td>1</td>
            <td>3</td>
          </tr>
          <tr>
            <td>20,000</td>
            <td>15</td>
            <td>1</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>

      <button onClick={handleFormToggle}>
        {showForm ? 'Hide Application Form' : 'Apply for Boost Loan'}
      </button>

      {showForm && (
        <form className="loan-application-form">
          <h3>Boost Loan Application Form</h3>
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
            <label htmlFor="loanAmount">Loan Amount (Max Ksh 20,000)</label>
            <input type="number" id="loanAmount" name="loanAmount" max="20000" required />
          </div>
          <button type="submit" className="submit-btn">Submit Application</button>
        </form>
      )}
    </div>
  );
};

export default BoostLoan;
