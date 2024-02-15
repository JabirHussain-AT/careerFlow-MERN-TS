import React from 'react';

const CompanyJobsTable : React.FC = () => {
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Job Title</th>
          <th className="py-2 px-4 border-b">Location</th>
          <th className="py-2 px-4 border-b">Posted Date</th>
          {/* Add more header columns as needed */}
        </tr>
      </thead>
      <tbody>
        {/* Sample data, replace with your actual data */}
        <tr>
          <td className="py-2 px-4 border-b">Software Developer</td>
          <td className="py-2 px-4 border-b">City, Country</td>
          <td className="py-2 px-4 border-b">2024-02-15</td>
          {/* Add more rows with data as needed */}
        </tr>
      </tbody>
    </table>
  );
};

export default CompanyJobsTable;
