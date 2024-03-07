import React from 'react';

const RecentJobs: React.FC = () => {
  // Dummy data
  const jobsData = [
    {
      title: 'Software Engineer',
      expiry: '2024-03-15',
      applicants: 25,
    },
    {
      title: 'Data Analyst',
      expiry: '2024-03-20',
      applicants: 18,
    },
    {
      title: 'Product Manager',
      expiry: '2024-03-25',
      applicants: 30,
    },
  ];

  return (
    <div className="bg-gray-100 p-8 font-sans">
      <h2 className="text-2xl font-bold mb-8 text-blue-800">Explore Recent Jobs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobsData.map((job, index) => (
          <div key={index} className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-2xl font-semibold mb-4">{job.title}</h3>
            <p className="text-gray-600 mb-4">Expiry: {job.expiry}</p>
            <div className="flex items-center justify-between">
              <p className="text-gray-600">Applicants: {job.applicants}</p>
              <button className="text-blue-500 hover:underline focus:outline-none">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentJobs
