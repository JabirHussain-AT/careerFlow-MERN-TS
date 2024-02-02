import React from 'react'
import Logo from "../../../assets/CareerFlow-Logo.png";


const NavBar : React.FC = () => {
  return (
       // this is navbar
    <div className="flex justify-between mx-auto bg-white shadow-lg w-full h-12">
    <div className="flex justify-between">
      <div className="h-8">
        <img className="h-11 px-5 mx-auto" src={`${Logo}`} alt="Logo" />
      </div>
      <div className=" font-semibold font-sans gap-16 flex px-5 py-2 justify-between items-center">
        <h6>Find Jobs</h6>
        <h6> Notification</h6>
        <h6> More </h6>
      </div>
    </div>
    {/* //right side buttons */}
    <div className="flex items-center">
        <h5 className=" px-5 py-3  font-bold text-blue-700 ">Logout</h5>
        <button className="bg-blue-700 text-white py-1 rounded-md px-4 gap-4 mr-5" > Profile</button>
    </div>
  </div>
  )
}

export default  NavBar