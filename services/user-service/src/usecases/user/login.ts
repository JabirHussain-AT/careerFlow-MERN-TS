export const login_useCase = (dependencies : any ) : any =>{
    const {
        repositories : {
            userRepo : { loginVerify }
        }
    } = dependencies

    console.log('in login useCase ')
    if(!loginVerify) throw  new Error

    const interactor = async (email : string, password : string ) =>{
        try{
            console.log('in interactor of the login use case')
            await loginVerify(email,password)

        }catch(err : any){
            return false
        }
    }
    return interactor
}