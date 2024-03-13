import { IUserSelector } from '@/interface/IUserSlice';
import { getUserApplications } from '@/redux/actions/userActions';
import { AppDispatch } from '@/redux/store';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { parseISO, format, differenceInDays } from 'date-fns';

const MyInterviews = () => {
    const [jobInterviews, setJobInterViews] = useState<any[]>([]);
    const dispatch = useDispatch<AppDispatch>();

    const { user } = useSelector((state: IUserSelector) => state.user);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await dispatch(getUserApplications(user?._id));
                const userDataFromServer = response.payload.data;

                // Filter job applications based on the presence of schedule in applicants
                const filteredApplications = userDataFromServer.filter((job: any) => {
                    return job.applicants.some((applicant: any) => applicant.schedule);
                });

                setJobInterViews(filteredApplications);
            } catch (error) {
                console.error("Error fetching user applications:", error);
            }
        };

        fetchData();
    }, [dispatch, user?._id]);

    const daysLeft = (date: string) => {
        const interviewDate = parseISO(date);
        const currentDate = new Date();
        return differenceInDays(interviewDate, currentDate);
    };

    return (
        <div className="container mx-auto px-4 pb-5">
            <h1 className="text-3xl font-bold mb-8">My Interviews</h1>
            {jobInterviews.length === 0 ? (
                <p className="text-gray-700">Currently no interviews scheduled</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {jobInterviews.map((interview, index) => (
                        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-lg font-semibold text-blue-500">{interview.applicants[0].schedule.InterviewType} at    {interview?.companyId?.userName} </div>
                                    <div className="text-sm text-gray-600">{daysLeft(interview.applicants[0].schedule.date)} days left</div>
                                </div>
                                <div className="text-xl font-semibold">{interview.applicants[0].schedule.interviewName}</div>
                                <div className="text-sm flex gap-3 text-gray-600 mb-2">
                                    <img className='w-11 h-10 rounded-full' src={interview?.companyId?.logo} alt="" />
                                    {interview?.companyId?.userName}
                                </div>
                                <div className="text-sm text-gray-600">
                                    <span className="font-semibold">Date:</span> {format(parseISO(interview.applicants[0].schedule.date), 'MMMM dd, yyyy')}<br />
                                    <span className="font-semibold">Time:</span> {interview.applicants[0].schedule.time}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyInterviews;
