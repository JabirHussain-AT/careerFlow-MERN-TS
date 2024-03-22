import { IDependencies } from "../../entities/intrefaces/IUserInterfaces";

export const userExist_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      userRepo: { userExistorNot },
    },
  } = dependencies;

  if (!userExistorNot) throw new Error("repository is required  !");
  const interactor = async (email: string) => {
    return await userExistorNot(email);
  };
  return { interactor };
};
