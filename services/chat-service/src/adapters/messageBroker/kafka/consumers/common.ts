import  Chat   from "../../../database/mongoDB/schemas/chatRoomSchema";
import { ObjectId } from "mongoose";

export default async (
   data : any
) : Promise<void> => {
    
    try{
        console.log("==========");
        console.log("chat kafka ");
        console.log("==========");

    } catch (error: any){
        console.log("error happened in the kafka - chat service: ",error?.message);
    }

}
