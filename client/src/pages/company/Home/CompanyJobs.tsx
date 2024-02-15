import CompanyJobsTable from "@/components/company/Jobs/CompanyJobsTable";
import React from "react";
import { useNavigate } from "react-router-dom";

const CompanyJobs = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-end">
        <button
          className="bg-blue-500  hover:bg-blue-700 px-3 py-2  rounded-md m-3 text-white"
          onClick={() => navigate("/company/add-jobs")}
        >
          {" "}
          Add Jobs
        </button>
        <button
          className="bg-blue-500 px-3 hover:bg-blue-700 py-2  rounded-md m-3 text-white"
          onClick={() => navigate("/company/add-jobs")}
        >
          {" "}
          Edit Jobs
        </button>
      </div>
      < CompanyJobsTable  />
    </div>
  );
};

export default CompanyJobs;
