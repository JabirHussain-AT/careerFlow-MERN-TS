import  User  from "../../../database/mongoDB/schemas/userSchema";
import { ObjectId } from "mongoose";

export default async (
   data : any
) : Promise<void> => {
    
    try{
        let dataToSave = {
            _id : data?._id ,
            email : data?.email ,
            role : data?.role ,
            userName : data?.userName,
            password : data?.password,
            stage : 'pending' ,
            approved : true 
        }
         const user =  await User.create(dataToSave)
        console.log("==========");
        console.log("user kafka ",user);
        console.log("==========");

    } catch (error: any){
        console.log("user-unblocked auth-service error: ",error?.message);
    }

}
