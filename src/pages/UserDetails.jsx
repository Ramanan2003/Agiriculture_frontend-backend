import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../assets/Components/AdminNavBar";
const UserDetails = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/users/use');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:8081/api/users/${id}');
      setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      {/* <AdminNavBar /> */}
      <h2>User Details</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            Username: {user.username}<br />
            Email: {user.email}<br />
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;