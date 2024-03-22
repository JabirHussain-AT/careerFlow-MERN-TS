import { ObjectId } from "mongoose";
import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";

export const jobApply_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      companyRepo: { jobApply },
    },
  } = dependencies;

  if (!jobApply) throw new Error("repository is required !");

  const interactor = async (
    jobId: string,
    jobDocs: {
      appplicantId: string | ObjectId;
      email: string;
      name: string;
      number: number;
      resume: string;
    }
  ) => {
    const data = await jobApply(jobId, jobDocs);
    return data;
  };
  return { interactor };
};
