import  Company  from "../../../database/schemas/companySchema";
import { ObjectId } from "mongoose";

export default async (
   data : any
) : Promise<void> => {
    
    try{

         const user =  await Company.findOne({email : data.email})
        console.log("==========");
        console.log("user kafka ",user);
        console.log("==========");

    } catch (error: any){
        console.log("user-unblocked auth-service error: ",error?.message);
    }

}
