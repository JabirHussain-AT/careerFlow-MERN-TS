import { otpCollection, userCollection } from "../..";
import mongoose, { startSession } from "mongoose";
import { IUserData, IUserDoc } from "../../schemas/userSchema";





export const createNewUser = async (
  userCredentials: IUserData
): Promise<IUserData | boolean> => {
  try {
    const newUser = await userCollection.create(userCredentials);
    return newUser as IUserData; // Assuming userCollection.create returns a single document
  } catch (err: any) {
    if (err.code && (err.code === 11000 || err.code === 11001)) {
      // Duplicate key error (unique constraint violation)
      console.error('Duplicate key violation:', err);
      return false;
    } else {
      // Other errors
      console.error('Error creating user:', err);
      return false;
    }
  }
};



export const userExistCheck = async (
  userCredentials: IUserData
): Promise<IUserData | boolean | IUserDoc> => {
  try {
    const userEmail = userCredentials?.email;
    let userExistOrNot = await userCollection.findOne({ email: userEmail });
    if (!userExistOrNot) {
      return false;
    } else {
      return userExistOrNot ? true : false;
    }
  } catch (err: any) {
    console.log(err, "======  err happened in userRepo userExistCheck");
  }
};




export const saveOtp = async (otp: number, email: string) => {
  try {
    console.log("save otp repo");

    setTimeout(()=>{
     otpCollection.findOneAndDelete({email : email})
    },120*1000)

    await otpCollection
      .findOneAndUpdate(
        { email: email },
        { otp: otp },
        { upsert: true, new: true }
      )
      .then((doc) => {
        return doc;
      })
      .catch((err: any) => {
        console.log(err, "err in the saveOtp");
      });
  } catch (err: any) {
    console.log(err, "======  err happened in userRepo saveOtp repo");
  }
};



export const verifyOtp = async (otp: number, email: string) => {
  try {
    console.log("verify otp repo");
    let otpDoc = await otpCollection.findOne({ email: email });

    if (otp === otpDoc?.otp) {
      return true;
    } else return false;
  } catch (err: any) {
    console.log(err, "====== err occured in the verify otp repo");
    return false;
  }
};


export const loginVerify = async(email : string , password : string) =>{
  try{
    let isUserExist  = await userCollection.findOne({email : email})
    // console.log(isUserExist,'<<<<<<<<<<<>...........')
    if(isUserExist == null){
      return false 
    }else{
      // console.log("loginVerify repo");
       return isUserExist
    }
  }catch(err : any){
    console.log(err, "====== err occured in the verify otp repo");
  }
}
export const userExistorNot = async(email : string ) =>{
  try{
    let isUserExist  = await userCollection.findOne({email : email})
    console.log(email,'this is the email')
    if(isUserExist == null){
      return false 
    }else if(isUserExist){
       return true
    }
  }catch(err : any){
    console.log(err, "====== err occured in the userExistorNot");
  }
}


export const fetchUsers = async(email : string ) =>{
  try{
    let users = await userCollection.find()
    console.log('this is the email')
    if(users == null){
      return false 
    }else if(users){
       return users
    }
  }catch(err : any){
    console.log(err, "====== err occured in the userExistorNot");
  }
}




export const userProfileUpdate = async(userId : string , updateField : string , updateValue : any) =>{
  try{
     let data = userCollection.findOneAndUpdate({_id : userId } , { [updateField] : updateValue},{new : true})
     if(data){
      return data
     }else{
      return false
     }
      
  }catch(err : any){
    console.log(err, "====== err occured in the userExistorNot");
  }
}


