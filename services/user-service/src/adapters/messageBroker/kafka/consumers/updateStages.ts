import  User  from "../../../database/mongoDB/schemas/userSchema";
import { ObjectId } from "mongoose";

export default async (
   data : any
) : Promise<void> => {
    
    try{ 
        const user =  await User.findOneAndUpdate({email : data.email},{stage : data.stage , status : data.status},{new : true})
        console.log("==================");
        console.log("updating stage thrigh kafka ",user);
        console.log("================");

    } catch (error: any){
        console.log("user-updating stage  error: ",error?.message);
    }

}
