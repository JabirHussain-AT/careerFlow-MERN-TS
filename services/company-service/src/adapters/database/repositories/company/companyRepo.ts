import { companyCollection , otpCollection } from "../..";
import { ICompanyData } from "../../schemas/companySchema";

export const createNewUser = async (
  userCredentials: ICompanyData
): Promise<ICompanyData | boolean> => {
  try {
    const newUser = await companyCollection.create(userCredentials);
    return newUser as ICompanyData; // Assuming userCollection.create returns a single document
  } catch (err: any) {
    if (err.code && (err.code === 11000 || err.code === 11001)) {
      // Duplicate key error (unique constraint violation)
      console.error("Duplicate key violation:", err);
      return false;
    } else {
      // Other errors
      console.error("Error creating user:", err);
      return false;
    }
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


// export const loginVerify = async(email : string , password : string) =>{
//   try{
//     let isUserExist  = await userCollection.findOne({email : email})
//     // console.log(isUserExist,'<<<<<<<<<<<>...........')
//     if(isUserExist == null){
//       return false 
//     }else{
//       // console.log("loginVerify repo");
//        return isUserExist
//     }
//   }catch(err : any){
//     console.log(err, "====== err occured in the verify otp repo");
//   }
// }