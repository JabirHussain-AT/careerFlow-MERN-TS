export interface ICustomError extends Error {
    code: number;
    message :string
  }

export interface IDependencies {
  usecases : IUseCasesData
  repositories : IRepositories 
}  

export interface IRepositoriesData {

  createNewUser : Function ,
  userExistCheck : Function ,
  saveOtp : Function ,
  verifyOtp : Function ,
  loginVerify : Function ,
  userExistorNot : Function ,
  fetchUsers  : Function ,
  getChatUserData  : Function ,
  userProfileUpdate  : Function ,
  userBasicDetialsUpdate  : Function ,
  fetchUser : Function ,
  changeBlockStatus  : Function ,
  saveTheJob : Function , 
  resetPass : Function 
}

export interface IUseCasesData {
  signUp_useCase : Function ,
  findUserByEmail_useCase : Function ,
  saveAndSendOtp_useCase : Function ,
  verifyOtp_useCase : Function ,
  login_useCase : Function ,
  userExist_useCase : Function ,
  getChatUserData_useCase  : Function ,
  sendPass_useCase : Function ,
  fetchUsers_useCase  : Function ,
  userProfileUpdate_useCase  : Function ,
  updateBasicDetials_useCase  : Function ,
  fetchUser_useCase : Function ,
  changeUserBlockSatus_useCase  : Function ,
  saveTheJob_useCase : Function ,
  resetPassword_useCase : Function
}

export interface IRepositories { 
  userRepo : IRepositoriesData
}

export interface IUseCases {
  usecases : IUseCasesData
}