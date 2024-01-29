export const login_useCase = (dependencies : any ) : any =>{
    const {
        repositories : {
            userRepo : { loginVerify }
        }
    } = dependencies

    if(!loginVerify) throw  new Error
    const interactor = async (email : string, password : string ) =>{
        try{
            console.log('in interactor of the login use case')
            let result = await loginVerify(email,password)
            return result
        }catch(err : any){
            return false
        }
    }
    return {interactor}
}