import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";

export const getMyJobApplications_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      companyRepo: { getMyJobApplications },
    },
  } = dependencies;

  if (!getMyJobApplications) throw new Error("repository is required !");

  const interactor = async (userId: string) => {
    const data = await getMyJobApplications(userId);
    return data;
  };
  return { interactor };
};
