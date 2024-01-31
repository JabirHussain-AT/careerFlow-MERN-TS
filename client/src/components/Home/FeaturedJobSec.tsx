import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FeaturedJobSec: React.FC = () => {
  return (
    <>
      {/* This is featuered JOb section */}
      <div className="h-screen w-full bg-white">
        <div className="flex justify-between py-5 px-4  bg-white">
          <div className="">
            <h3 className="font-bold font-sans text-3xl">
              Featured <span className="text-blue-500"> Jobs </span>{" "}
            </h3>
          </div>
          <div>
            <h4 className="text-blue-600 font-medium">
              View All <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </h4>
          </div>
        </div>
        {/*  */}
        <div className="h-auto w-60 border border-black px-5 ml-2">
          <p className="font-semibold text-sm py-1 font-sans">
            Junior Graphic Designer{" "}
          </p>
          <div className="flex justify-start items-center  w-60">
            <div className="bg-gray-300 flex items-center h-5 p-1 mb-1 rounded w-20 text-center ">
              <p className="text-green-500 font-semibold text-xs">
                INTERNSHIP{" "}
              </p>
            </div>
          <p className="text-xs text-gray-400"> Salary : $20,000 - $25,000</p>
          </div>
          {/*  */}
          
        </div>
      </div>
    </>
  );
};

export default FeaturedJobSec;
