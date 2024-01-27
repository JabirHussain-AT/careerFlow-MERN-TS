import { otpCollection, userCollection } from "../..";
import mongoose, { startSession } from "mongoose";
import { IUserData , IUserDoc} from "../../schemas/userSchema";


export const createNewUser = async (
  userCredentials: IUserData
): Promise<IUserData | boolean> => {
  try {
    const newUser = await userCollection.create(userCredentials);
    if (newUser) return newUser as IUserData;
    else throw new Error("Something went Wrong  during creating user ");
  } catch (err: any) {
    if (err.code === 11000) return false;
    return false;
  }
};

export const userExistCheck = async (userCredentials : IUserData ) :Promise< IUserData | boolean | IUserDoc  > =>{
  try{
    const userEmail = userCredentials?.email 
    let userExistOrNot = await userCollection.findOne({email:userEmail})
    if(!userExistOrNot)return false
    else return userExistOrNot
  }catch(err : any){
    console.log(err,'======  err happened in userRepo userExistCheck')
  }
} 

export const saveOtp = async (otp : number , email : string) =>{
  try{
    console.log('save otp repo')
    await otpCollection.findOneAndUpdate({email : email},{otp:otp},{upsert:true , new : true})
   .then((doc)=>{
    return doc
   })
   .catch((err : any)=>{
    console.log(err , 'err in the saveOtp')
   })
   
  }catch(err : any){
    console.log(err,'======  err happened in userRepo saveOtp repo')
  }
}


export const verifyOtp = async (otp : number , email : string )  =>{
  try{
    console.log('verify otp repo')
    let otpDoc = await otpCollection.findOne({email:email})

    if(otp === otpDoc?.otp){
      return  true
    }

    else return false
  }catch(err : any ){
    console.log(err,'====== err occured in the verify otp repo')
    return false
  } 
}
