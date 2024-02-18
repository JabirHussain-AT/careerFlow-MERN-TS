import mongoose , {Schema ,Document ,ObjectId} from "mongoose";
import {IUser} from '../../../../entities/userEntities'

const userSchema : Schema = new Schema({
    userName : {
        type : String,
        required : true , 
    },
    email : {
        type : String ,
        required : true , 
        unique: true
    },
    role : {
        type : String ,
        required : true,
        default : 'user'
    },
    password : {
          type : String ,
          required : true ,
    },
    phone : {
        type : Number 
    },
    skills : [{ type : String }],
    socialMediaLinks : [{
        link  :  { type : String },
        socialMedia : { type : String }
    }],
    dob : { type : Date || String},
    status : { type : String },
    jobStatus : { type : String },
    about : { type : String },
    languages : [{ type :String }],
    education : [{ type : String }],
    experiance : [{ type : String }],
    approved : { type : Boolean},
    stage : { type :  String },
    profileVerification : { type : Boolean } ,
    savedJobs : [{type : String}]
})

export default mongoose.model<IUser>("Users", userSchema);

export interface IUserData extends IUser{
    createdAt: Date;
    updatedAt: Date;
}
export interface IUserDoc {
    _id : ObjectId ,
    userName : string ,
    email : string, 
    role : string ,
    password : string, 
    phone?: number | null,
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
    approved : boolean | null 
    stage : string | null
    savedJobs : string []
}