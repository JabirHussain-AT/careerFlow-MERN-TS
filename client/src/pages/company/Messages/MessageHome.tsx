// MessageHome.tsx

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { chatUsersDetials } from '@/redux/actions/userActions';
import { fetchChatUsers } from '@/redux/actions/chatActions';
import MessagesSideBar from '@/components/company/Messages/MessagesSideBar';
import MessageChatSection from '@/components/company/Messages/MessageChatSection';
import { useDispatch, useSelector } from 'react-redux';
import { IUserSelector } from '@/interface/IUserSlice';
import { AppDispatch } from '@/redux/store';

const MessageHome: React.FC = () => {
  const [applicants, setApplicants] = useState<any>([]);
  const { user } = useSelector((state: IUserSelector) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const [selectedApplicant, setSelectedApplicant] = useState<any | null>(null);

  useEffect(() => {
  

    const fetchApplicants = async () => {
      try {
        const response = await dispatch(fetchChatUsers(user?._id));
        if (response?.payload?.data && response?.payload?.data?.length > 0) {
          let data = [response?.payload?.data , 'company']
          const userDetials = await dispatch(chatUsersDetials(data));
          setApplicants(userDetials.payload.data);
        }
      } catch (error) {
        console.error('Error fetching applicants:', error);
      }
    };

    fetchApplicants();

  }, [dispatch, user]);

  const handleApplicantSelect = (applicantId: any) => {
    console.log("🚀 ~ file: MessageHome.tsx:40 ~ handleApplicantSelect ~ applicantId:", applicantId)
    setSelectedApplicant(applicantId);
  };

  return (
    <div className="bg-white w-full overflow-hidden min-h-screen mb-5">
      <div className="w-full flex flex-wrap rounded-lg border">
        <MessagesSideBar
          applicants={applicants}
          onSelect={handleApplicantSelect}
          selectedApplicant={selectedApplicant}
        />
        {selectedApplicant && (
          <MessageChatSection applicant={selectedApplicant} />
        )}
      </div>
    </div>
  );
};

export default MessageHome;
