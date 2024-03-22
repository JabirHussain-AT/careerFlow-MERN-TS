import  Company  from "../../../database/schemas/companySchema";
import { ObjectId } from "mongoose";

export default async (
   data : { }
) : Promise<void> => {
    
    try{

         const user =  await Company.find()
         console.log("==========");
          console.log("company kafka ",user);
           console.log("==========");

    } catch (error){
        console.log("user-unblocked auth-service error: ",error?.message);
    }

}
