import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";

export const preferedJobs_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      companyRepo: { getPreferedJobs },
    },
  } = dependencies;

  if (!getPreferedJobs) throw new Error("repository is required !");

  const interactor = async (prefferedJobs: any, page: any) => {
    const data = await getPreferedJobs(prefferedJobs, page);
    return data;
  };
  return { interactor };
};
