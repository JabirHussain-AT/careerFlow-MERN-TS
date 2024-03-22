import  Chat   from "../../../database/mongoDB/schemas/chatRoomSchema";
import { ObjectId } from "mongoose";

export default async (
   data : {}
) : Promise<void> => {
    
    try{

    } catch (error){
        console.log("error happened in the kafka - chat service: ",error?.message);
    }

}
