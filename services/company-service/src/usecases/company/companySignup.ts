export const signUp_useCase = (dependencies : any) : any =>{
    const {
        repositories : {
                userRepo : {createNewUser},
        }
    } = dependencies ;  
    console.log('from the signUP use cases in use cases-company ')


    if(!createNewUser) throw new Error('repository is required !')

    const interactor = (userCredentials : any )=>{
        console.log('in interactor user use case')
        return createNewUser(userCredentials)
    }
    return {interactor}
}
