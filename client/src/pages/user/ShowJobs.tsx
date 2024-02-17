import React, { useState, useEffect } from "react";
import { IJob } from "../../interface/IJob";
import BannerFindJob from "../../components/user/FindJob/BannerFindJob";
import { BsSave } from "react-icons/bs";
import SearchBar from "@/components/user/FindJob/SearchBar";
import NavBar from "@/components/user/Home/NavBar";
import Google from "../../assets/googleIcon.png";
import Footer from "@/components/common/Footer";
import { fetchJobs} from "../../redux/actions/companyActions";

const ShowJobs: React.FC = () => {
  const [jobs, setJobs] = useState<IJob | null>();

  useEffect(() => {
    const fetchJobsData = async () => {
      try {
        const jobsData = await fetchJobs();
        setJobs(jobsData);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobsData();
  }, []);


  return (
    <div>
      <div>
        <NavBar />
        <div className="w-full bg-green-200 h-auto">
          {/* Search bar */}
          <SearchBar />

          {/* Banner */}
          <BannerFindJob />

          {/* Latest Openings */}
          <div className="text-black h-[400px]">
            <div>
              <h2 className="text-3xl font-sans font-bold mx-5 py-5">
                Latest <span className="text-blue-500"> Openings </span>
              </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-3 flex-wrap mx-5">
              <div className="w-full md:w-60 h-auto bg-gradient-to-r from-yellow-100 rounded-md to-white">
                <div className="px-3 text-start font-semibold text-md mt-3">
                  <h3 className="font-sans mb-2"> Full stack Developer </h3>
                  <div className="flex gap-4">
                    <p className="border-green-600 border-2 px-1 font-sans text-xs w-20 rounded-md bg-green-300 font-semibold text-green-800">
                      PART-TIME
                    </p>
                    <p className="text-gray-400 text-xs font-sans">
                      {" "}
                      Salary: $4500-$5500
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <img className="w-8 p-1 h-auto" src={Google} alt="" />
                    <p>Google Inc.</p>
                    <BsSave />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShowJobs;
