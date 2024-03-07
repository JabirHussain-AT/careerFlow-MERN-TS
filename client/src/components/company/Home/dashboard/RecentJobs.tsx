import React from 'react';
import format from 'date-fns/format';

interface RecentJobsProps {
  jobsData: any[];
}

const RecentJobs: React.FC<RecentJobsProps> = ({ jobsData }) => {
  // Reverse the order of jobsData and take the first 6 elements
  const recentJobs = jobsData.reverse().slice(0, 6);

  return (
    <div className="bg-gray-100 p-8 font-sans">
      <h2 className="text-2xl font-bold mb-8 text-blue-800">Explore Recent Jobs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentJobs.map((job: any, index: number) => (
          <div key={index} className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-lg font-semibold mb-4">{job.jobTitle}</h3>
            <p className="text-gray-600 mb-4">Expiry: {format(new Date(job.jobExpiry), 'dd-MM-yyyy')}</p>
            <div className="flex items-center justify-between">
              <p className="text-gray-600">Applicants: {job.applicants.length}</p>
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

export default RecentJobs;
