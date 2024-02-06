import React from "react";
import { logout } from "../../redux/reducers/user/userSlice";
import { useDispatch } from "react-redux";

const AdminDashboard: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("its here in logout");
    dispatch(logout());
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <nav className="bg-gray-800 w-64 flex flex-col">
        <div className="text-white font-bold text-xl mb-4 px-4 py-2">
          Admin Dashboard
        </div>
        <div className="flex flex-col space-y-2 px-4">
          <a
            href="#"
            className="text-white hover:underline" onClick={handleLogout}
          >
            Logout
          </a>
          <a href="#" className="text-white hover:underline">
            Users
          </a>
          {/* Add more sidebar links as needed */}
        </div>
      </nav>

      {/* Main content */}
      <div className="flex-grow p-4 overflow-y-auto">
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default AdminDashboard;
