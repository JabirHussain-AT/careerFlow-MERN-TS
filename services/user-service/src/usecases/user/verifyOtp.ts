export const verifyOtp_useCase = (dependencies : any) =>{

    const {
        repositories :{
            userRepo : {verifyOtp}
        }
    } = dependencies

    console.log('verify otp usecase')

    if(!verifyOtp) throw new Error('Repository is required')

    const interactor = (user_email : string , otp : number) : boolean =>{
        try{
            return verifyOtp(otp , user_email)

        }catch(err : any){
            console.log(err,'err occured in the catch verify otp use case')
            return false
        }
    }
   return {interactor}
}