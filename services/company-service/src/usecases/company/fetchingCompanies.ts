import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";

export const fetchCompanies_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      companyRepo: { fetchCompanies },
    },
  } = dependencies;

  if (!fetchCompanies) throw new Error("repository is required !");

  const interactor = () => {
    return fetchCompanies();
  };
  return { interactor };
};
