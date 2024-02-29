import  User  from "../../../database/mongoDB/schemas/userSchema";
import { ObjectId } from "mongoose";

export default async (
   data : any
) : Promise<void> => {
    
    try{ 
        const user =  await User.findOneAndUpdate({email : data.email},{status : data.status,approved : data.approved },{new : true})
        console.log("==================");
        console.log("updating status throgh kafka ",user);
        console.log("================");

    } catch (error: any){
        console.log("user-updating stage  error: ",error?.message);
    }

}
