import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCog,
  FaSave,
  FaUserTie,
  FaCalendarAlt,
} from "react-icons/fa";

const ProfileSideBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`flex justify-center ${isSticky ? "sticky top-0" : ""}`}>
      <div className="bg-gray-800 rounded-md h-14 text-white w-11/12 p-4">
        {/* Sidebar Options */}
        <ul className="flex items-center pb-1 justify-between h-full">
          <NavLink
            to={"/profile/view"}
            className={({ isActive }) => {
                    return `items-center py-4 hover:bg-gray-700 p-2 rounded h-full ${
                        isActive ? "bg-gray-400 flex w-30 h-20 mx-2 my-2":""
                    }`}
            }
          ><div className=" px-2 py-6 flex">
            <FaUser  className="mr-3 h-5 text-md" />
            <p className="hover:text-blue-500">Profile</p>
          </div>
          </NavLink>
          <NavLink
            to={"/profile/dashboard"}
            className="flex items-center justify-center h-5 hover:bg-gray-700rounded"
          >
            <FaHome className="w-5" />
            <p className="hover:text-blue-5">Dashboard</p>
          </NavLink>
          <li className="flex items-center hover:bg-gray-700 p-2 rounded gap-2 h-full">
            <FaCog className="h-5 w-5" />
            <a href="/settings" className="hover:text-blue-500" gap-2>
              Settings
            </a>
          </li>
          <li className="flex items-center hover:bg-gray-700 p-2 rounded gap-2 h-full">
            <FaSave className="h-5 w-5" />
            <a href="/saved-jobs" className="hover:text-blue-500 gap-2">
              Saved Jobs
            </a>
          </li>
          <li className="flex items-center hover:bg-gray-700 p-2 rounded gap-2 h-full">
            <FaUserTie className="h-5 w-5" />
            <a href="/my-applications" className="hover:text-blue-500 gap-2">
              My Applications
            </a>
          </li>
          <li className="flex items-center hover:bg-gray-700 p-2 rounded gap-2 h-full">
            <FaCalendarAlt className="h-5 w-5" />
            <a href="/interviews" className="hover:text-blue-500">
              Interviews
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSideBar;
