import React from 'react'
import { FiEdit } from 'react-icons/fi'

const Education : React.FC  = () => {
  return (
<div className="w-full md:w-10/12 mx-auto mb-5  mt-5 border p-5">
        <div className="flex justify-between items-center font-semibold text-gray-700">
          <h1 className="underline">Education</h1>
          <FiEdit className="text-md text-blue-600" />
        </div>
        <div className="" about="experiance showing">
            <ul className="list-disc">
                <li className="ml-10 m-6">
                    <p className="font-semibold text-md font-sans">Master of Business Administration  </p>
                    <p className="font-semibold text-sm"> IIM Calicut </p>
                    <p className="text-xs">June 2018 - Mar-2020 </p>
                </li>
                <li className="ml-10 m-6">
                    <p className="font-semibold text-md font-sans">Bachelor of Business Administration  </p>
                    <p className="font-semibold text-sm"> SMC Wayanad </p>
                    <p className="text-xs">June 2015 - Mar-2018 </p>
                </li>
            </ul>
        </div>
      </div>    
  )
}

export default Education