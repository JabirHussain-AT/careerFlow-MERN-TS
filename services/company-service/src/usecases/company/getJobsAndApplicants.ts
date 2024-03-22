import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";

export const getJobAndApplicantsCount_useCase = (
  dependencies: IDependencies
) => {
  const {
    repositories: {
      companyRepo: { getJobsAndApplicantsCount },
    },
  } = dependencies;

  if (!getJobsAndApplicantsCount) throw new Error("repository is required !");

  const interactor = async (companyId: string) => {
    const data = await getJobsAndApplicantsCount(companyId);
    return data;
  };
  return { interactor };
};
