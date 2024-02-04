export const userExist_useCase = (dependencies: any): any => {
    const {
      repositories: {
        userRepo: { userExistorNot },
      },
    } = dependencies;
  
  if(!userExistorNot) throw new Error('repository is required  !')
  const interactor = async (email : string )=>{
       console.log('hey ',email)
      return await userExistorNot(email)
   }
   return {interactor}
  };
  