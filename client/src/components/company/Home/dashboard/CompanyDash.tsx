import React, { useEffect, useState } from "react";
import Cards from "@/components/company/Home/dashboard/Cards";
import { MdWork } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdOutlinePending } from "react-icons/md";
import Charts from "./Charts";
import RecentJobs from "./RecentJobs";
import { useSelector } from "react-redux";
import { IUserSelector } from "@/interface/IUserSlice";
import { getTotalJobsAndApplicants } from "@/redux/actions/companyActions";

const CompanyDash: React.FC = () => {
  const { user } = useSelector((state: IUserSelector) => state.user);
  const [jobCount, setJobsCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTotalJobsAndApplicants(user?._id);
        // setJobsCount(data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user?._id]);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="w-full">
        {/* main section */}
        <div className="flex h-16 w-full rounded-md items-center justify-center">
          <h1 className="text-center font-bold text-xl font-serif text-black">
            Good Morning Car-Care
          </h1>
        </div>
        {/*  cards */}
        <div className="flex gap-4 justify-start flex-wrap mt-4">
          <Cards text="Total Jobs Posted" icon={MdWork} count={23} />
          <Cards text="Total Applicants" icon={FaUsers} count={289} />
          {/* Use unique text for each card */}
          <Cards text="Interviews" icon={MdOutlinePending} count={42} />
          <Cards text="New Applicants" icon={MdOutlinePending} count={42} />
        </div>
        {/* LineChart */}
        <div className="flex mt-5 w-full">
          <Charts />
        </div>
        <div>
          <RecentJobs />
        </div>
      </div>
    </div>
  );
};

export default CompanyDash;
