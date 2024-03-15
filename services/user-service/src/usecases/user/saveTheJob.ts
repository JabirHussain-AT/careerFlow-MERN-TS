export const saveTheJob_useCase = (dependencies: any): any => {
  const {
    repositories: {
      userRepo: { saveTheJob },
    },
  } = dependencies;

  if (!saveTheJob) throw new Error("repository is required  !");

  const interactor = async ( userId : string , jobId : string ) => {
    return await saveTheJob( userId , jobId );
  };
  return { interactor };
};
