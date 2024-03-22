import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";

export const signUp_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      companyRepo: { createNewUser },
    },
  } = dependencies;

  if (!createNewUser) throw new Error("repository is required !");

  const interactor = (userCredentials: any) => {
    return createNewUser(userCredentials);
  };
  return { interactor };
};
