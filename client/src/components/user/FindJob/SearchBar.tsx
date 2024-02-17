import React from 'react'
import { BsSearch, BsSliders } from "react-icons/bs";

const SearchBar :  React.FC  = () => {
  return (
    <div> <div className="h-8"></div>
    <div className="flex justify-center">
      <div className="w-11/12 rounded border-2 bg-white items-center px-3 py-1 flex gap-4">
        <BsSearch />
        <input
          className="w-full rounded-sm h-8"
          placeholder="Search By : Job Title . . . "
          type="text"
        />
        <div className="flex gap-3 w-auto ">
        <div className="flex bg-gray-300   px-3 gap-2 font-sans  items-center">
          < BsSliders />
          <button className=" rounded-sm font-serif  ">Filter</button>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-serif px-5  py-1 w-28 "> Find Job</button>
        </div>
      </div>
    </div></div>
  )
}

export default SearchBar