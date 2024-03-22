import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";

export const getInterViewSchedule_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      companyRepo: { getInterViewSchedule },
    },
  } = dependencies;

  if (!getInterViewSchedule) throw new Error("repository is required !");

  const interactor = async (jobId: string, applicantId) => {
    const data = await getInterViewSchedule(jobId, applicantId);
    return data;
  };
  return { interactor };
};
