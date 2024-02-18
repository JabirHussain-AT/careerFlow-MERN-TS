export const fetchUsers_useCase = (dependencies: any): any => {
    const {
      repositories: {
        userRepo: { fetchUsers },
      },
    } = dependencies;
  
  if(!fetchUsers) throw new Error('repository is required  !')
  const interactor = async (  )=>{
       console.log('hey ')
      return await fetchUsers()
   }
   return {interactor}
  };
  