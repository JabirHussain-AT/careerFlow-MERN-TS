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
        logo: string;
        _id: string;
        userName: string;
    };
    }

    const MessageChatSectionUser: React.FC<MessageChatSectionProps> = ({
    applicant,
    }) => {
    console.log(
        "🚀 ~ file: MessageChatSectionUser.tsx:15 ~ applicantId:",
        applicant
    );
    const { socket } = useSocket();
    const dispatch = useDispatch<AppDispatch>();
    const { user } = useSelector((state: any) => state.user);
    const [messages, setMessages] = useState<any[]>([]);
    const [recieverStatus, setRecieverStatus] = useState<boolean>(false);
    const [inputMessage, setInputMessage] = useState<string>("");
    const messagesContainerRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //   const newSocket = io("http://localhost:3005");
    //   newSocket.emit("join-user-room", user._id);
    //   setSocket(newSocket);

    //   return () => {
    //     if (socket) {
    //       socket.disconnect();
    //     }
    //   };
    // }, [ user?._id]);

    useEffect(() => {
        // Clear messages when the applicantId changes
        setMessages([]);
    }, [applicant?._id]);

    useEffect(() => {
        if (messagesContainerRef.current) {
        autoScroll();
        }
    }, [messages, applicant?._id]);



    

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
        // console.log("🚀 ~ file: MessageChatSection.tsx:32 ~ socket&&socket.off ~ message:", message);

        setMessages((prevMessages) => [...prevMessages, message]);
        if (location.pathname !== "/") {
            // toast.info("New Message Received", {
            //   position: "top-left",
            //   autoClose: 3000,
            //   hideProgressBar: false,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            //   draggable: true,
            // });
        }
        });
        socket.off("statusCheck-result").on("statusCheck-result", (status: any) => {
        setRecieverStatus(status);

        });
    }, [socket]);

    const autoScroll = () => {
        if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTop =
            messagesContainerRef.current.scrollHeight;
        }
    };

    const sendMessage = () => {
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
        <div className="w-full h-12 flex gap-3 bg-red-50">
            {/* Online status, name, and profile pic */}
            <img
            className="h-10 rounded-full p-1 mt-2 "
            src={`${applicant?.logo}`}
            alt=""
            />
        <div className=" flex flex-col items-center gap-1"  >
                    <p className="text-serif  font-semibold text-sm  ">{applicant?.userName}</p>
                    <p className={`text-mono  font-semibold text-xs text-gray-500 ${ recieverStatus ?  'bg-green-200 px-2 rounded-sm text-xs text-green-700' : 'text=gray-400'}` }>{recieverStatus ? " online" : "ofline" }</p>
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

    export default MessageChatSectionUser;
