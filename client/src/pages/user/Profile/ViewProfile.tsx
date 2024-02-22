import React from "react";
import { FiEdit } from "react-icons/fi";
import Skills from "@/components/user/Profile/Skills";
import Experiance from "@/components/user/Profile/Experiance";
import Education from "@/components/user/Profile/Education";


const ViewProfile: React.FC = () => {
  return (
    <div className="min-h-screen rounded-2xl bg-gray-50 flex flex-col justify-between">
      <div className="m-4">
        <h1 className="text-2xl font-bold">
          My <span className="text-blue-500">Profile</span>
        </h1>
      </div>
      <div className="w-full h-0.5 bg-black"></div>

      {/* About Me Section */}
      <div className="w-full md:w-10/12 mx-auto mt-5 border p-5">
        <div className="flex justify-between items-center font-semibold text-gray-700">
          <h1 className="underline">About Me</h1>
          <FiEdit className="text-md text-blue-600" />
        </div>
        <div
          id="aboutme-content"
          className="text-sm text-sans text-pretty mt-3"
        >
          <p className="leading-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-full md:w-10/12 mx-auto  mt-5 border p-5">
        <div className="flex justify-between items-center font-semibold text-gray-700">
          <h1 className="underline">Skills</h1>
          <FiEdit className="text-md text-blue-600" />
        </div>
        <div className="flex flex-wrap mt-3">
          {/* Sample skill items */}
        < Skills />
          {/*  */}
        </div>
      </div>
      {/*  */}

      {/* Experiance Section */}
            < Experiance />
      {/*  */}
      {/* Education section */}
           < Education /> 
      {/*  */}
    </div>
  );
};

export default ViewProfile;
