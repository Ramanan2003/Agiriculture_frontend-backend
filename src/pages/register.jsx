// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../assets/css/Registration.css';

// function RegistrationForm() {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   async function handleSubmit(e) {
//     e.preventDefault();

//     try {
//       const authenticateResponse = await axios.post('http://localhost:8081/api/v1/auth/register', {
//         name: fullName,
//         email: email,
//         password: password,
//       });

//       console.log('Authentication response:', authenticateResponse.data);

//       const saveResponse = await axios.post('http://localhost:8081/api/users/post', {
//         name: fullName,
//         email: email,
//         password: password,
//       });

//       console.log('Save response:', saveResponse.data);

//       if (authenticateResponse.status === 200) {
//         // Registration successful
//         alert('Registration successful');
//         navigate('/login');
//       } else {
//         // Handle registration error
//         alert('Registration failed');
//       }
//     } catch (error) {
//       console.error('Error registering user:', error);
//       // Handle network error or other exceptions
//       alert('An error occurred during registration');
//     }
//   }

//   return (
//     <div className="bg-color">
//       <div className="registration-form-container">
//         <h2>Agriculture Loan Registration</h2>
//         <form onSubmit={handleSubmit}>
//           <label className="label">
//             Full Name:
//             <input
//               type="text"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               required
//             />
//           </label>

//           <label className="label">
//             Email:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </label>


//           <label className="label">
//             Password:
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </label>

//           <button type="submit">Submit</button>
//           <p>
//             Already have an account? <Link to="/login">Login here</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default RegistrationForm;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/Registration.css';

function RegistrationForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const registerData = {
        // name: fullName,
        email: email,
        password: password,
        username: username,
        mobileNumber: mobileNumber
      };

      const authenticateResponse = await axios.post('http://localhost:8081/api/v1/auth/register', registerData);

        console.log('Authentication response:', authenticateResponse.data);
        const saveResponse = await axios.post('http://localhost:8081/api/users/post', {
            username: username,
            email: email,
            password: password,
            mobileNumber:mobileNumber,
          });

        console.log('Save response:', saveResponse.data);

      if (authenticateResponse.status === 200) {
        // Registration successful
        alert('Registration successful');
        navigate('/login');
      } else {
        // Handle registration error
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle network error or other exceptions
      alert('An error occurred during registration');
    }
  }

  return (
    <div className="bg-color">
      <div className="registration-form-container">
        <h2>Agriculture Loan Registration</h2>
        <form onSubmit={handleSubmit}>
          {/* <label className="label">
            Full Name:
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </label> */}

          <label className="label">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

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
            Mobile Number:
            <input
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
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

          <button type="submit">Submit</button>
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;

