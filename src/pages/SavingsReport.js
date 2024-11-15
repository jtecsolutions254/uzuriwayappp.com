import React, { useEffect, useState } from 'react';

function SavingsReport() {
  const [savings, setSavings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    // Fetch savings data from the backend
    fetch('http://localhost:5000/api/savings')
      .then((response) => response.json())
      .then((data) => setSavings(data))
      .catch((error) => console.error('Error fetching savings data:', error));
  }, []);

  // Filter savings by customer ID or name
  const filteredSavings = savings.filter((saving) =>
    saving.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    saving.customerId.toString().includes(searchTerm)
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSavings = filteredSavings.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredSavings.length / itemsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <h2>Savings Report</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by Customer Name or ID"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control mb-3"
      />

      {/* Savings Table */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Last Deposit Date</th>
            <th>Current Balance</th>
          </tr>
        </thead>
        <tbody>
          {currentSavings.map((saving) => (
            <tr key={saving.id}>
              <td>{saving.customerId}</td>
              <td>{saving.customerName}</td>
              <td>{saving.lastDepositDate}</td>
              <td>{saving.balance.toLocaleString()}</td>
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

export default SavingsReport;
