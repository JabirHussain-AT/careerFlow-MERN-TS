import { IDependencies } from "../../entities/intrefaces/IUserInterfaces";

export const resetPassword_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      userRepo: { resetPass },
    },
  } = dependencies;

  if (!resetPass) throw new Error("repository is required  !");

  const interactor = async (email : string , password : string) => {
    return await resetPass(email , password);
  };
  return { interactor };
};


