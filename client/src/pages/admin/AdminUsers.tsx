import React, { useState } from "react";
import { FaCheck, FaBan, FaArrowAltCircleRight } from "react-icons/fa";
import AlertBox from "@/components/common/AlertBox";

const AdminUsers = () => {
  const [users, setUsers] = useState([
    {
      id: "1",
      userName: "John Doe",
      email: "john@example.com",
      status: "active",
    },
    {
      id: "2",
      userName: "Jane Doe",
      email: "jane@example.com",
      status: "blocked",
    },
    // Add more sample users as needed
  ]);

  const makeChange = (id : any , status : any) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, status } : user))
    );
  };

  const handleBlock = (userId : any ) => {
    console.log(`Block user with ID ${userId}`);
    // Add your logic here to block the user
    makeChange(userId, "blocked");
  };

  const handleUnblock = (userId : any) => {
    console.log(`Unblock user with ID ${userId}`);
    // Add your logic here to unblock the user
    makeChange(userId, "active");
  };

  return (
    <div className="container mx-auto mt-8 p-8">
      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-green-500 rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4">Sr.No</th>
              <th className="py-2 px-4">User Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">More</th>
              <th className="py-2 px-4 w-auto">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users.map((user, index) => (
              <tr key={user.id} className="bg-white border-b">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-5">{user.userName}</td>
                <td className="py-2 px-4">
                  <a href={`mailto:${user.email}`} className="text-blue-500 underline">
                    {user.email}
                  </a>
                </td>
                <td className="py-2 px-2">{user.status}</td>
                <td className="py-2 flex justify-center mt-2 text-gray-600 cursor-pointer">
                  <FaArrowAltCircleRight />
                </td>
                <td className="text-black">
                  <div className="flex justify-center mt-1">
                    {user.status === "active" && (
                      <AlertBox
                        button={
                          <FaBan className="text-red-500 cursor-pointer mx-2" />
                        }
                        ques={"Are you sure you want to block this user?"}
                        onConfirm={() => handleBlock(user.id)}
                      />
                    )}
                    {user.status === "blocked" && (
                      <AlertBox
                        button={
                          <FaCheck
                            className="text-green-500 cursor-pointer mx-2"
                          />
                        }
                        ques={"Are you sure you want to unblock this user?"}
                        onConfirm={() => handleUnblock(user.id)}
                      />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
