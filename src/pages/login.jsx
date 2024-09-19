import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios library
import '../assets/css/LoginStyle.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const authenticateResponse = await axios.post('http://localhost:8081/api/v1/auth/authenticate', {
        email: email, // Assuming username input is for email
        password: password,
      });

      console.log('Authentication response:', authenticateResponse.data);

      // Assuming authentication is successful if the response is received without error
      setIsLoggedIn(true);
      if (email.includes('@admin.com')) {
        navigate('/admin/dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Authentication failed', error);
      alert("Invalid credentials");  
      console.log('Sign-in failed. Please fix errors.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Additional logic for handling logout in a real application
  };

  const handleAdminLogin = () => {
    // Navigate to the AdminLogin page
    navigate('/admin/login');
  };

  return (
    <div className="bg-color">
      <div className='login-container'>
        {isLoggedIn ? (
          <div>
            <p>Welcome, {username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h2 className='login-h2'>Login</h2>
            <form className='login-form' onSubmit={handleLogin}>
              <label className='login-label'>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='login-input'
                />
              </label>
              <br />
              <label className='login-label'>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='login-input'
                />
              </label>
              <br />
              <button type="submit" className='login-button'>
                Login
              </button>
              <p className='login-p'>Don't have an account? <Link to="/Register" className='login-a'>Sign up here</Link></p>
              {/* Add the button for Admin login */}
              <button onClick={handleAdminLogin} className='login-button admin-login-button'>
                Admin Login
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
