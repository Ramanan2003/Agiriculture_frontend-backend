import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
  // Sample data for demonstration purposes
  const data = [
    { name: 'Jan', loanAmount: 3000 },
    { name: 'Feb', loanAmount: 5000 },
    { name: 'Mar', loanAmount: 7000 },
    // Add more data points as needed
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="loanAmount" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
