import React, { useEffect, useState } from "react";
import Cards from "@/components/company/Home/dashboard/Cards";
import { MdWork } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdOutlinePending } from "react-icons/md";
import Charts from "./Charts";
import RecentJobs from "./RecentJobs";
import { useSelector } from "react-redux";
import { IUserSelector } from "@/interface/IUserSlice";
import {
  getTotalJobsAndApplicants,
  getChartData,
} from "@/redux/actions/companyActions";

const CompanyDash: React.FC = () => {
  const { user } = useSelector((state: IUserSelector) => state.user);
  const [countData, setCountData] = useState<any>({});
  const [filterType, setFilterType] = useState<string>("weekly");

  useEffect(() => {
    fetchData();
  }, [user?._id, filterType]);

  const fetchData = async () => {
    try {
      const data = await getTotalJobsAndApplicants(user?._id);
      setCountData(data.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFilterChange =async (newFilterType: string) => {
    setFilterType(newFilterType);
     const data = await getChartData(user?._id , newFilterType)
     console.log(data, ' data for the chart ')
  };

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
          <Cards
            text="Total Jobs Posted"
            icon={MdWork}
            count={countData?.jobCount}
          />
          <Cards
            text="Total Applicants"
            icon={FaUsers}
            count={countData?.totalApplicants}
          />
          <Cards text="Interviews" icon={MdOutlinePending} count={42} />
          <Cards
            text="New Applicants"
            icon={MdOutlinePending}
            count={countData?.totalApplicantsInApplyedStage}
          />
        </div>
        {/* Filter Section */}
        <div className="flex justify-end mt-4 me-5 rounded-lg">
          <label className="mr-2 font-semibold">Filter:</label>
          <select
            className="border p-1"
            onChange={(e) => handleFilterChange(e.target.value)}
            value={filterType}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        {/* LineChart */}
        <div className="flex mt-5 w-full">
          {/* <Charts filterType={filterType} fetchData={getChartData} /> */}
          <Charts/>
        </div>
        <div>
          <RecentJobs />
        </div>
      </div>
    </div>
  );
};

export default CompanyDash;
