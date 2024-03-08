import MessageChatSection from "@/components/company/Messages/MessageChatSection";
import MessagesSideBar from "@/components/company/Messages/MessagesSideBar";
import React from "react";

const MessageHome: React.FC = () => {
  return (
    <div className="bg-white w-full min-h-screen mb-5">
      <div className="w-full flex flex-wrap mt-10 rounded-lg border">
        {/* Side bar showing messages pending */}
        <MessagesSideBar />
        {/* Main content */}
         <MessageChatSection />
      </div>
    </div>
  );
};

export default MessageHome;
