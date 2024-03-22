import { IDependencies } from "../../entities/intrefaces/IUserInterfaces";

export const userProfileUpdate_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      userRepo: { userProfileUpdate },
    },
  } = dependencies;

  if (!userProfileUpdate) throw new Error("repository is required !");

  const interactor = (
    userId: string,
    { updateField, updateValue }: { updateField: string; updateValue: any }
  ) => {
    return userProfileUpdate(userId, updateField, updateValue);
  };
  return { interactor };
};
