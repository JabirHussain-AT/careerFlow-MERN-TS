import React from "react";

const jobData = [
  { title: "Full Stack Developer", company: "Nomad", type: "Full Time", category: "Engineering", applications: 6 },
  { title: "Full Stack Developer", company: "Nomad", type: "Full Time", category: "Engineering", applications: 6 },
  { title: "Full Stack Developer", company: "Nomad", type: "Full Time", category: "Engineering", applications: 6 },
  { title: "Frontend Developer", company: "TechCo", type: "Part Time", category: "Engineering", applications: 8 },
  // Add more job data as needed
];

const AllJobs: React.FC = () => {
  return (
    <div className="mx-5 my-5">
      <div className="w-full bg-white h-auto p-5">
        <div className="mb-8">
          <h1 className="font-bold text-xl font-sans mb-2 text-indigo-800">All Jobs</h1>
          <p className="text-sm font-semibold text-gray-600">Showing {jobData.length} results</p>
        </div>
        {/* job card section starts from here */}
        <div className="w-full flex flex-wrap justify-center my-5">
          {jobData.map((job, index) => (
            <div key={index} className="w-full lg:w-11/12 border rounded-md p-5 lg:flex lg:justify-between mb-5 shadow-md">
              <div className="lg:w-3/12 flex items-center mb-4 lg:mb-0">
                <img
                  className="w-12 h-12 object-cover rounded-full"
                  src="https://th.bing.com/th?id=OIP.QrXqKG_hGsR9qOSODO8m2QHaGw&w=261&h=238&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                  alt="logo"
                />
              </div>
              <div className="lg:w-6/12 lg:pl-4 h-16">
                <h1 className="font-bold text-md font-sans mb-2 text-indigo-800">{job.title}</h1>
                <div className="flex text-gray-500 text-sm flex-wrap gap-4">
                  <h1>{job.company}</h1>
                </div>
                <div className="flex flex-wrap gap-4 mt-2">
                  <p className="font-sans text-center text-xs bg-green-500 text-white rounded px-2 font-semibold">
                    {job.type}
                  </p>
                  <p className="font-sans text-center text-xs bg-blue-500 text-white font-semibold px-3 rounded-md">
                    {job.category}
                  </p>
                </div>
              </div>
              <div className="lg:w-3/12 flex items-center justify-end">
                <div className="flex flex-col items-center">
                  <button className="px-4 py-2 mt-2 bg-blue-700 text-white rounded-md hover:bg-blue-800">
                    Apply
                  </button>
                  <p className="text-gray-500 text-sm mt-2">{job.applications} applications</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
