import React, { useEffect, useState } from 'react';

function ArrearsReport() {
  const [arrears, setArrears] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    // Fetch arrears data from the backend
    fetch('http://localhost:5000/api/arrears')
      .then((response) => response.json())
      .then((data) => setArrears(data))
      .catch((error) => console.error('Error fetching arrears data:', error));
  }, []);

  // Filter arrears by customer ID or name
  const filteredArrears = arrears.filter((arrear) =>
    arrear.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    arrear.customerId.toString().includes(searchTerm)
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArrears = filteredArrears.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredArrears.length / itemsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <h2>Arrears Report</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by Customer Name or ID"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control mb-3"
      />

      {/* Arrears Table */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Due Date</th>
            <th>Outstanding Balance</th>
          </tr>
        </thead>
        <tbody>
          {currentArrears.map((arrear) => (
            <tr key={arrear.id}>
              <td>{arrear.customerId}</td>
              <td>{arrear.customerName}</td>
              <td>{arrear.dueDate}</td>
              <td>{arrear.outstandingBalance.toLocaleString()}</td>
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

export default ArrearsReport;
