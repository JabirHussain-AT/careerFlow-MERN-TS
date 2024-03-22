import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";

export const scheduleInterView_useCase = (dependencies: IDependencies ) => {
    const {
      repositories: {
        companyRepo: { scheduleInterview },
      },
    } = dependencies;
  
    if (!scheduleInterview) throw new Error("repository is required !");
  
    const interactor = async (interviewData: any ) => {
      const data = await scheduleInterview(interviewData);
      return data;
    };
    return { interactor };
  };
  