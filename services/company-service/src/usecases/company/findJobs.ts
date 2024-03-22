import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";

export const findJobs_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      companyRepo: { findJobs },
    },
  } = dependencies;

  if (!findJobs) throw new Error("repository is required !");

  const interactor = async (jobsDocs: any) => {
    const data = await findJobs(jobsDocs);
    return data;
  };
  return { interactor };
};
