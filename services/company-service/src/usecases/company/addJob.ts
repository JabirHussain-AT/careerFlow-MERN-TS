import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";

export const addJob_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      companyRepo: { addJobInCompany },
    },
  } = dependencies;

  if (!addJobInCompany) throw new Error("repository is required !");

  const interactor = (companyData: any) => {
    console.log("in interactor add  job in company use case");
    return addJobInCompany(companyData);
  };
  return { interactor };
};
