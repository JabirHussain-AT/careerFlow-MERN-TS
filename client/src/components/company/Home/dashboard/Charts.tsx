import React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts";

const Charts: React.FC = () => {
  const lineChartData = [
    { name: "Jan", uv: 400, pv: 2400 },
    { name: "Feb", uv: 300, pv: 1398 },
    { name: "Mar", uv: 200, pv: 9800 },
    { name: "Feb", uv: 300, pv: 1398 },
    { name: "Mar", uv: 200, pv: 9800 },
    // Add more data points as needed
  ];

  const barChartData = [
    { name: "Category 1", value: 20 },
    { name: "Category 2", value: 45 },
    { name: "Category 3", value: 70 },
    // Add more data points as needed
  ];

  const areaChartData = [
    { name: "Jan", uv: 300, pv: 800 },
    { name: "Feb", uv: 200, pv: 1200 },
    { name: "Mar", uv: 400, pv: 1800 },
    // Add more data points as needed
  ];

  return (
    <div className="flex m-3 gap-3 w-full">
      {/* Line Chart */}
      <div className="w-fullw-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3  mb-4   ">
        <div className="border rounded shadow-md p-3 h-auto">
          <LineChart
            width={260}
            height={130}
            data={lineChartData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            <Line type="monotone" dataKey="pv" stroke="#387908" />
          </LineChart>
          <div className="w-full text-center p-3">
            <h1 className="font-bold text-lg">Jobs</h1>
            <p>The Count of Job Posting </p>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4">
        <div className="border rounded shadow-md w-full p-3 h-auto">
          <BarChart
           width={260}
           height={130}
            data={barChartData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
          <div className="w-full text-center p-3">
            <h1 className="font-bold text-lg">No. Of Applicants</h1>
            <p>Count of Applicants In recents</p>
          </div>
        </div>
      </div>

      {/* Area Chart */}
      <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4">
        <div className="border rounded shadow-xl w-full p-3 h-auto">
          <AreaChart
             width={260}
             height={130}
            data={areaChartData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Area type="monotone" dataKey="uv" fill="#8884d8" />
            <Area type="monotone" dataKey="pv" fill="#82ca9d" />
          </AreaChart>
          <div className="w-full text-center p-3">
            <h1 className="font-bold text-lg">Area Chart</h1>
            <p>Additional information</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
