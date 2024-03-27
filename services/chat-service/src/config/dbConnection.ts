import mongoose from "mongoose";
import color from 'colors'

const MONGODB_URL: string = String(process.env.MONGODB_URL) 
export default async ( ) => {
    mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log(color.green(`db connected with chat-service successfully`));
    })
    .catch((error) => {
        console.log(color.red(`an error happened during connecting with chat service ${error}`));
    })
}