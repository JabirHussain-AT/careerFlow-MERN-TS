import  {ObjectId , Document} from 'mongoose'

export interface IUser extends Document {
    _id : ObjectId ,
    name : string ,
    email : string, 
    password : string, 
    phone?: string | null,
    profilePic?: string | null ,
    status?:boolean ,
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
}