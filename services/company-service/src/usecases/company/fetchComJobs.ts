import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";

export const fetchComJobs_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      companyRepo: { fetchComJobInCompany },
    },
  } = dependencies;

  if (!fetchComJobInCompany) throw new Error("repository is required !");

  const interactor = (companyId: any) => {
    return fetchComJobInCompany(companyId);
  };
  return { interactor };
};
