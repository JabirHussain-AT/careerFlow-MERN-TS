export const signUp_useCase = (dependencies : any) : any =>{
    const {
        repositories : {
                userRepo : {createNewUser},
        }
    } = dependencies ;  

    if(!createNewUser) throw new Error('repository is required !')

    const interactor = (userCredentials : any )=>{
        console.log('in interactor user use case')
        return createNewUser(userCredentials)
    }
    return {interactor}
}
