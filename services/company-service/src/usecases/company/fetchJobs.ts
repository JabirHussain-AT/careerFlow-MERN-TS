import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";

export const fetchJobs_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      companyRepo: { fetchJobs },
    },
  } = dependencies;

  if (!fetchJobs) throw new Error("repository is required !");

  const interactor = async () => {
    const data = await fetchJobs();
    return data;
  };
  return { interactor };
};
