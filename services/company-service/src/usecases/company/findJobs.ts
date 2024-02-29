export const findJobs_useCase = (dependencies: any): any => {
  const {
    repositories: {
      companyRepo: { findJobs },
    },
  } = dependencies;

  if (!findJobs) throw new Error("repository is required !");

  const interactor = async (jobsDocs: any) => {
    console.log("in interactor finding   job in company use case");
    const data = await findJobs(jobsDocs);
    return data;
  };
  return { interactor };
};
