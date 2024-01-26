import { defaultMaxListeners } from "events";
import mongoose  from "mongoose";

const MONGO_URL : string = process.env.MONGO_DB_URL || 'mongodb://localhost:27017/user-service'

export default () => {
   mongoose.connect(MONGO_URL)
   .then(()=>{
    console.log('db connected with the user service successfully ')
   })
   .catch((err : any)=>{
    console.log('db connection failed in user service with error ==>',err)
   })
}
