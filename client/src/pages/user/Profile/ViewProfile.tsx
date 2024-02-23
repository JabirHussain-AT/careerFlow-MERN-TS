import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import Skills from "@/components/user/Profile/Skills";
import Experiance from "@/components/user/Profile/Experiance";
import Education from "@/components/user/Profile/Education";
import AboutMe from "@/components/user/Profile/AboutMe"

const ViewProfile: React.FC = () => {
  const [resume, setResume] = useState<File | null>(null);

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setResume(selectedFile);
    }
  };

  return (
    <div className="min-h-screen rounded-2xl bg-gray-50 flex flex-col justify-between">
      <div className="m-4">
        <h1 className="text-2xl font-bold">
          My <span className="text-blue-500">Profile</span>
        </h1>
      </div>
      <div className="w-full h-0.5 bg-black"></div>

      {/* Resume Section */}
      <div className="w-full md:w-10/12 mx-auto mt-5 border p-5">
        <div className="flex justify-between items-center font-semibold text-gray-700">
          <h1 className="underline">Resume</h1>
          <FiEdit className="text-md text-blue-600" />
        </div>
        <div className="flex flex-wrap mt-3">
          {/* Resume Upload Input */}
          <input
            type="file"
            accept=".pdf, .doc, .docx"
            onChange={handleResumeUpload}
            className="mt-2"
          />

          {/* Display uploaded resume name */}
          {resume && (
            <p className="text-sm text-sans text-pretty mt-3">
              Uploaded Resume: {resume.name}
            </p>
          )}
        </div>
      </div>
      {/* About Me Section */}
            < AboutMe /> 
      {/* Skills Section */}
      <Skills />
      {/* Experience Section */}
      <Experiance />

      {/* Education Section */}
      <Education />
    </div>
  );
};

export default ViewProfile;
