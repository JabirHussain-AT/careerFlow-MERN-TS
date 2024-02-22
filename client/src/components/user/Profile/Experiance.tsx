import React from 'react'
import { FiEdit } from "react-icons/fi";

const Experiance : React.FC  = () => {
  return (
    <div className="w-full md:w-10/12 mx-auto  mt-5 border p-5">
        <div className="flex justify-between items-center font-semibold text-gray-700">
          <h1 className="underline">Experiance</h1>
          <FiEdit className="text-md text-blue-600" />
        </div>
        <div className="" about="experiance showing">
            <ul className="list-disc">
                <li className="ml-10 m-6">
                    <p className="font-semibold text-md font-sans"> Full Stack Developer  </p>
                    <p className="font-semibold text-sm"> Brototype pvt ltd </p>
                    <p className="text-xs">Mar 2020 - Jan-2023 </p>
                </li>
            </ul>
        </div>
      </div>
  )
}

export default Experiance