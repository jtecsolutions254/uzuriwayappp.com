import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { CSVLink } from 'react-csv';
import { jsPDF } from 'jspdf';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

function AgentPerformance() {
  // State variables for chart data, agent data, sorting, filtering, and pagination
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Monthly Conversions',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  });

  const [agentData, setAgentData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });
  const [filterTerm, setFilterTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [trendData, setTrendData] = useState({
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'Conversions',
        data: [10, 15, 12],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/agent-performance')
      .then((response) => response.json())
      .then((data) => {
        const labels = data.map((item) => item.name);
        const conversions = data.map((item) => item.conversions);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Monthly Conversions',
              data: conversions,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });

        setAgentData(data);
        setSortedData(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Sorting function
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });

    const sortedArray = [...sortedData].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });

    setSortedData(sortedArray);
  };

  // Filtering function
  const handleFilter = (event) => {
    const term = event.target.value.toLowerCase();
    setFilterTerm(term);
    const filteredData = agentData.filter((agent) =>
      agent.name.toLowerCase().includes(term)
    );
    setSortedData(filteredData);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // PDF export function
  const handlePdfExport = () => {
    const doc = new jsPDF();
    doc.text('Agent Performance Report', 10, 10);
    agentData.forEach((agent, index) => {
      doc.text(`${agent.name} - Conversions: ${agent.conversions}`, 10, 20 + index * 10);
    });
    doc.save('AgentPerformanceReport.pdf');
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Agent Monthly Conversions' },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div>
      <h2>Agent Performance</h2>
      <div className="row">
        {/* Bar chart for Monthly Conversions */}
        <div className="col-md-6">
          <h4>Performance Chart</h4>
          <Bar data={chartData} options={options} />
        </div>

        {/* Line chart for Conversion Trends */}
        <div className="col-md-6">
          <h4>Conversion Trends</h4>
          <Line data={trendData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
        </div>

        {/* Performance Table with sorting, filtering, and pagination */}
        <div className="col-md-12 mt-4">
          <h4>Performance Metrics Table</h4>

          {/* Filter Input */}
          <input
            type="text"
            placeholder="Filter by name"
            value={filterTerm}
            onChange={handleFilter}
            className="form-control mb-3"
          />

          {/* Table structure */}
          <table className="table table-striped">
            <thead>
              <tr>
                <th onClick={() => handleSort('id')}>ID</th>
                <th onClick={() => handleSort('name')}>Name</th>
                <th onClick={() => handleSort('conversions')}>Conversions</th>
                <th onClick={() => handleSort('leads')}>Leads</th>
                <th onClick={() => handleSort('totalSales')}>Total Sales</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((agent) => (
                <tr key={agent.id}>
                  <td>{agent.id}</td>
                  <td>
                    <Link to={`/agent-details/${agent.id}`}>{agent.name}</Link>
                  </td>
                  <td>{agent.conversions}</td>
                  <td>{agent.leads}</td>
                  <td>{agent.totalSales}</td>
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

          {/* Export Buttons */}
          <div className="mb-3 mt-3">
            <button onClick={handlePdfExport} className="btn btn-outline-secondary">
              Export to PDF
            </button>
            <CSVLink data={agentData} filename="AgentPerformanceReport.csv" className="btn btn-outline-secondary ml-2">
              Export to CSV
            </CSVLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentPerformance;
