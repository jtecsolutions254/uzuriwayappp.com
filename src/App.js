import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import AgentPerformance from './pages/AgentPerformance';
import AccountingReports from './pages/AccountingReports';
import CustomerRegister from './pages/CustomerRegister';
import LoanRepaymentHistory from './pages/LoanRepaymentHistory';
import ArrearsReport from './pages/ArrearsReport';
import SavingsReport from './pages/SavingsReport';
import CustomerProfile from './pages/CustomerProfile';
import PersonalLoan from './pages/PersonalLoan'; // Import the new page
import BusinessLoan from './pages/BusinessLoan';
import StudentLoan from './pages/StudentLoan';
import BoostLoan from './pages/BoostLoan';  // Import the Boost Loan component
import NormalLoans from './pages/NormalLoans'; // Import NormalLoans page
import HomePage from './pages/HomePage'; // Import HomePage
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`flex-grow-1 p-4 ${isSidebarOpen ? 'content-margin' : ''}`}>
        <div className="content">
          <Routes>
          <Route path="/" element={<HomePage />} /> {/* Set HomePage as the default route */}
            <Route path="/agent-performance" element={<AgentPerformance />} />
            <Route path="/accounting-reports" element={<AccountingReports />} />
            <Route path="/customer-register" element={<CustomerRegister />} />
            <Route path="/loan-repayment-history" element={<LoanRepaymentHistory />} />
            <Route path="/arrears-report" element={<ArrearsReport />} />
            <Route path="/savings-report" element={<SavingsReport />} />
            <Route path="/customer-profile/:id" element={<CustomerProfile />} />
            <Route path="/loans/personal" element={<PersonalLoan />} /> {/* New route */}
            <Route path="/loans/business" element={<BusinessLoan />} />
             <Route path="/loans/student" element={<StudentLoan />} />
             <Route path="/loans/boost" element={<BoostLoan />} />
             <Route path="/loans/normal" element={<NormalLoans />} />
             <Route path="/home-page" element={<HomePage />} />
          </Routes>
        </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;