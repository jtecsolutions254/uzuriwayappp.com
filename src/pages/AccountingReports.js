import React, { useEffect, useState } from 'react';

function AccountingReports() {
  const [profitLossData, setProfitLossData] = useState([]);
  const [trialBalanceData, setTrialBalanceData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch('http://localhost:5000/api/profit-loss')
      .then((response) => response.json())
      .then((data) => setProfitLossData(data))
      .catch((error) => console.error('Error fetching profit & loss data:', error));

    fetch('http://localhost:5000/api/trial-balance')
      .then((response) => response.json())
      .then((data) => setTrialBalanceData(data))
      .catch((error) => console.error('Error fetching trial balance data:', error));
  }, []);

  // Calculate total for income, expenses, debits, and credits
  const calculateTotal = (data, key) => data.reduce((total, item) => total + item[key], 0);

  // Net Profit Calculation
  const totalIncome = calculateTotal(profitLossData, 'income');
  const totalExpense = calculateTotal(profitLossData, 'expense');
  const netProfit = totalIncome - totalExpense;

  // Trial Balance Difference Calculation
  const totalDebit = calculateTotal(trialBalanceData, 'debit');
  const totalCredit = calculateTotal(trialBalanceData, 'credit');
  const balanceDifference = totalDebit - totalCredit;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProfitLossItems = profitLossData.slice(indexOfFirstItem, indexOfLastItem);
  const currentTrialBalanceItems = trialBalanceData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPagesProfitLoss = Math.ceil(profitLossData.length / itemsPerPage);
  const totalPagesTrialBalance = Math.ceil(trialBalanceData.length / itemsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <h2>Client's Statements\</h2>

      {/* Profit & Loss Section */}
      <div className="mt-4">
        <h4>Profit & Loss Report</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Description</th>
              <th>Income</th>
              <th>Expense</th>
            </tr>
          </thead>
          <tbody>
            {currentProfitLossItems.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>{item.income.toLocaleString()}</td>
                <td>{item.expense.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td><strong>Total</strong></td>
              <td>{totalIncome.toLocaleString()}</td>
              <td>{totalExpense.toLocaleString()}</td>
            </tr>
            <tr>
              <td><strong>Net Profit</strong></td>
              <td colSpan="2" className={netProfit >= 0 ? 'text-success' : 'text-danger'}>
                {netProfit.toLocaleString()}
              </td>
            </tr>
          </tfoot>
        </table>

        {/* Pagination for Profit & Loss */}
        <div>
          {[...Array(totalPagesProfitLoss)].map((_, i) => (
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

      {/* Trial Balance Section */}
      <div className="mt-4">
        <h4>Trial Balance</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Description</th>
              <th>Debits</th>
              <th>Credits</th>
            </tr>
          </thead>
          <tbody>
            {currentTrialBalanceItems.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>{item.debit.toLocaleString()}</td>
                <td>{item.credit.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td><strong>Total</strong></td>
              <td>{totalDebit.toLocaleString()}</td>
              <td>{totalCredit.toLocaleString()}</td>
            </tr>
            <tr>
              <td><strong>Balance Difference</strong></td>
              <td colSpan="2" className={balanceDifference === 0 ? 'text-success' : 'text-danger'}>
                {balanceDifference.toLocaleString()}
              </td>
            </tr>
          </tfoot>
        </table>

        {/* Pagination for Trial Balance */}
        <div>
          {[...Array(totalPagesTrialBalance)].map((_, i) => (
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
    </div>
  );
}

export default AccountingReports;
