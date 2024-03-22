import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";

export const changeJobApplicationStatus_useCase = (
  dependencies: IDependencies
) => {
  const {
    repositories: {
      companyRepo: { changeJobApplicationStatus },
    },
  } = dependencies;

  if (!changeJobApplicationStatus) throw new Error("repository is required");

  const interactor = async (
    applicantId: string,
    jobId: string,
    value: string
  ) => {
    try {
      const data = await changeJobApplicationStatus(applicantId, jobId, value);
      return data;
    } catch (err: any) {
      return false;
    }
  };
  return { interactor };
};
