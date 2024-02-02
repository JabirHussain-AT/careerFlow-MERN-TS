import {sendOtp} from '../../util/externalServices/nodemailer/sendOtp'

export const saveAndSendOtp_useCase = (dependencies : any) : any=>{
    const {
        repositories :{
            userRepo : {saveOtp}
        }
    } = dependencies ;

    console.log('sendOtp use case inside ')
    if(!saveOtp) throw new Error("repository is required")
    
    const interactor =  async (otp : number, user_email : string) =>{
        try{
            console.log('in interactor of the sendOtp Use Case')
            await saveOtp(otp,user_email)
            
            const status  = sendOtp(user_email,otp)
            if(!status) return false;
            

        }catch(err : any ){
            return false
        }
    }
    return {interactor}
}