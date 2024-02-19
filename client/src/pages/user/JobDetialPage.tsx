import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IJob } from "../../interface/IJob";
import { fetchJob } from '../../redux/actions/userActions'
import JobDetailPageCom from "../../components/user/FindJob/JobDetailPageCom";

const JobDetailsContainer: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const [job, setJob] = useState<IJob | null>(null);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const jobData = await fetchJob();
        setJob(jobData.data);
      } catch (error) {
        console.error("Error fetching job data === :", error);
      }
    };

    fetchJobData();
  }, []);

  return (
    <div>
      {job && <JobDetailPageCom job={job} />}
      {/* Add loading or error handling if needed */}
    </div>
  );
};

export default JobDetailsContainer;
