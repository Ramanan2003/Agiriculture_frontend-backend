import React, { useState, useEffect } from 'react';
import '../assets/css/AdminDashboardStyles.css';
import AdminNavbar from '../assets/Components/AdminNavBar';
import axios from 'axios'; // Import Axios for making HTTP requests

const AdminDashboard = () => {
  const [agricultureLoans, setAgricultureLoans] = useState([]);

  useEffect(() => {
    // Fetch agriculture loans data when component mounts
    fetchAgricultureLoans();
  }, []);

  const fetchAgricultureLoans = () => {
    // Make API call to fetch agriculture loans data from backend
    axios.get('http://localhost:8081/loanApplicants')
      .then(response => {
        // Set agriculture loans data in state
        setAgricultureLoans(response.data);
      })
      .catch(error => {
        console.error('Error fetching agriculture loans data:', error);
        // Handle error, maybe display a message to the user
      });
  };

  const approveLoan = (loanId) => {
    // Make API call to approve loan
    axios.post(`http://localhost:8081/loanApplicants/${loanId}/approve`)
      .then(response => {
        // If successful, update loan status in state
        const updatedLoans = agricultureLoans.map((loan) =>
          loan.id === loanId ? { ...loan, status: 'Approved' } : loan
        );
        setAgricultureLoans(updatedLoans);
      })
      .catch(error => {
        console.error('Error approving loan:', error);
        // Handle error, maybe display a message to the user
      });
  };

  const rejectLoan = (loanId) => {
    console.log(loanId);
    // Make API call to reject loan
    axios.post(`http://localhost:8081/loanApplicants/${loanId}/reject`)
      .then(response => {
        // If successful, update loan status in state
        const updatedLoans = agricultureLoans.map((loan) =>
          loan.id === loanId ? { ...loan, status: 'Rejected' } : loan
        );
        setAgricultureLoans(updatedLoans);
      })
      .catch(error => {
        console.error('Error rejecting loan:', error);
        // Handle error, maybe display a message to the user
      });
  };

  return (
    <>
      <AdminNavbar />
      <div className="admin-color">
        <div className="admin-dashboard-container">
          <h2>Agriculture Loan Management Dashboard</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Farmer</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {agricultureLoans.map((loan) => (
                <tr key={loan.loanId}>
                  <td>{loan.loanId}</td>
                  <td>{loan.applicantName}</td>
                  <td>${loan.loanAmountRequired}</td>
                  <td>{loan.status}</td>
                  <td>
                    {loan.status === 'pending' && (
                      <>
                        <button onClick={() => approveLoan(loan.loanId)}>
                          Approve
                        </button>
                        <button onClick={() => rejectLoan(loan.loanId)}>
                          Reject
                        </button>
                      </>
                    )}
                    {loan.status === 'Approved' && (
                      <button disabled>Approved</button>
                    )}
                    {loan.status === 'Rejected' && (
                      <button disabled>Rejected</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Admin Statistics */}
          <div className="admin-stats">
            <h3>Admin Statistics</h3>
            <div className="stat-item">
              <p>Total Loans Processed:</p>
              <span>{agricultureLoans.length}</span>
            </div>
            <div className="stat-item">
              <p>Approved Loans:</p>
              <span>{agricultureLoans.filter((loan) => loan.status === 'Approved').length}</span>
            </div>
            <div className="stat-item">
              <p>Rejected Loans:</p>
              <span>{agricultureLoans.filter((loan) => loan.status === 'Rejected').length}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
