import color from 'colors'
import mongoose  from "mongoose";


const MONGO_URL : string = process.env.MONGO_DB_URL 

export default () => {
   mongoose.connect(String(MONGO_URL))
   .then(()=>{
    console.log(color.green('db connected with the user service successfully '))
   })
   .catch((err : unknown )=>{
    console.log(color.red('db connection failed in user service with error ==>'),err)
   })
}
