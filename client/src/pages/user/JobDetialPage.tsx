import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IJob } from "../../interface/IJob";
import JobDetailPageCom from "../../components/user/FindJob/JobDetailPageCom";

const JobDetailsContainer: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const [job, setJob] = useState<IJob | null>(null);

  useEffect(() => {
    // Mock data for demonstration purposes
    const mockJob: IJob = {
      jobType: "Full Time",
      jobTitle: "Software Developer",
      createdAt: "2024-02-18",
      jobDescription:
        "Here at Example Corp, we are looking for a skilled Software Developer...",
      companyId: {
        userName: "examplecorp",
        logo: "https://www.kasandbox.org/programming-images/avatars/spunky-sam.png",
      },
      requirements: ["Bachelor's degree in Computer Science", "Experience with React"],
      skills: ["JavaScript", "React", "Node.js"],
      salary: "80000-120000",
      status: true,
      jobExpiry: "2024-03-18",
      vacancy: 3,
      noOfApplications: 20,
      _id: "123456789", // Replace with the actual job ID
    };

    // Simulate fetching job details using jobId
    // In a real application, replace this with actual data fetching logic
    setTimeout(() => {
      setJob(mockJob);
    }, 1000); // Simulating an asynchronous API call
  }, [jobId]);

  return (
    <div>
      {job && <JobDetailPageCom job={job} />}
      {/* Add loading or error handling if needed */}
    </div>
  );
};

export default JobDetailsContainer;
