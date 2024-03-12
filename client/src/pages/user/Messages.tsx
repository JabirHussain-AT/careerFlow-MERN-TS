import React, { useState, useEffect } from 'react';
import { chatCompanyDetials } from '@/redux/actions/companyActions';
import { fetchChatUsers } from '@/redux/actions/chatActions';
import MessagesSideBarUsers from '@/components/company/Messages/MessageSideBarUsers';
import MessageChatSectionUser from '@/components/company/Messages/MessageChatSectionUser';
import { useDispatch, useSelector } from 'react-redux';
import { IUserSelector } from '@/interface/IUserSlice';
import { AppDispatch } from '@/redux/store';

const MessageHome: React.FC = () => {
  const [applicants, setApplicants] = useState<any>([]);
  const { user } = useSelector((state: IUserSelector) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const [selectedApplicant, setSelectedApplicant] = useState()

  useEffect(() => {
    
    const fetchApplicants = async () => {
      try {
        const response = await dispatch(fetchChatUsers(user?._id));
        if (response?.payload?.data && response?.payload?.data?.length > 0) {
          console.log('resssssssssss ',response?.payload.data)
          let data = [response?.payload?.data , 'user']
          console.log("🚀 ~ file: Messages.tsx:26 ~ fetchApplicants ~ data:", data)
       
          const companyDetials  = await dispatch(chatCompanyDetials(data));
          setApplicants(companyDetials.payload.data);
        }
      } catch (error) {
        console.error('Error fetching applicants:', error);
      }
    };

    fetchApplicants();

  
  }, [dispatch, user]);

  const handleApplicantSelect = (applicant: any) => {
    setSelectedApplicant(applicant);
  };

  return (
    <div className="bg-white w-full overflow-hidden min-h-screen mb-5">
      <div className="w-full flex flex-wrap rounded-lg border">
        <MessagesSideBarUsers
          applicants={applicants}
          onSelect={handleApplicantSelect}
          selectedApplicant={selectedApplicant}
        />
        {selectedApplicant && (
          <MessageChatSectionUser applicant={selectedApplicant} />
        )}
      </div>
    </div>
  );
};

export default MessageHome;
