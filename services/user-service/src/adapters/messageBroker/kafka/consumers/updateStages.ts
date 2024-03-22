import  User  from "../../../database/mongoDB/schemas/userSchema";
import { ObjectId } from "mongoose";

export default async (
   data : {
    email : string ,
    stage : string ,
    status : string 
   }
) : Promise<void> => {
    
    try{ 
        const user =  await User.findOneAndUpdate({email : data.email},{stage : data.stage , status : data.status},{new : true})


    } catch (error: any){
        console.log("user-updating stage  error: ",error?.message);
    }

}
