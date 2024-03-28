import color from 'colors'
import mongoose  from "mongoose";

const MONGO_URL : string = process.env.MONGO_DB_URL 
console.log("🚀 ~ file: dbConnection.ts:5 ~ MONGO_URL:", MONGO_URL)

export default () => {
   mongoose.connect(String(MONGO_URL))
   .then(()=>{
    console.log(color.green('db connected with the company service successfully '))
   })
   .catch((err )=>{
    console.log(color.red('db connection failed in company service with error ==>'),err)
   })
}
