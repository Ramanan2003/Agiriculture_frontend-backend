import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/DashboardStyle.css';
import Navbar from '../assets/Components/NavBar';
import axios from 'axios';

const DashboardPage = () => {
  const [loanId, setLoanId] = useState('');
  const [loanApplicant, setLoanApplicant] = useState(null);
  const [dashboardItems, setDashboardItems] = useState([]);

  useEffect(() => {
    fetchDashboardItems(); // Fetch dashboard items when component mounts
  }, []);

  const fetchDashboardItems = () => {
    // Fetch loans from the backend
    axios.get('http://localhost:8081/loans')
      .then(response => {
        // Transform response data into dashboard items
        const dashboardData = response.data.map(loan => ({
          name: loan.title,
          image: loan.imageUrl,
          description: loan.description,
          route: `/loan/${loan.id}`
        }));
        setDashboardItems(dashboardData);
      })
      .catch(error => {
        console.error('Error fetching dashboard items:', error);
        // Handle error, maybe display a message to the user
      });
  };

  const handleSearch = () => {
    // Make API call to fetch loan applicant details based on loanId
    axios.get(`http://localhost:8081/loanApplicants/${loanId}`)
      .then(response => {
        setLoanApplicant(response.data);
      })
      .catch(error => {
        console.error('Error fetching loan applicant details:', error);
        // Handle error, maybe display a message to the user
      });
  };

  return (
    <>
      <Navbar />

      <div>
        <h2 className="dashboard-title">Welcome to Your Dashboard, User</h2>
        <div className="dashboard-container">
          <h1 className="dashboard-title">Loan Schemes</h1>
          <div className="dashboard-list">
            {dashboardItems.map((item, index) => (
              <div className="dashboard-item" key={index}>
                <Link to={item.route} className="dashboard-button">
                  <h2 className="dashboard-name">{item.name}</h2>
                </Link>
                <img src={item.image} alt={item.name} />
                <p className="dashboard-description">{item.description}</p>
                <div className="dashboard-buttons">
                  <Link to="/loans" className="apply-now-button">
                    Apply Now
                  </Link>
                  <Link to="/" className="know-more-button">Know More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="loan-status-container">
          <h2 className="loan-status-title">Loan Status</h2>
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Search by loan ID"
              value={loanId}
              onChange={(e) => setLoanId(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>Search</button>
          </div>
          {loanApplicant && (
            <div className="loan-details">
              {/* Display loan applicant details */}
              <p>Loan ID: {loanApplicant.loanId}</p>
              <p>Loan Type: {loanApplicant.loanType}</p>
              <p>Applicant Name: {loanApplicant.applicantName}</p>
              <p>Applicant Address: {loanApplicant.applicantAddress}</p>
              <p>Applicant Mobile: {loanApplicant.applicantMobile}</p>
              <p>Applicant Email: {loanApplicant.applicantEmail}</p>
              <p>Applicant Aadhaar: {loanApplicant.applicantAadhaar}</p>
              <p>Applicant Pan: {loanApplicant.applicantPan}</p>
              <p>Applicant Salary: {loanApplicant.applicantSalary}</p>
              <p>Loan Amount Required: {loanApplicant.loanAmountRequired}</p>
              <p>Loan Repayment Months: {loanApplicant.loanRepaymentMonths}</p>
              <p>Status: {loanApplicant.status}</p>
              {/* Add more details as needed */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
