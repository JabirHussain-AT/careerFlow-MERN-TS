import { fetchJobsMain } from '@/redux/actions/userActions';
import { AppDispatch } from '@/redux/store';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const MySavedJobs: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [savedJobs, setSavedJobs] = useState([
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Co.',
      location: 'San Francisco, CA',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 2,
      title: 'Data Analyst',
      company: 'Data Corp',
      location: 'New York, NY',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 3,
      title: 'UX Designer',
      company: 'Design Studio',
      location: 'Los Angeles, CA',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await dispatch(
          fetchJobsMain({
            categories: '',
            jobType: '',
            salary: '',
            search: '',
            page: 0,
          })
        );
        console.log("🚀 ~ file: MySavedJobs.tsx:54 ~ fetchData ~ result:", result)
      
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
      <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">My Saved Jobs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedJobs.map((job: any) => (
            <div key={job.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
                <p className="text-gray-600 mb-2">{job.company}</p>
                <p className="text-gray-600 mb-4">{job.location}</p>
                <p className="text-sm text-gray-700">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySavedJobs;
