
export const userProfileUpdate_useCase = (dependencies : any) : any =>{
    const {
        repositories : {
                userRepo : {userProfileUpdate},
        }
    } = dependencies ;  


    if(!userProfileUpdate) throw new Error('repository is required !')

    const interactor = (userId  : string , { updateField , updateValue} : { updateField : string , updateValue : any } )=>{
        console.log('in interactor user use case : userProfileUpdate Usecase ')
        return userProfileUpdate(userId ,updateField ,updateValue )
    }
    return {interactor}
}


  
