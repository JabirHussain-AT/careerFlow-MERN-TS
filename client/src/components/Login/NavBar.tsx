import React from 'react';
import logo from '../../assets/CareerFlow-Logo.png'

const NavBar = () => {
  return (
    <div className="flex z-[999] justify-center items-center h-14 bg-white text-white">
      <img src={logo} alt="Company Logo" className="h-9" />
    </div>
  );
};

export default NavBar;
