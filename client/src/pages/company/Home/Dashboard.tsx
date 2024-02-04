import React, { useState } from "react";
import NavBar from "../../../components/user/Login/NavBar";
import { IUserSelector } from "../../../interface/IUserSlice";
import { useSelector } from "react-redux";

const Dashboard: React.FC = () => {
  const { user } = useSelector((state: IUserSelector) => state.user);

  return (
    <>
      <NavBar /> 
      {!user?.approved && user?.stage === 'completed' ? 
      <div className="max-w-md mx-auto mt-10 bg-white p-8 border rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Thank you for submitting</h1>
        <p className="text-gray-600 mb-4">
          We will reply to you within 48 hours through email after verification.
        </p>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p className="text-green-500">Your Submission is Successfull . </p>
        </div>
      </div>
      :
      <div>
        Helllooooooo
      </div>
}
    </>
  );
};

export default Dashboard;
