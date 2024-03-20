
export const removeScheduledInterview_useCase = (dependencies: any): any => {
    const {
      repositories: {
        companyRepo: { removeScheduledInterview },
      },
    } = dependencies;
  
    if (!removeScheduledInterview) throw new Error("repository is required !");
  
    const interactor = async ( jobId : string , userId : string ) => {        
      const data = await removeScheduledInterview( jobId  , userId);
      return data;
    };
    return { interactor };
  };
  