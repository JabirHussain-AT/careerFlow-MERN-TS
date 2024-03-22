import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";
import { sendMessages } from "../../util/externalServices/nodemailer/sendNotifications";

export const sendStatus_useCase = (dependencies : IDependencies )  =>{
   
    const interactor = (email : string  , intro : string ,reason : string )=>{
        return sendMessages( email , intro , reason)
    }   
    return {interactor}
}
