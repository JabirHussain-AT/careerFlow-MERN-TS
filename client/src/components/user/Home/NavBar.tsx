import React, { useState } from 'react';
import Logo from "../../../assets/CareerFlow-Logo.png";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../redux/reducers/user/userSlice';

const NavBar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleDropdownClick = (route: string) => {
    navigate(route);
    setShowDropdown(false); // Close the dropdown after clicking an option
  };

  return (
    <div className="flex justify-between mx-auto bg-white shadow-lg w-full h-12">
      <div className="flex justify-between">
        <div className="h-8 flex cursor-pointer" onClick={() => navigate('/')}>
          <img className="h-9 pt-2 pl-2 mx-auto" src={Logo} alt="Logo" />
        </div>
        <div className="font-semibold font-sans gap-16 flex px-5 py-2 justify-between items-center">
          <h6 onClick={() => navigate('/showJobs')} className='cursor-pointer hover:scale-90 duration-700 hover:bg-gray-100 font-mono text-sm hover:px-2 hover:py-1'>Find Jobs</h6>
          <h6 onClick={() => navigate('/messages')} className='cursor-pointer hover:scale-90 duration-700 hover:bg-gray-100 font-mono text-sm hover:px-2 hover:py-1' >Messages</h6>
          <div className="relative" onClick={() => setShowDropdown(!showDropdown)}>
            <h6
              className='cursor-pointer hover:scale-90 duration-700 hover:bg-gray-100 font-mono text-sm hover:px-2 hover:py-1'
            >
              More
            </h6>
            <div className={`absolute top-8 -right-2 bg-white shadow-md rounded-md mt-1 z-10 ${showDropdown ? 'block' : 'hidden'}`}>
              <ul className="py-1">
                <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm text-center w-auto" onClick={() => handleDropdownClick('/myApplications')}>My Applications</li>
                <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm text-center w-auto" onClick={() => handleDropdownClick('/option2')}>Option 2</li>
                <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm text-center w-auto" onClick={() => handleDropdownClick('/option3')}>Option 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <h5 className="px-5 py-3 font-bold text-blue-700 cursor-pointer  font-mono text-sm hover:px-2 hover:py-1" onClick={handleLogout}>Logout</h5>
        <button className="bg-blue-700 text-white py-1 rounded-md px-4 gap-4 mr-5 hover:scale-105 hover:bg-blue-300 hover:text-white font-mono text-sm hover:px-2 hover:py-1" onClick={() => navigate('/profile/view')}>Profile</button>
      </div>
    </div>
  );
};

export default NavBar;
