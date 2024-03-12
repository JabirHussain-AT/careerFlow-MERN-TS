import React, { useState, useEffect, useRef } from "react";
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSocket } from "@/contexts/socketContext";
import { saveChatMessages } from "@/redux/actions/chatActions";
import { AppDispatch } from "@/redux/store";

interface MessageChatSectionProps {
  applicant: {
    _id: string;
    profilePic: string;
    userName: string;
  };
}

const MessageChatSection: React.FC<MessageChatSectionProps> = ({
  applicant,
}) => {
  const { socket } = useSocket();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: any) => state.user);
  const [messages, setMessages] = useState<any[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [recieverStatus, setRecieverStatus] = useState<boolean>(false);


  useEffect(() => {
    // Clear messages when the applicantId changes
    setMessages([]);
  }, [applicant]);

  useEffect(() => {
    if (messagesContainerRef.current) {
      autoScroll();
    }
  }, [messages, applicant]);



  useEffect(() => {
    const intervalId = setInterval(() => {
      socket &&
        socket.emit("status-check", {
          receiverId: applicant?._id,
          senderId: user?._id,
        });
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [socket, applicant?._id, user?._id]);




  useEffect(() => {
    socket &&
      socket.off("new-message").on("new-message", (message: any) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

         // status check
         socket.off("statusCheck-result").on("statusCheck-result", (status: any) => {
          setRecieverStatus(status);
          console.log(status , '------------------')
        });
  }, [socket]);



  const autoScroll = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };



  const sendMessage = async () => {
    if (inputMessage.trim() === "") return;

    // Add the message to the state locally
    const sentMessage = {
      content: inputMessage,
      senderId: user?._id,
      sentByUser: true,
    };
    
    let temp ={
      content : inputMessage , 
      senderId : user?._id ,
      recieverId : applicant?._id ,
      latestMessage  : inputMessage 
    } 

    const savedMessage =  dispatch(saveChatMessages(temp))

    setMessages((prevMessages) => [...prevMessages, sentMessage]);

    // Emit the message to the server
    const toSendId = applicant._id;
    console.log(toSendId, " jabir hussian ");
    socket.emit("send-message", {
      content: inputMessage,
      receiverId: toSendId,
      senderId: user?._id,
    });

    // Clear the input field
    setInputMessage("");
  };




  return (
    <div className="relative bg-green-100 w-7/12 rounded-lg overflow-hidden border shadow-lg">
      <div className="w-full h-12 flex bg-red-50">
        {/* Online status, name, and profile pic */}
        <img
          className="h-10 rounded-full p-1 mt-2 "
          src={`${applicant?.profilePic}`}
          alt=""
        />
        <div className="flex flex-col items-center gap-1">
          <p className="text-serif  font-semibold text-sm  ">
            {applicant?.userName}
          </p>
          <p
            className={`text-mono font-semibold text-xs text-gray-500 ${
              recieverStatus
                ? "bg-green-200 px-2 rounded-sm text-xs text-green-700"
                : "text-gray-400"
            }`}
          >
            {recieverStatus ? "online" : "offline"}
          </p>
        </div>
      </div>
      <div
        ref={messagesContainerRef}
        className="w-full overflow-y-auto h-5/6 flex flex-col p-4"
      >
        {messages &&
          messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-${
                message.sentByUser ? "end" : "start"
              } mb-2 ${message.sentByUser ? "justify-end" : ""}`}
            >
              <div
                className={`w-${
                  message.sentByUser ? "11/12 text-right" : "1/12"
                }`}
              >
                <div
                  className={`bg-${
                    message.sentByUser ? "blue-500 text-white" : "gray-300"
                  } p-2 w-50 rounded-lg inline-block`}
                >
                  {message.content}
                </div>
              </div>
              <div className={`w-${message.sentByUser ? "1/12" : "11/12"}`}>
                {message.sentByUser ? (
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://www.kasandbox.org/programming-images/avatars/old-spice-man-blue.png"
                    alt="dp"
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 mb-2 mx-4">
        <div className="w-full flex justify-center">
          <div className="flex items-center w-10/12">
            <input
              type="text"
              placeholder="Type a message"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="px-3 py-2 w-full border rounded-lg bg-gray-200 focus:outline-dotted"
            />
            <button
              onClick={sendMessage}
              className="w-1/12 bg-blue-500 text-white flex justify-center px-2 py-2 rounded-lg ml-2"
            >
              <IoIosSend />
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MessageChatSection;
