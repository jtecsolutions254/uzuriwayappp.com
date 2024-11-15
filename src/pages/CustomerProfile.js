import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CustomerProfile() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [repayments, setRepayments] = useState([]);
  const [arrears, setArrears] = useState([]);
  const [savings, setSavings] = useState(null);

  useEffect(() => {
    // Fetch customer details
    fetch(`http://localhost:5000/api/customers/${id}`)
      .then((response) => response.json())
      .then((data) => setCustomer(data))
      .catch((error) => console.error('Error fetching customer data:', error));

    // Fetch loan repayments for the customer
    fetch(`http://localhost:5000/api/loan-repayments?customerId=${id}`)
      .then((response) => response.json())
      .then((data) => setRepayments(data))
      .catch((error) => console.error('Error fetching repayments:', error));

    // Fetch arrears for the customer
    fetch(`http://localhost:5000/api/arrears?customerId=${id}`)
      .then((response) => response.json())
      .then((data) => setArrears(data))
      .catch((error) => console.error('Error fetching arrears:', error));

    // Fetch savings for the customer
    fetch(`http://localhost:5000/api/savings?customerId=${id}`)
      .then((response) => response.json())
      .then((data) => setSavings(data))
      .catch((error) => console.error('Error fetching savings:', error));
  }, [id]);

  if (!customer) return <div>Loading...</div>;

  return (
    <div>
      <h2>Customer Profile: {customer.name}</h2>
      <p><strong>Email:</strong> {customer.email}</p>
      <p><strong>Phone:</strong> {customer.phone}</p>

      {/* Loan Repayment History */}
      <h4>Loan Repayment History</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {repayments.map((repayment, index) => (
            <tr key={index}>
              <td>{repayment.date}</td>
              <td>{repayment.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Arrears */}
      <h4>Arrears</h4>
      {arrears.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Due Date</th>
              <th>Outstanding Balance</th>
            </tr>
          </thead>
          <tbody>
            {arrears.map((arrear, index) => (
              <tr key={index}>
                <td>{arrear.dueDate}</td>
                <td>{arrear.outstandingBalance.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No arrears</p>
      )}

      {/* Savings */}
      <h4>Savings</h4>
      {savings ? (
        <p>
          <strong>Current Balance:</strong> {savings.balance.toLocaleString()}<br />
          <strong>Last Deposit Date:</strong> {savings.lastDepositDate}
        </p>
      ) : (
        <p>No savings information available</p>
      )}
    </div>
  );
}

export default CustomerProfile;
