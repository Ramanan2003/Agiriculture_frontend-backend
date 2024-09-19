
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/AdminLoginStyle.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the provided username and password are correct
    if (username === 'admin' && password === 'admin1234') {
      // Successful login, navigate to the admin dashboard
      navigate('/admin/dashboard');
    } else {
      // Invalid credentials, display an error message
      setError('Invalid username or password');
    }
  };

  return (
   
    <div className="admin-color">
    
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <label className="label">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label className="label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
    </div>
  );
};

export default AdminLogin;

