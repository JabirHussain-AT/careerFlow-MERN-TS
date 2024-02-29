import  {ObjectId , Document} from 'mongoose'

export interface IJobs extends Document {
    _id: ObjectId;
    applicants?: {
      applicantId: ObjectId | null;
      appliedDate: Date | null;
      email: String | null;
      hiringStage: String | null;
      name: String | null;
      number?: Number | null;
      resume?: String | null;
      schedule?: {
        date: Date | null;
        duration : string | number | null ;
        time: String | null;
      };
    }[];
    category: String | null;
    toSalary : Number | null , 
    fromSalary : Number | null , 
    jobDescription: String | null;
    jobTitle: String | null;
    requirments: String[] | null;
    skills: String[] | null;
    jobExpiry: String | null;
    jobType: String | null;
    status : Boolean | null 
    vacancy: Number | null;
    companyId: ObjectId | null;
  }