import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";

export const editJob_useCase = ( dependencies: IDependencies ) => {
  const {
    repositories: {
      companyRepo: { editJobInCompany },
    },
  } = dependencies;

  if (!editJobInCompany) throw new Error("repository is required !");

  const interactor = (jobData: any, jobId: string | Object) => {
    return editJobInCompany(jobData, jobId);
  };
  return { interactor };
};
