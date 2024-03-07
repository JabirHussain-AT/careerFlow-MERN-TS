
export const preferedJobs_useCase = (dependencies: any): any => {
    const {
      repositories: {
        companyRepo: { getPreferedJobs },
      },
    } = dependencies;
  
    if (!getPreferedJobs) throw new Error("repository is required !");
  
    const interactor = async (prefferedJobs: any , page : any) => {
      console.log("in interactor prefered fetch  - job in company use case");
      const data = await getPreferedJobs(prefferedJobs , page);
      return data;
    };
    return { interactor };
  };
  