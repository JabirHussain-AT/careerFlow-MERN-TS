import React from 'react'
import { RxCross2 } from "react-icons/rx";


const Skills : React.FC = () => {
  return (
    <div className="flex gap-2 flex-wrap">
    <div className="border-2 border-gray-600 rounded-xl flex items-center p-1">
      <h1 className="text-sm font-semibold">Node Js</h1>
      <div className="px-1 py-1">
        <RxCross2 className="hover:scale-125 hover:font-bold hover:shadow-xl hover:text-red-600" />
      </div>
    </div>
    <div className="border-2 border-gray-600 rounded-xl flex items-center p-1">
      <h1 className="text-sm font-semibold">Type SCript </h1>
      <div className="px-1 py-1">
        <RxCross2 className="hover:scale-125 hover:font-bold hover:shadow-xl hover:text-red-600" />
      </div>
    </div>
    <div className="border-2 border-gray-600 rounded-xl flex items-center p-1">
      <h1 className="text-sm font-semibold">React </h1>
      <div className="px-1 py-1">
        <RxCross2 className="hover:scale-125 hover:font-bold hover:shadow-xl hover:text-red-600" />
      </div>
    </div>
    <div className="border-2 border-gray-600 rounded-xl flex items-center p-1">
      <h1 className="text-sm font-semibold">Javascript </h1>
      <div className="px-1 py-1">
        <RxCross2 className="hover:scale-125 hover:font-bold hover:shadow-xl hover:text-red-600" />
      </div>
    </div>
    <div className="border-2 border-gray-600 rounded-xl flex items-center p-1">
      <h1 className="text-sm font-semibold ">MongoDB </h1>
      <div className="px-1 py-1">
        <RxCross2 className="hover:scale-125 hover:font-bold hover:shadow-xl hover:text-red-600" />
      </div>
    </div>
    {/* Add more skill items similarly */}
  </div>
  )
}

export default Skills