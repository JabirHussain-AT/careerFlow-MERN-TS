import { IUserData } from "../../adapters/database/mongoDB/schemas/userSchema";
import { IDependencies } from "../../entities/intrefaces/IUserInterfaces";

export const findUserByEmail_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      userRepo: { userExistCheck },
    },
  } = dependencies;

  if (!userExistCheck) throw new Error("repository is required  !");

  const interactor = async (userCredentials: IUserData) => {
    return await userExistCheck(userCredentials);
  };
  return { interactor };
};
