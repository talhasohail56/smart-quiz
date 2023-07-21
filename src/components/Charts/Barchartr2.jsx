import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Mughira',
    Marks: 90
  } ,{
    name: 'Ahmed',
    Marks: 70
  }, {
    name: 'Waiz',
    Marks: 95
    
  }
];

const Barchart2 = () => {
  return (
    
      <BarChart width={500} height={500} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Marks" fill="#8884d8" barSize={50} />
        {/* Add more <Bar /> components with different colors if needed */}
      </BarChart>
    
  );
};

export default Barchart2;
