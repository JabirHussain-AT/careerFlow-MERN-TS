import { IDependencies } from "../../entities/intrefaces/IUserInterfaces";

export const saveTheJob_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      userRepo: { saveTheJob },
    },
  } = dependencies;

  if (!saveTheJob) throw new Error("repository is required  !");

  const interactor = async (userId: string, jobId: string) => {
    return await saveTheJob(userId, jobId);
  };
  return { interactor };
};
