import React, { useState } from 'react';
import { IoIosSend } from 'react-icons/io';

const MessageChatSection: React.FC = () => {
  const [sm, setSm] = useState<boolean>(false);

  return (
    <div className="relative bg-white w-7/12 rounded-lg overflow-hidden border shadow-lg">
      <div className="bg-white flex flex-col justify-between max-h-screen overflow-y-auto">
        {/* Head */}
        <div className="w-full flex rounded-lg bg-blue-50 h-12 border items-center">
          {/* Display picture and online status */}
          <div className="flex gap-1 justify-center items-center">
            <div className="w-10 h-10  flex justify-center items-center bg-white border rounded-lg">
              <img
                className="w-7"
                src="https://www.kasandbox.org/programming-images/avatars/old-spice-man-blue.png"
                alt="dp"
              />
            </div>
            <div className="p-3">
              <h1 className="font-sans font-semibold text-sm">Anirudh Jagath</h1>
              <span className="bg-green-500 text-green-500 w-1 h-1 text-[6px] rounded-full">
                {' '}
                oo{' '}
              </span>
              <span className="h-[5px] text-xs font-sans ps-1">online</span>
            </div>
          </div>
        </div>
        {/* Messages */}
        <div className="w-full max-h-[350px] overflow-y-auto flex flex-col p-4">
          {/* Message 1 */}
          <div className="flex items-start mb-2">
            <div className="w-1/12">
              <img
                className="w-10 h-10 rounded-full"
                src="https://www.kasandbox.org/programming-images/avatars/old-spice-man-blue.png"
                alt="dp"
              />
            </div>
            <div className="w-11/12">
              <div className="bg-gray-300 p-2 rounded-lg inline-block">
                Sure, I have a question about the project.
              </div>
            </div>
          </div>
          {/* Message 2 */}
          <div className="flex items-end mb-2 justify-end">
            <div className="w-11/12 text-right">
              <div className="bg-blue-500 text-white p-2 rounded-lg inline-block">
                Hello, how can I help you?
              </div>
            </div>
            <div className="w-1/12">
              <img
                className="w-10 h-10 rounded-full"
                src="https://www.kasandbox.org/programming-images/avatars/old-spice-man-blue.png"
                alt="dp"
              />
            </div>
          </div>
          {/* Add more messages as needed */}
        </div>
        {/* Input field and send button */}
        <div className="absolute bottom-0 left-0 right-0 mb-2 mx-4">
          <div className="w-full flex justify-center">
            <div className="flex items-center w-10/12">
              <input
                type="text"
                placeholder="Type a message"
                className="px-3 py-2 w-full border rounded-lg bg-gray-200 focus:outline-dotted"
              />
              <button className="w-1/12 bg-blue-500 text-white flex justify-center px-2 py-2 rounded-lg ml-2">
                <IoIosSend />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageChatSection;
