import NavBar from "@/components/user/Home/NavBar";
import React from "react";
import { BsSearch , BsSliders} from "react-icons/bs";

const showJobs: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className="w-full bg-green-200  h-[600px] ">
        {/* search bar  */}
      < SearchBar />
      </div>
    </div>
  );
};

export default showJobs;
