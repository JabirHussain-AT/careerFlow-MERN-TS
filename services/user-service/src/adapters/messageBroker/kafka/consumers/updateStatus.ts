import  User  from "../../../database/mongoDB/schemas/userSchema";
import { ObjectId } from "mongoose";

export default async (
   data : {
    
    email : string ,
    status : string ,
    approved : boolean
    
   }
) : Promise<void> => {
    
    try{ 
        const user =  await User.findOneAndUpdate({email : data.email},{status : data.status, approved : data.approved },{new : true})


    } catch (error: any){
        console.log("user-updating stage  error: ",error?.message);
    }

}
