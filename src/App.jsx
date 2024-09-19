import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './others/store';  // Replace with the actual path to your Redux store
import Home from './pages/Home';
import About from './pages/About';
import LoginPage from './pages/login';
import Registration from './pages/register';
import FundAllocationPage from './pages/FundAllocation';
import Scheme from './pages/Scheme';
import LoanImplementation from './pages/LoanImplementation';
import DashboardPage from './pages/DashboardPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashBoard';
import UserProfile from './pages/UserProfile';
import AdminSettings from './pages/AdminSettings';
import UserDetails from './pages/UserDetails';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Your routes */}
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/fund allocation" element={<FundAllocationPage />} />
          <Route path="/schemes" element={<Scheme />} />
          <Route path="/loans" element={<LoanImplementation />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/about us" element={<About />} />
          <Route path="/addloan" element={<AdminSettings />} />
          <Route path="/admin-home" element={<UserDetails/>}/>
          {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
