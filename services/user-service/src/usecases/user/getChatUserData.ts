import { IDependencies } from "../../entities/intrefaces/IUserInterfaces";

export const getChatUserData_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      userRepo: { getChatUserData },
    },
  } = dependencies;

  if (!getChatUserData) throw new Error("repository is required  !");

  const interactor = async (userDataContainer: any) => {
    return await getChatUserData(userDataContainer);
  };
  return { interactor };
};
