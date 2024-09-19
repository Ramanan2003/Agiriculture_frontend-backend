import React from 'react';
import { List, ListItem, ListItemText, Divider, Typography } from '@mui/material';

const RecentTransactions = () => {
  // Sample data for demonstration purposes
  const transactions = [
    { id: 1, description: 'Loan payment received', amount: 2000 },
    { id: 2, description: 'Loan approved', amount: 5000 },
    // Add more transactions as needed
  ];

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Recent Transactions
      </Typography>
      <List>
        {transactions.map((transaction) => (
          <React.Fragment key={transaction.id}>
            <ListItem>
              <ListItemText
                primary={transaction.description}
                secondary={`Amount: $${transaction.amount}`}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default RecentTransactions;
