import { Document, ObjectId } from "mongoose";

export interface ICompany extends Document {
  _id: ObjectId;
  registrationId : String | null ;
  email: String | null;
  address : Object | null ;
  companyLogo: String | null;
  name: String | null;
  linkedIn: String | null;
  locations: String[] | null;
  headOffice: String | null;
  founded: String | null;
  websiteLink: String | null;
  password: String | null;
  description: String | null;
  stage: string | null
  totalEmployees : Number | null
}