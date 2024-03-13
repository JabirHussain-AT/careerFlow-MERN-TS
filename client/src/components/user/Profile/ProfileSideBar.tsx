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
              return `items-center flex py-4 hover:bg-gray-700 p-2 rounded h-full ${
                isActive
                  ? "bg-white flex w-30 text-black w-30 font-bold h-20 mx-2 my-2"
                  : ""
              }`;
            }}
          >
            <div className=" px-2 py-6 flex">
              <FaUser className="mr-3 h-5 text-md" />
              <p className="hover:text-blue-500">Profile</p>
            </div>
          </NavLink>
          {/* <NavLink
            to={"/profile/dashboard"}
            className={({ isActive }) => {
              return `items-center flex py-4 hover:bg-gray-700 p-2 rounded h-full ${
                isActive
                  ? "bg-white flex w-30 text-black font-bold h-20 mx-2 my-2"
                  : ""
              }`;
            }}
          >
            <FaHome className="w-5" />
            <p className="hover:text-blue-5">Dashboard</p>
          </NavLink> */}

          {/* my applications  */}
          <NavLink
            to={"/profile/my-applications"}
            className={({ isActive }) => {
              return `items-center flex py-4 hover:bg-gray-700 p-2 rounded h-full ${
                isActive
                  ? "bg-white flex w-30 text-black font-bold h-20 mx-2 my-2"
                  : ""
              } `;
            }}
          >
            <FaUserTie className="h-5 w-5" />
            My Applications
          </NavLink>
          <NavLink
          to={"/profile/my-interviews"}
          className={({ isActive }) => {
            return `items-center flex py-4 hover:bg-gray-700 p-2 rounded h-full ${
              isActive
                ? "bg-white flex w-30 text-black font-bold h-20 mx-2 my-2"
                : ""
            } `;
          }}
          >
            Interviews 
          </NavLink>
          <li className="flex items-center hover:bg-gray-700 p-2 rounded gap-2 h-full">
            <FaSave className="h-5 w-5" />
            <a href="/saved-jobs" className="hover:text-blue-500 gap-2">
              Saved Jobs
            </a>
          </li>
          <li className="flex items-center hover:bg-gray-700 p-2 rounded gap-2 h-full">
            <FaCog className="h-5 w-5" />
            <a href="/settings" className="hover:text-blue-500" gap-2>
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSideBar;
