import NavBar from "@/components/user/Home/NavBar";
import { Outlet } from "react-router-dom";
import MiniDash from "../../../components/user/Profile/MiniDash";
import React from "react";
import { FaLocationArrow, FaLockOpen ,FaEdit } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdWork, MdEmail, MdOutlinePhoneAndroid } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import ProfileSideBar from "@/components/user/Profile/ProfileSideBar";

const Profile: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className=" h-full w-full bg-green-200  ">
        <div className="flex  justify-center items-center">
          <div className=" w-full ms-10 md:ms-0 h-full md:w-11/12 bg-white  flex-col md:flex-row shadow-lg md:h-48 m-5 rounded-lg flex justify-between items-center">
            <div className="flex flex-col md:flex-row w-full items-center">
              <div className=" w-40 flex justify-center items-center    md:w-2/6 ">
                <img
                  src="https://www.kasandbox.org/programming-images/avatars/old-spice-man-blue.png"
                  className="rounded-full  absolute w-full md:w-auto md:h-32 mx-8 my-16 border-black border"
                  alt=""
                />
                <div className="p-5 ">

                <FiEdit className="w-7 bg-gray-50 hover text-blue-800 border-gray-500   rounded-full relative top-8 left-14  h-6" />
                </div>
              </div>
              <div className="m-4 md:ms-10 md:m-4   md:w-5/6">
                <div className="flex flex-col gap-2">
                  <div>
                    <h1 className="font-bold font-sans text-2xl">
                      JABIR HUSSAIN A T
                    </h1>
                    <p className="text-xs md:text-sm text-gray-600">
                      Profile Last Updated on 12/04/2023
                    </p>
                  </div>
                  <div className="w-full h-[0.2px] bg-black"></div>
                </div>
                <div className="w-4/5 mt-1 flex justify-around gap-3">
                  <div className="w-full flex flex-col border-e-[1px] border-black text-sans text-gray-500 text-sm">
                    <div className="flex items-center justify-start gap-4 mb-2">
                      <FaLocationArrow />
                      Banglore
                    </div>
                    <div className="flex items-center justify-start gap-4 mb-2">
                      <MdWork />
                      Mern Stack Developer
                    </div>
                    <div className="flex items-center justify-start gap-4 mb-2">
                      <FaLockOpen />
                      Open To Work
                    </div>
                  </div>
                  <div className="w-1/2 mt-1">
                    <div className="w-full flex flex-col h-10 border-black text-sans text-gray-500 text-sm">
                      <div className="flex items-center justify-start gap-3 mb-2 ms-5">
                        <div>
                          <MdEmail />
                        </div>
                        jabirhussain.official@gmail.com
                      </div>
                      <div className="flex items-center justify-start gap-4 mb-2 ms-5">
                        <MdOutlinePhoneAndroid className="text-sm" />
                        +91 8943839386
                      </div>
                      <div className="flex items-center justify-start gap-4 mb-2 ms-5">
                        <BiCalendar className="text-xs md:text-sm" />
                        12-10-2024 -DOB
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-orange-200 h-40 rounded w-10/12 my-2 mx-2 mr-5 flex justify-start">
                <MiniDash />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto  ">
          <div className="h-auto m-3">
            <ProfileSideBar />
          </div>
          <div className="flex justify-center rounded-xl items-start h-full w-full">
            <div className="w-11/12 h-full  rounded-l shadow-lg bg-white ">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
