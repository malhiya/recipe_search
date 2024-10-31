import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Label } from 'recharts';
import './Histogram.css'; 

const Histogram = ({ data }) => {
  return (
    <div className="chart-container">
      <h2>Cooking Time Distribution</h2>
      <BarChart width={400} height={300} data={data}> {/* Adjusted dimensions */}

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 10, right: 10 }}>
        <Label 
            value="Cooking Time (minutes)" 
            position="bottom" 
            offset={-10}  // Adjust this value to move the label up or down
            style={{ textAnchor: 'middle' }} 
          />
        </XAxis>
        <YAxis>
          <Label value="Number of Recipes" angle={-90} position="insideLeft" />
        </YAxis>
        <Tooltip />
        <Bar dataKey="count" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Histogram;

