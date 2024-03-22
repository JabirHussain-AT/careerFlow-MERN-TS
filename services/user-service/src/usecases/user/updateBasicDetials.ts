import { IDependencies } from "../../entities/intrefaces/IUserInterfaces";

export const updateBasicDetials_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      userRepo: { userBasicDetialsUpdate },
    },
  } = dependencies;

  if (!userBasicDetialsUpdate) throw new Error("repository is required !");

  const interactor = (
    userId: string,
    dataToUpload: {
      phoneNumber: number;
      dob: string;
      location: string;
      position: string;
      _id: string;
    }
  ) => {
    return userBasicDetialsUpdate(userId, dataToUpload);
  };
  return { interactor };
};
