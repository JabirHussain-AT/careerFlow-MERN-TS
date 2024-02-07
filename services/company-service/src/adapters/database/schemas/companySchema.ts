import mongoose, { ObjectId, Schema } from "mongoose";
import { ICompany } from "../../../entities/companyEntity";
import bcrypt from "bcrypt";

const CompanySchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    registrationId:{type : String },
    role : { type : String , default :'company' },
    logo: { type: String },
    userName: { type: String},
    address : {type : Object },
    linkedIn: { type: String },
    totalEmployees : { type : Number} ,
    approved: { type: Boolean, default: false },
    phone: { type: Number },
    locations: { type: String },
    headOffice: { type: String },
    founded: { type: String },
    websiteLink: { type: String },
    stage: { type: String, default: "pending" },
    status: { type: String, default: "pending" },
    password: { type: String, required: true },
    vision: { type: String },
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model<ICompany>("Company", CompanySchema);

export interface ICompanyData extends ICompany {
  createdAt?: Date;
  updatedAt?: Date;
  userName: string ;
}

export default Company;