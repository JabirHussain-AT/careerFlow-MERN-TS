export const findUserByEmail_useCase = (dependencies: any): any => {
  const {
    repositories: {
      userRepo: { userExistCheck },
    },
  } = dependencies;

if(!userExistCheck) throw new Error('repository is required  !')

 const interactor = async (userCredentials : any )=>{
    console.log('here at findUserEmail ')
    return await userExistCheck(userCredentials)
 }
 return {interactor}
};
