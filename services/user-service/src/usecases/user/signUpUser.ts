import { IUserData } from "../../adapters/database/mongoDB/schemas/userSchema";
import { IDependencies } from "../../entities/intrefaces/IUserInterfaces";

export const signUp_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      userRepo: { createNewUser },
    },
  } = dependencies;

  if (!createNewUser) throw new Error("repository is required !");

  const interactor = (userCredentials: IUserData) => {
    return createNewUser(userCredentials);
  };
  return { interactor };
};
