import React, { useState } from 'react';
import axios from 'axios';
import "../assets/css/FundAllocationPage.css"
import Navbar from '../assets/Components/NavBar';

const LoanApplicationForm = () => {
  const [formData, setFormData] = useState({
    loanType: '',
    applicantName: '',
    applicantAddress: '',
    applicantMobile: '',
    applicantEmail: '',
    applicantAadhaar: '',
    applicantPan: '',
    applicantSalary: '',
    loanAmountRequired: '',
    loanRepaymentMonths: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('httplocalhost:8081/loans/submit', formData)
      .then(response => {
        console.log('Loan application submitted:', response.data);
        alert('Loan application submitted successfully!');
      })
      .catch(error => {
        console.error('Error submitting loan application:', error);
        alert('Failed to submit loan application. Please try again.');
      });
  };

  return (
    <>
    <Navbar/>
    <div className="loan-form-container">
      <h2>Loan Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="loanType">Loan Type:</label>
          <input type="text" id="loanType" name="loanType" value={formData.loanType} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="applicantName">Applicant Name:</label>
          <input type="text" id="applicantName" name="applicantName" value={formData.applicantName} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="applicantAddress">Applicant Address:</label>
          <input type="text" id="applicantAddress" name="applicantAddress" value={formData.applicantAddress} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="applicantMobile">Applicant Mobile:</label>
          <input type="text" id="applicantMobile" name="applicantMobile" value={formData.applicantMobile} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="applicantEmail">Applicant Email:</label>
          <input type="email" id="applicantEmail" name="applicantEmail" value={formData.applicantEmail} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="applicantAadhaar">Applicant Aadhaar:</label>
          <input type="text" id="applicantAadhaar" name="applicantAadhaar" value={formData.applicantAadhaar} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="applicantPan">Applicant PAN:</label>
          <input type="text" id="applicantPan" name="applicantPan" value={formData.applicantPan} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="applicantSalary">Applicant Salary:</label>
          <input type="text" id="applicantSalary" name="applicantSalary" value={formData.applicantSalary} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="loanAmountRequired">Loan Amount Required:</label>
          <input type="text" id="loanAmountRequired" name="loanAmountRequired" value={formData.loanAmountRequired} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="loanRepaymentMonths">Loan Repayment Months:</label>
          <input type="text" id="loanRepaymentMonths" name="loanRepaymentMonths" value={formData.loanRepaymentMonths} onChange={handleInputChange} />
        </div>
        <button type="submit" className="submit-button">Submit Application</button>
      </form>
    </div>
    </>
  );
};

export default LoanApplicationForm;
