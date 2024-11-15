import React from 'react';
import { Link } from 'react-router-dom';
import './NormalLoans.css';

const NormalLoans = () => {
  return (
    <div className="normal-loans">
      <h2>Normal Loan Options</h2>
      <p>Select from a variety of loan options to meet your needs.</p>

      <div className="loan-list">
        {/* Personal Loan */}
        <div className="loan-item">
          <h3>Personal Loan</h3>
          <p>A loan tailored for individuals looking to meet personal financial needs.</p>
          <Link to="/loans/personal" className="loan-link">Learn More / Apply</Link>
        </div>

        {/* Business Loan */}
        <div className="loan-item">
          <h3>Biashara Loan</h3>
          <p>Designed for entrepreneurs and businesses seeking additional capital.</p>
          <Link to="/loans/business" className="loan-link">Learn More / Apply</Link>
        </div>

        {/* Student Loan */}
        <div className="loan-item">
          <h3>School fees Loan</h3>
          <p>Helps students finance their education and related expenses.</p>
          <Link to="/loans/student" className="loan-link">Learn More / Apply</Link>
        </div>

        {/* Boost Loan */}
        <div className="loan-item">
          <h3>Boost Loan</h3>
          <p>Short-term loan for quick financial support with flexible terms.</p>
          <Link to="/loans/boost" className="loan-link">Learn More / Apply</Link>
        </div>

        {/* Add additional loans here if applicable */}
      </div>

      {/* Loan Repayment Table */}
      <div className="loan-repayment-table">
        <h3>Normal Loans Sample</h3>

        {/* Loan Repayment in 6 Months */}
        <h4>Loan Repayment in 6 Months</h4>
        <table>
          <thead>
            <tr>
              <th>Principal</th>
              <th>Interest</th>
              <th>Loan Processing Fees</th>
              <th>Loan Cover</th>
              <th>Total</th>
              <th>Monthly Installments</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>10,000</td><td>1,500</td><td>250</td><td>250</td><td>12,000</td><td>2,000</td></tr>
            <tr><td>20,000</td><td>3,000</td><td>375</td><td>250</td><td>23,625</td><td>3,938</td></tr>
            <tr><td>30,000</td><td>4,500</td><td>500</td><td>250</td><td>35,250</td><td>5,875</td></tr>
            <tr><td>40,000</td><td>6,000</td><td>625</td><td>250</td><td>46,875</td><td>7,813</td></tr>
            <tr><td>50,000</td><td>7,500</td><td>750</td><td>250</td><td>58,500</td><td>9,750</td></tr>
            <tr><td>60,000</td><td>9,000</td><td>875</td><td>250</td><td>70,125</td><td>11,688</td></tr>
            <tr><td>70,000</td><td>10,500</td><td>1,000</td><td>250</td><td>81,750</td><td>13,625</td></tr>
            <tr><td>80,000</td><td>12,000</td><td>1,125</td><td>250</td><td>93,375</td><td>15,563</td></tr>
            <tr><td>90,000</td><td>13,500</td><td>1,250</td><td>250</td><td>105,000</td><td>17,500</td></tr>
            <tr><td>100,000</td><td>15,000</td><td>1,375</td><td>250</td><td>116,625</td><td>19,438</td></tr>
          </tbody>
        </table>

        {/* Loan Repayment in 12 Months */}
        <h4>Loan Repayment in 12 Months</h4>
        <table>
          <thead>
            <tr>
              <th>Principal</th>
              <th>Interest</th>
              <th>Loan Processing Fees</th>
              <th>Loan Cover</th>
              <th>Total</th>
              <th>Monthly Installments</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>10,000</td><td>3,000</td><td>250</td><td>250</td><td>13,500</td><td>1,125</td></tr>
            <tr><td>20,000</td><td>6,000</td><td>375</td><td>250</td><td>26,625</td><td>2,219</td></tr>
            <tr><td>30,000</td><td>9,000</td><td>500</td><td>250</td><td>39,750</td><td>3,313</td></tr>
            <tr><td>40,000</td><td>12,000</td><td>625</td><td>250</td><td>52,875</td><td>4,406</td></tr>
            <tr><td>50,000</td><td>15,000</td><td>750</td><td>250</td><td>66,000</td><td>5,500</td></tr>
            <tr><td>60,000</td><td>18,000</td><td>875</td><td>250</td><td>79,125</td><td>6,594</td></tr>
            <tr><td>70,000</td><td>21,000</td><td>1,000</td><td>250</td><td>92,250</td><td>7,688</td></tr>
            <tr><td>80,000</td><td>24,000</td><td>1,125</td><td>250</td><td>105,375</td><td>8,781</td></tr>
            <tr><td>90,000</td><td>27,000</td><td>1,250</td><td>250</td><td>118,500</td><td>9,875</td></tr>
            <tr><td>100,000</td><td>30,000</td><td>1,375</td><td>250</td><td>131,625</td><td>10,969</td></tr>
          </tbody>
        </table>

        {/* Loan Repayment in 18 Months */}
        <h4>Loan Repayment in 18 Months</h4>
        <table>
          <thead>
            <tr>
              <th>Principal</th>
              <th>Interest</th>
              <th>Loan Processing Fees</th>
              <th>Loan Cover</th>
              <th>Total</th>
              <th>Monthly Installments</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>10,000</td><td>4,500</td><td>250</td><td>250</td><td>15,000</td><td>833</td></tr>
            <tr><td>20,000</td><td>9,000</td><td>375</td><td>250</td><td>29,625</td><td>1,646</td></tr>
            <tr><td>30,000</td><td>13,500</td><td>500</td><td>250</td><td>44,250</td><td>2,458</td></tr>
            <tr><td>40,000</td><td>18,000</td><td>625</td><td>250</td><td>58,875</td><td>3,271</td></tr>
            <tr><td>50,000</td><td>22,500</td><td>750</td><td>250</td><td>73,500</td><td>4,083</td></tr>
            <tr><td>60,000</td><td>27,000</td><td>875</td><td>250</td><td>88,125</td><td>4,896</td></tr>
            <tr><td>70,000</td><td>31,500</td><td>1,000</td><td>250</td><td>102,750</td><td>5,708</td></tr>
            <tr><td>80,000</td><td>36,000</td><td>1,125</td><td>250</td><td>117,375</td><td>6,521</td></tr>
            <tr><td>90,000</td><td>40,500</td><td>1,250</td><td>250</td><td>132,000</td><td>7,333</td></tr>
            <tr><td>100,000</td><td>45,000</td><td>1,375</td><td>250</td><td>146,625</td><td>8,146</td></tr>
          </tbody>
        </table>

        {/* Loan Repayment in 24 Months */}
        <h4>Loan Repayment in 24 Months</h4>
        <table>
          <thead>
            <tr>
              <th>Principal</th>
              <th>Interest</th>
              <th>Loan Processing Fees</th>
              <th>Loan Cover</th>
              <th>Total</th>
              <th>Monthly Installments</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>10,000</td><td>6,000</td><td>250</td><td>250</td><td>16,500</td><td>688</td></tr>
            <tr><td>20,000</td><td>12,000</td><td>375</td><td>250</td><td>32,625</td><td>1,359</td></tr>
            <tr><td>30,000</td><td>18,000</td><td>500</td><td>250</td><td>48,750</td><td>2,031</td></tr>
            <tr><td>40,000</td><td>24,000</td><td>625</td><td>250</td><td>64,875</td><td>2,703</td></tr>
            <tr><td>50,000</td><td>30,000</td><td>750</td><td>250</td><td>81,000</td><td>3,375</td></tr>
            <tr><td>60,000</td><td>36,000</td><td>875</td><td>250</td><td>97,125</td><td>4,046</td></tr>
            <tr><td>70,000</td><td>42,000</td><td>1,000</td><td>250</td><td>113,250</td><td>4,719</td></tr>
            <tr><td>80,000</td><td>48,000</td><td>1,125</td><td>250</td><td>129,375</td><td>5,391</td></tr>
            <tr><td>90,000</td><td>54,000</td><td>1,250</td><td>250</td><td>145,500</td><td>6,063</td></tr>
            <tr><td>100,000</td><td>60,000</td><td>1,375</td><td>250</td><td>161,625</td><td>6,734</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NormalLoans;
