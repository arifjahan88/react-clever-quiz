import "./Statistics.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Statistics = ({ data }) => {
  console.log(data);
  return (
    <div className="flex justify-center">
      <div className="mt-12">
        <LineChart width={350} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#2563eb"
            activeDot={{ r: 8 }}
          />
        </LineChart>
        <div>
          <p className="font-serif mt-5 border-b-2 border-indigo-200">
            This Charts Show that the Total Questions of our Topics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
