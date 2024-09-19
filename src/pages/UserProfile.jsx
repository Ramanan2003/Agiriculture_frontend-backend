import React from 'react';
import { useSelector } from 'react-redux';  // Import useSelector from react-redux to access the Redux store
import '../assets/css/UserProfileStyle.css';

const UserProfile = () => {
  // Use the useSelector hook to access the Redux store
  const user = useSelector((state) => state.user.user);

  // Check if user is logged in before displaying the profile
  if (!user) {
    return <p>User not logged in. Please log in to view the profile.</p>;
  }

  const { fullName, email, phone, address } = user;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>User Profile</h2>
      </div>
      <div className="profile-info">
        <div className="profile-picture">
          {/* You can replace the placeholder URL with the actual profile picture */}
          <img src="src\assets\images\soorya.png" alt="Profile" />
        </div>
        <div className="profile-details">
          <h3>{fullName}</h3>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Address: {address}</p>
        </div>
      </div>
      <div className="loan-details">
        <h3>Loan Information</h3>
        {/* You can replace the placeholder loan details with actual loan information */}
        <p>Loan Type: Seasonal Crop Loan</p>
        <p>Loan Amount: $10,000</p>
        <p>Status: Approved</p>
        <p>Next Payment Due: 2024-03-01</p>
      </div>
    </div>
  );
};

export default UserProfile;
