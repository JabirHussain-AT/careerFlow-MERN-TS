import { ObjectId } from "mongoose";

export const jobApply_useCase = (dependencies: any): any => {
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
    console.log("in interactor applying    jobs in company use case");
    const data = await jobApply(jobId , jobDocs );
    return data;
  };
  return { interactor };
};
