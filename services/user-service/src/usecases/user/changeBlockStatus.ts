export const changeUserBlockSatus_useCase = (dependencies: any): any => {
    const {
      repositories: {
        userRepo: { changeBlockStatus },
      },
    } = dependencies;
  
  if(!changeBlockStatus) throw new Error('repository is required  !')
  const interactor = async ( userId : string )=>{

      return await changeBlockStatus(userId)
   }
   return {interactor}
  };
  