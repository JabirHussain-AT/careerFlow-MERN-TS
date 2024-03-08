import MessageChatSection from "@/components/company/Messages/MessageChatSection";
import MessagesSideBar from "@/components/company/Messages/MessagesSideBar";
import NavBar from "@/components/user/Home/NavBar";
import React from "react";

const Messages: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className="w-full min-h-screen  bg-green-200">
        <div className="flex p-10 justify-center">
          <MessagesSideBar />
          <MessageChatSection />
        </div>
      </div>
    </div>
  );
};

export default Messages;
