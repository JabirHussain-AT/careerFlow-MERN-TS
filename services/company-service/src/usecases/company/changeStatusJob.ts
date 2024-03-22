import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";

export const changeStatus_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      companyRepo: { changeJobStatus },
    },
  } = dependencies;

  if (!changeJobStatus) throw new Error("repository is required !");

  const interactor = (jobId: string, value: boolean) => {
    return changeJobStatus(jobId, value);
  };
  return { interactor };
};
