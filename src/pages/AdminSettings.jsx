import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/AddLoanStyles.css'; // Import CSS file for styling

const AddLoan = () => {
  // State variables for title, description, interest rate, and image URL
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [addedLoan, setAddedLoan] = useState(null); // State to hold the added loan details

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create a new loan object
    const newLoan = {
      title: title,
      description: description,
      interestRate: parseFloat(interestRate), // Convert interestRate to float
      imageUrl: imageUrl // Include imageUrl in the new loan object
    };

    try {
      // Send a POST request to add the new loan using Axios
      const response = await axios.post('http://localhost:8081/loans/submit', newLoan);

      // Check if the request was successful
      if (response.status === 201) {
        console.log('Loan added successfully.');

        // Fetch the added loan details from the backend using GET request
        const addedLoanResponse = await axios.get(`http://localhost:8081/loans/${response.data.id}`);
        
        // Set the added loan details in the state for display
        setAddedLoan(addedLoanResponse.data);

        // Clear form fields after successful submission
        setTitle('');
        setDescription('');
        setInterestRate('');
        setImageUrl('');
      } else {
        console.error('Failed to add loan:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding loan:', error);
    }
  };

  return (
    <div className="add-loan-container">
      <h2>Add Loan</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="interestRate">Interest Rate:</label>
          <input
            type="number"
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            step="0.01"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="url"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      
      {/* Display added loan details */}
      {addedLoan && (
        <div className="added-loan-details">
          <h3>Added Loan Details</h3>
          <p><strong>Title:</strong> {addedLoan.title}</p>
          <p><strong>Description:</strong> {addedLoan.description}</p>
          <p><strong>Interest Rate:</strong> {addedLoan.interestRate}</p>
          <img src={addedLoan.imageUrl} alt="Loan" />
        </div>
      )}
    </div>
  );
};

export default AddLoan;
