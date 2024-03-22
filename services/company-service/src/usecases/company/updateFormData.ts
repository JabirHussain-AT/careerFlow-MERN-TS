import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";

export const updateFormData_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      companyRepo: { updateFormData },
    },
  } = dependencies;

  if (!updateFormData) throw new Error("repository is required !");

  const interactor = (email: string, companyCredentials: any) => {
    return updateFormData(email, companyCredentials);
  };
  return { interactor };
};
