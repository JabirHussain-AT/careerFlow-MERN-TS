import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";

export const fetchJob_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      companyRepo: { fetchJob },
    },
  } = dependencies;

  if (!fetchJob) throw new Error("repository is required !");

  const interactor = async (jobId: string) => {
    const data = await fetchJob(jobId);

    return data;
  };
  return { interactor };
};
