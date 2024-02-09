import { sendMessages } from "../../util/externalServices/nodemailer/sendNotifications";

export const sendStatus_useCase = (dependencies : any) : any =>{
    const {
        repositories : {
                companyRepo : {createNewUser},
        }
    } = dependencies ;  

    if(!createNewUser) throw new Error('repository is required !')

    const interactor = (password : string  , email : string )=>{
        return 
    }   
    return {interactor}
}
