import company from ".";
import { companyCollection , otpCollection } from "../..";
import companyDetialSend from "../../../messageBroker/kafka/producers/companyDetialSend";
import updateStage from "../../../messageBroker/kafka/producers/updateStages";
import { ICompanyData } from "../../schemas/companySchema";

export const createNewUser = async (
  userCredentials: ICompanyData
): Promise<ICompanyData | boolean> => {
  try {
    console.log(userCredentials,'-----------------')
    const newUser = await companyCollection.create(userCredentials);

    let data = {
      email : newUser?.email as string ,
      role : 'company' ,
      userName : newUser.userName  ,
      password : newUser?.password as string
    }

    await companyDetialSend(data)

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

export const updateFormData = async ( email : string , companyCredentials : any ) => {
  try{
    let company = await companyCollection.findOneAndUpdate({email : email},companyCredentials , {upsert : true , new : true})
    if(company){
      let data ={
        stage : 'completed',
        email : company.email as string
      }
       updateStage(data)
    }
     return company ?? false
  }catch(err : any){
    console.log(err , '================== in the updateFormData catch ')
  }
}



export const fetchCompanies = async ( email : string , companyCredentials : any ) => {
  try{


    let company = await companyCollection.find().select('-password')
     return company ?? false

  }catch(err : any){

    console.log(err , '================== in the updateFormData catch ')

  }
}
export const updateApprovel = async ( companyId , status) => {
  try{

    let value = status === true ? 'approved' : 'rejected'
    let company = await companyCollection.findOneAndUpdate({_id:companyId} , {approved : status , status : value },{upsert : true , new : true}).select('-password')


    console.log('--------------------------------------')
    console.log(company ,'<<>>><><><><><><<><')
    console.log('--------------------------------------')

    
     return company ?? false
  }catch(err : any){
    console.log(err , '================== in the updateFormData catch ')
  }
}

