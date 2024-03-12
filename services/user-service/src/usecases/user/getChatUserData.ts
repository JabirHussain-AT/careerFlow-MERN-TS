export const getChatUserData_useCase = (dependencies: any): any => {
  const {
    repositories: {
      userRepo: { getChatUserData },
    },
  } = dependencies;

  if (!getChatUserData) throw new Error("repository is required  !");
  const interactor = async ( userDataContainer ) => {
    return await getChatUserData( userDataContainer);
  };
  return { interactor };
};
