import React from 'react'
import { IoIosAdd } from 'react-icons/io'

const MessagesSideBar : React.FC  = () => {
  return (
    <>
  <div className="w-4/12 h-screen  flex justify-center ">
  {/* side bar showing recent messages */}
  <div className="bg-white h-auto over  border-2  w-4/5 rounded-xl ">
    {/* head section */}
    <div className="flex items-center justify-between px-3 border-b border-black shadow-md">
      <div className="flex items-center justify-center gap-2">
        <h1 className="font-bold text-lg font-serif text-center ps-4   py-3 ">
          {" "}
          Messages{" "}
        </h1>
        <span className="bg-gray-200 h-4 flex justify-center items-center  w-6 text-sm rounded-full text-center font-semibold text-red-600">
          {" "}
          6
        </span>
      </div>
      <div className="bg-blue-500 text-white text-xl rounded-full hover:bg-blue-700 hover:scale-125  cursor-pointer  ">
        <IoIosAdd />
      </div>
    </div>
    {/* search option */}
    <div className="flex justify-center items-center">
      <div className="mt-3 w-full flex justify-center">
        <input
          type="text"
          placeholder="Search people"
          className="text-sm text-mono w-11/12 py-2 text-center bg-gray-200 px-1 rounded-lg focus:outline-dashed"
        />
      </div>
    </div>
    {/* messages section */}
    <div className="">
      <div className="flex gap-3 hover:bg-blue-100 m-2 rounded-md border ">
        <div className=" m-2 rounded-xl flex items-center justify-center bg-white ">
          <img
            className="w-9  rounded-xl border m-1"
            src="https://www.kasandbox.org/programming-images/avatars/marcimus.png"
            alt="DP"
          />
        </div>
        <div className="w-auto flex  flex-col justify-center items-center">
          <h1 className="text-xs font-semibold font-sans">
            Anirudh Jagath
          </h1>
          <p className="text-xs  font-extralight "> Mern Stack Developer </p>
        </div>
        <div className="w-auto flex mt-3 justify-center items-start">
          <p className="text-xs text-gray-500 font-semibold">12 M</p>
        </div>
      </div>
    </div>
    {/*  */}
    {/* messages section */}
    <div className="">
      <div className="flex gap-3 hover:bg-blue-100 m-2 rounded-md border ">
        <div className=" m-2 rounded-xl flex items-center justify-center bg-white ">
          <img
            className="w-9  rounded-xl border m-1"
            src="https://www.kasandbox.org/programming-images/avatars/old-spice-man-blue.png"
            alt="DP"
          />
        </div>
        <div className="w-auto flex  flex-col justify-center items-center">
          <h1 className="text-xs font-semibold font-sans">
            Abhijith
          </h1>
          <p className="text-xs  font-extralight "> Mern Stack Developer </p>
        </div>
        <div className="w-auto flex mt-3 justify-center items-start">
          <p className="text-xs text-gray-500 font-semibold">20 M</p>
        </div>
      </div>
    </div>
    {/*  */}
  </div>
</div>
</>
  )
}

export default MessagesSideBar