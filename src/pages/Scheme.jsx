// // // pages/Scheme.jsx

// // import React from 'react';
// // import '../assets/css/SchemeStyles.css';

// // const Scheme = () => {
// //   return (
// //     <div className="scheme-container">
// //       <h1 className="scheme-title">Loan Schemes</h1>
// //       <div className="scheme-list">
// //         <div className="scheme-item">
// //           <h2 className="scheme-name">Seasonal Crop Loan</h2>
// //           <p className="scheme-description">
// //             This scheme provides financial assistance to farmers for seasonal agricultural operations,
// //             including the purchase of seeds, fertilizers, and other inputs.
// //           </p>
// //         </div>
// //         <div className="scheme-item">
// //           <h2 className="scheme-name">Farm Equipment Loan</h2>
// //           <p className="scheme-description">
// //             Obtain funding for the purchase of modern farm equipment to enhance efficiency and productivity.
// //           </p>
// //         </div>
// //         <div className="scheme-item">
// //           <h2 className="scheme-name">Livestock Development Loan</h2>
// //           <p className="scheme-description">
// //             Support for farmers involved in animal husbandry, including the purchase and care of livestock.
// //           </p>
// //         </div>
// //         {/* Add more scheme items as needed */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Scheme;

// // DashboardPage.jsx
// import React from 'react';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Chart from '../pages/Chart';  // Assuming you have a Chart component
// import LoanSummary from '../pages/LoanSummary';  // Assuming you have a LoanSummary component
// import RecentTransactions from '../pages/RecentTransaction';  // Assuming you have a RecentTransactions component

// const Scheme = () => {
//   return (
//     <Container maxWidth="xl">
//       <Grid container spacing={3}>
//         {/* Chart */}
//         <Grid item xs={12} md={8} lg={9}>
//           <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
//             <Typography variant="h6" mb={2}>
//               Loan Performance Overview
//             </Typography>
//             <Chart />
//           </Paper>
//         </Grid>
//         {/* Loan Summary */}
//         <Grid item xs={12} md={4} lg={3}>
//           <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
//             <Typography variant="h6" mb={2}>
//               Loan Summary
//             </Typography>
//             <LoanSummary />
//           </Paper>
//         </Grid>
//         {/* Recent Transactions */}
//         <Grid item xs={12}>
//           <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
//             <Typography variant="h6" mb={2}>
//               Recent Transactions
//             </Typography>
//             <RecentTransactions />
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Scheme;

// pages/FarmerGuides.jsx

import React from 'react';
import '../assets/css/SchemeStyles.css';
import Navbar from '../assets/Components/NavBar';

const FarmerGuides = () => {
  const guides = [
    {
      title: 'Crop Rotation Techniques',
      description: 'Learn about the benefits of crop rotation and how to implement it in your fields.',
    },
    {
      title: 'Pest Control Strategies',
      description: 'Effective and eco-friendly pest control methods to protect your crops.',
    },
    {
      title: 'Soil Health Management',
      description: 'Tips for maintaining healthy soil and improving fertility for better yields.',
    },
    {
      title: 'Water Conservation Practices',
      description: 'Conserving water resources and optimizing irrigation for sustainable farming.',
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="scheme-color">
    <div className="farmer-guides-container">
      <h1 className="guides-title">Guides for Farmers</h1>
      <div className="guides-list">
        {guides.map((guide, index) => (
          <div key={index} className="guide-item">
            <h2 className="guide-title">{guide.title}</h2>
            <p className="guide-description">{guide.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>

  );
};

export default FarmerGuides;
