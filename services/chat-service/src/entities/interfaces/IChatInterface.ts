export interface ICustomError extends Error {
    code: number;
    message :string
  }

export interface IDependencies {
    repositories : IRepositories ,
    usecases : IUseCases
}  


//Repositories 
export interface IChatRepositoriesData {
    createNewChatroom : Function 
    fetchChatUsers : Function 
}

export interface IMessageRepositoriesData {
    saveMessage :  Function ,
    fetchChatUserChat  : Function ,
    getUnreadMessagesCount  : Function ,
    changeUnreadStatus : Function 
}


//UseCases
export interface IChatUseCasesData {
    creatNewRoom_useCase  : Function
    fetchChatUsers_useCase : Function 
}

export interface IMessageUseCasesData {
    saveMessage_useCase   : Function
    fetchuserChat_useCase  : Function
    unreadMessagesCount_useCase  : Function
    changeUnreadStatus_useCase : Function
}


//Synching Repo's and Usecases 
export interface IRepositories { 
  chatRepo : IChatRepositoriesData,
  messageRepo : IMessageRepositoriesData
}

export interface IUseCases {
    chatUseCases : IChatUseCasesData ,
    messageUseCases : IMessageUseCasesData
}
//  ---------------------------------------------------
