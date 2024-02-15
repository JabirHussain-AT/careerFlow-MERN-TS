import React , { useState , useEffect } from "react";
import JobDetailsModal from '../../../components/company/Jobs/JobDetailsModal'
import { fetchComJobs } from "@/redux/actions/companyActions";

interface CompanyJobsTableProps {
  Ijobs: {
    _id: string;
    jobTitle: string;
    postedDate: string;
    category: string;
    vacancy: number;
    noOfApplications: number;
  }[];
  onViewApplicants?: (jobId: string) => void;
  onMoreDetails?: (jobId: string) => void;
}

const CompanyJobsTable: React.FC<CompanyJobsTableProps> = ({
  Ijobs,
  onViewApplicants,
  onMoreDetails,
}) => {

  const [jobs , setJobs] =  useState<any[]>([])  
  const [selectedJob, setSelectedJob] = useState<{
    _id: string;
    jobTitle: string;
    postedDate: string;
    category: string;
    vacancy: number;
    noOfApplications: number;
  } | null>(null);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchComJobs();
        setJobs(data)
      } catch (error) {
        console.error('Error fetching company jobs:', error);
      }
    };

    fetchData(); 
  }, []);



  const handleMoreDetails = (jobId: string) => {
    const job = jobs.find((j) => j._id === jobId);
    if (job) {
      setSelectedJob(job);
    }
  };

  const closeModal = () => {
    setSelectedJob(null);
  };

  return (
    <div>
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Job Title</th>
          <th className="py-2 px-4 border-b">Posted Date</th>
          <th className="py-2 px-4 border-b">Category</th>
          <th className="py-2 px-4 border-b">Vacancy</th>
          <th className="py-2 px-4 border-b">No Of Applications</th>
          <th className="py-2 px-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job) => (
          <tr key={job._id}>
            <td className="py-2 px-4 border-b">{job.jobTitle}</td>
            <td className="py-2 px-4 border-b">{job.postedDate}</td>
            <td className="py-2 px-4 border-b">{job.category}</td>
            <td className="py-2 px-4 border-b">{job.vacancy}</td>
            <td className="py-2 px-4 border-b">{job.noOfApplications}</td>
            <td className="py-2 px-4 border-b">
              <button
                className="bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-md m-1 text-white"
                onClick={() => onViewApplicants(job._id)}
              >
                View Applicants
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 px-3 py-2 rounded-md m-1 text-white"
                onClick={ () => handleMoreDetails(job._id)}
              >
                More
              </button>
              {/* You can add more action buttons with icons as needed */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
     {/* Modal */}
     {selectedJob && <JobDetailsModal job={selectedJob} onClose={closeModal} />}
     </div>
  );
};

export default CompanyJobsTable;
