import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const LoanSummary = () => {
  // Sample data for demonstration purposes
  const totalLoans = 150000;
  const pendingLoans = 50000;
  const approvedLoans = 100000;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Loan Summary
        </Typography>
        <Typography>
          Total Loans: ${totalLoans}
        </Typography>
        <Typography>
          Pending Loans: ${pendingLoans}
        </Typography>
        <Typography>
          Approved Loans: ${approvedLoans}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LoanSummary;
