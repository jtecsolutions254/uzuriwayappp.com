import React, { useEffect, useState } from 'react';

function LoanRepaymentHistory() {
  const [repayments, setRepayments] = useState([]); // Initialize repayments here
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    // Fetch loan repayment data from the backend
    fetch('http://localhost:5000/api/loan-repayments')
      .then((response) => response.json())
      .then((data) => setRepayments(data))
      .catch((error) => console.error('Error fetching repayment data:', error));
  }, []);

  // Filter repayments by customer ID or name
  const filteredRepayments = repayments.filter((repayment) =>
    repayment.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    repayment.customerId.toString().includes(searchTerm)
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRepayments = filteredRepayments.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredRepayments.length / itemsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <h2>Loan Repayment History</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by Customer Name or ID"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control mb-3"
      />

      {/* Repayment Table */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Payment Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {currentRepayments.map((repayment) => (
            <tr key={repayment.id}>
              <td>{repayment.customerId}</td>
              <td>{repayment.customerName}</td>
              <td>{repayment.date}</td>
              <td>{repayment.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={i + 1 === currentPage ? 'btn btn-primary' : 'btn btn-light'}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LoanRepaymentHistory;
