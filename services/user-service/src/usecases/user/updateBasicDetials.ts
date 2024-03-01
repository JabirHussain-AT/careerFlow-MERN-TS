
export const updateBasicDetials_useCase = (dependencies : any) : any =>{
    const {
        repositories : {
                userRepo : {userBasicDetialsUpdate},
        }
    } = dependencies ;  


    if(!userBasicDetialsUpdate) throw new Error('repository is required !')

    const interactor = (userId  : string ,  dataToUpload : any  )=>{
        // console.log('in interactor user use case : userProfileUpdate Usecase ')
        return userBasicDetialsUpdate(userId ,dataToUpload )
    }
    return {interactor}
}


  
