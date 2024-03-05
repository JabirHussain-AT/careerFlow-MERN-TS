import  {ObjectId , Document} from 'mongoose'

export interface IUser extends Document {
    _id : ObjectId ,
    name : string ,
    email : string, 
    password : string, 
    phoneNumber?: string | null,
    profilePic?: string | null ,
    status?:string ,
    skills?:string[] | null,
    socialLinks?:{
        link?:string | null ;
        socialMedia?:string | null ;
    }[];
    dob?:string| null,
    about?:string | null,
    languages?:string[] | null,
    education?:object[] | null ,
    experiance : object [ ] | null 
    preferredJobs?:string[] | null
    stage:string ,
    approved : boolean
    profileVerification  : boolean 
    savedJobs  :  string[]
    basicInfoUpdated : boolean
}
