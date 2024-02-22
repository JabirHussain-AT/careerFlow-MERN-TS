import React from 'react';
import { NavLink} from 'react-router-dom'
import { FaHome, FaUser, FaCog, FaSave, FaUserTie, FaCalendarAlt } from 'react-icons/fa';

const ProfileSideBar = () => {
  return (
    <div className="bg-gray-800 rounded-lg text-white w-64 p-4">
      {/* Sidebar Options */}
      <ul className="space-y-4">
        <NavLink to={'/profile/view'} className="flex items-center hover:bg-gray-700 p-2 rounded">
          <FaUser className="mr-3" />
          <p className="hover:text-blue-500">Profile</p>
        </NavLink>
        <NavLink to={ '/profile/dashboard'} className="flex items-center hover:bg-gray-700 p-2 rounded">
          <FaHome className="mr-3" />
          <p  className="hover:text-blue-500">Dashboard</p>
        </NavLink>
        <li className="flex items-center hover:bg-gray-700 p-2 rounded">
          <FaCog className="mr-3" />
          <a href="/settings" className="hover:text-blue-500">Settings</a>
        </li>
        <li className="flex items-center hover:bg-gray-700 p-2 rounded">
          <FaSave className="mr-3" />
          <a href="/saved-jobs" className="hover:text-blue-500">Saved Jobs</a>
        </li>
        <li className="flex items-center hover:bg-gray-700 p-2 rounded">
          <FaUserTie className="mr-3" />
          <a href="/my-applications" className="hover:text-blue-500">My Applications</a>
        </li>
        <li className="flex items-center hover:bg-gray-700 p-2 rounded">
          <FaCalendarAlt className="mr-3" />
          <a href="/interviews" className="hover:text-blue-500">Interviews</a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSideBar;
