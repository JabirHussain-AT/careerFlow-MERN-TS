import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import Skills from "@/components/user/Profile/Skills";
import Experiance from "@/components/user/Profile/Experiance";
import Education from "@/components/user/Profile/Education";
import AboutMe from "@/components/user/Profile/AboutMe";
import SocialMediaLinks from "@/components/user/Profile/SocialMediaLinks";

const ViewProfile: React.FC = () => {
  const [resume, setResume] = useState<File | null>(null);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleResumeUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile) {
      try {
        setLoading(true);

        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("upload_preset", "wx0iwu8u");

        // Upload resume to Cloudinary
        const cloudinaryResponse = await fetch(
          "https://api.cloudinary.com/v1_1/dato7wx0r/upload",
          {
            method: "post",
            body: formData,
          }
        );

        const cloudinaryData = await cloudinaryResponse.json();
        console.log(cloudinaryData,'8888')
        setResumeUrl(cloudinaryData.secure_url);
        setResume(selectedFile);
        setLoading(false);
      } catch (error: any) {
        console.error("Error uploading resume:", error.message);
        setLoading(false);
      }
    }
  };

  const openResume = () => {
    // Download the uploaded resume
    if (resumeUrl) {
      // const link = document.createElement("a");
      // link.href = resumeUrl;
      // link.download = "resume.pdf"; // You can customize the downloaded file name here
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
      if (resumeUrl) {
        window.open(resumeUrl, '_blank');
      }
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

          {/* Display uploaded resume URL */}
          {resumeUrl && (
            <div className="flex items-center mt-3">
              <p className="text-sm text-sans text-pretty">Resume URL: {resumeUrl}</p>
              <button
                onClick={openResume}
                className="ml-3 text-sm text-blue-500 cursor-pointer"
              >
                Download Resume
              </button>
            </div>
          )}

          {/* Loading indicator */}
          {loading && <p className="text-sm text-sans text-gray-500 mt-3">Uploading...</p>}
        </div>
      </div>

      {/* About Me Section */}
      <AboutMe />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experiance />

      {/* Education Section */}
      <Education />

      {/*  */}
      < SocialMediaLinks />
    </div>
  );
};

export default ViewProfile;
