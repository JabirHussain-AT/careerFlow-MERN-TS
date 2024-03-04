import { IoMdArrowRoundBack } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { useSelector } from "react-redux";
import ViewApplicantDetialSideBar from "@/components/company/Jobs/ViewApplicantDetialSideBar";
import ApplicantDetialsSection from "@/components/company/Jobs/ApplicantDetialsSection";

const ApplicantDetailsSideBar = () => {
  return (
    <>
      <div className="w-full">
        <div className="mt-4 w-full pl-5  flex gap-x-3">
          <h1 className="font-serif font-semibold text-lg text-blue-gray-900">
            Applicant Details
          </h1>
        </div>
        <div className="flex justify-around">
          <div className="w-3/12">
            <ViewApplicantDetialSideBar />
          </div>
          <div className="w-8/12 mt-3">
            <ApplicantDetialsSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicantDetailsSideBar;
