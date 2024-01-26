import { userCollection } from "../..";
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
