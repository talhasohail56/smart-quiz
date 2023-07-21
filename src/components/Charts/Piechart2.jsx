import React from 'react';
import { Cell, Pie, PieChart } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 80 }
];
const COLORS = ['#00C49F', '#FFBB28'];

const Piechart2 = () => {
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    
    </PieChart>
  );
};

export default Piechart2;
