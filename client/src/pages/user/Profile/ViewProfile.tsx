import React from "react";
import { FiEdit } from 'react-icons/fi'


const ViewProfile  : React.FC = () => {
  return (
    <div className="w-full  bg-gray-100">
      <div className="">
        <div className="flex w-full">
          <div className="m-4">
            <h1 className="text-2xl font-bold ">
              My <span className="text-blue-500"> Profile</span>
            </h1>
          </div>
        </div>
        <div className="w-full h-[0.5px] bg-black"></div>
        {/*  */}
        <div className=" w-11/12  m-5  border">
          <div className="">
            <div
              id="main div about me"
              className=" flex justify-between p-5 font-semibold font-mono text-gray-700"
            >
              <h1 className=" underline">About Me </h1>
              < FiEdit className="text-md text-blue-600" />
            </div>
            <div id="aboutme-content" className="text-sm text-sans text-pretty">
              <p className="pl-5 m-3 leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
        {/* from here its skill section == >  */}
        <div className=" w-11/12 h-10  m-5  border">
          <div className="">
          <div
              id="main div skills "
              className=" flex justify-between p-5 font-semibold font-mono text-gray-700"
            >
              <h1 className=" underline">Skills  </h1>
              < FiEdit className="text-md text-blue-600" />
            </div>
            <div className="" about="for listing skills">
                    <div className="flex flex-wrap">
                        <div className="flex">
                            <h1 className="text-sm "> Node Js </h1>
                            <h1 className="text-sm "> Node Js </h1>
                            <h1 className="text-sm "> Node Js </h1>
                        </div>
                    </div>
            </div>
            </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default ViewProfile;
