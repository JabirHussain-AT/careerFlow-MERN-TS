// Import necessary dependencies and actions
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IUserSelector } from '@/interface/IUserSlice';
import { AppDispatch } from '@/redux/store';
import { getUserApplications } from '@/redux/actions/userActions'; // Import your action

// Define the JobApplication interface
interface JobApplication {
  id: string;
  roleName: string;
  companyName: string;
  companyLogo: string;
  appliedDate: string;
  hiringStage: string;
  likeways: string;
}

// MyApplications component
const MyApplications: React.FC = () => {


  const { user } = useSelector((state: IUserSelector) => state.user);
  const dispatch = useDispatch<AppDispatch>();



  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await dispatch(getUserApplications(user._id));
        const userDataFromServer = response.payload.data;
        console.log(userDataFromServer,'this is the user data from the server ')

      } catch (error) {
        console.error('Error fetching user applications:', error);
      }
    };

    fetchData();
  }, [dispatch, user._id]);

  // Sample job applications data
  const jobApplications: JobApplication[] = [
    {
      id: '1',
      roleName: 'Software Developer',
      companyName: 'ABC Tech',
      companyLogo: 'https://www.kasandbox.org/programming-images/avatars/orange-juice-squid.png',
      appliedDate: '2024-03-01',
      hiringStage: 'Applied',
      likeways: 'Email',
    },
    {
      id: '2',
      roleName: 'Frontend Developer',
      companyName: 'XYZ Corp',
      companyLogo: 'https://www.kasandbox.org/programming-images/avatars/purple-pi-pink.png',
      appliedDate: '2024-03-05',
      hiringStage: 'Reviewed',
      likeways: 'LinkedIn',
    },
    {
      id: '3',
      roleName: 'Backend Developer',
      companyName: '123 Inc',
      companyLogo: 'https://www.kasandbox.org/programming-images/avatars/primosaur-sapling.png',
      appliedDate: '2024-03-10',
      hiringStage: 'Shortlisted',
      likeways: 'Referral',
    },
    {
      id: '4',
      roleName: 'UI/UX Designer',
      companyName: 'Design Co.',
      companyLogo: 'https://www.kasandbox.org/programming-images/avatars/primosaur-tree.png',
      appliedDate: '2024-03-15',
      hiringStage: 'Interview',
      likeways: 'Website',
    },
  ];

  // Helper function to get hiring stage color
  const getHiringStageColor = (stage: string) => {
    switch (stage) {
      case 'Applied':
        return 'text-blue-500';
      case 'Reviewed':
        return 'text-green-500';
      case 'Shortlisted':
        return 'text-yellow-500';
      case 'Interview':
        return 'text-purple-500';
      default:
        return 'text-gray-500';
    }
  };

  // Render the component
  return (
    <div className='m-5 flex justify-center items-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {jobApplications.map((application) => (
          <div
            key={application.id}
            className='bg-white border border-gray-300 p-6 rounded-md shadow-md transition-transform transform hover:scale-105'
          >
            <div className='flex gap-3 mb-8'>
              <img
                src={application.companyLogo}
                alt={`${application.companyName} Logo`}
                className='w-10 object-cover rounded-full'
              />
              <h1 className='font-serif font-semibold'>{application.companyName}</h1>
            </div>
            <h3 className='text-xl font-semibold mb-2'>{application.roleName}</h3>
            <p className='text-sm text-gray-500 mb-2'>{application.companyName}</p>
            <p className='text-sm text-gray-500 mb-2'>Applied Date: {application.appliedDate}</p>
            <div className='flex items-center space-x-2 mb-2'>
              <span className='text-sm text-gray-500 font-semibold'>Hiring Stage:</span>
              <span className={`text-sm font-semibold ${getHiringStageColor(application.hiringStage)}`}>
                {application.hiringStage}
              </span>
            </div>
            <p className='text-sm text-gray-500'>Likeways: {application.likeways}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyApplications;
