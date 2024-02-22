import NavBar from "@/components/user/Home/NavBar";
import {  Outlet } from 'react-router-dom'
import MiniDash from '../../../components/user/Profile/MiniDash'
import React from "react";
import { FaLocationArrow, FaLockOpen } from "react-icons/fa";
import { MdWork, MdEmail, MdOutlinePhoneAndroid } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import ProfileSideBar from "@/components/user/Profile/ProfileSideBar";

const Profile: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className=" min-h-screen  h-auto w-full bg-green-200">
        <div className="flex justify-center items-center">
          <div className="w-11/12 bg-white shadow-lg h-48 m-5 rounded-lg flex justify-between items-center">
            <div className="flex w-full items-center">
              <img
                src="https://www.kasandbox.org/programming-images/avatars/old-spice-man-blue.png"
                className="rounded-full h-32 mx-8 my-16 border-black border"
                alt=""
              />
              <div className="ms-10 w-full">
                <div className="flex flex-col gap-2">
                  <div>
                    <h1 className="font-bold font-sans text-2xl">
                      JABIR HUSSAIN A T
                    </h1>
                    <p className="text-sm text-gray-600">
                      Profile Last Updated on 12/04/2023
                    </p>
                  </div>
                  <div className="w-full h-[0.2px] bg-black"></div>
                </div>
                <div className="w-full mt-1 flex justify-around gap-3">
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
                        <BiCalendar className="text-sm" />
                        12-10-2024 - D O B
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
        <div className="w-full ">
          <div className="flex justify-evenly items-start h-auto w-full">
            <ProfileSideBar />
            <div className="w-[68%] rounded-md shadow-lg bg-white ">
              < Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
