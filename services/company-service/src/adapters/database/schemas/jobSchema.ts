import mongoose, { Schema, Document, ObjectId } from "mongoose";
import { IJobs } from "../../../entities/jobEntity";

const JobsSchema: Schema = new Schema(
    {
      applicants: [
        {
          applicantId: { type: Schema.Types.ObjectId },
          appliedDate: { type: Date },
          aescription: { type: String },
          email: { type: String },
          hiringStage: { type: String },
          linkedIn: { type: String },
          name: { type: String },
          number: { type: Number },
          portfolio: { type: String },
          prevJob: { type: String },
          resume: { type: String },
          schedule: {
            date: { type: Date },
            employeeId: { type: Schema.Types.ObjectId },
            time: { type: String },
          },
        },
      ],
      category: {type : String},
      salary: { type: Number },
      jobDescription: { type: String },
      jobTitle: { type: String },
      requirements: [{ type: String }],
      jobExpiry: { type: Date || String },
      vacancy: { type: Number },
      jobType : { type : String },
      companyId: { type: Schema.Types.ObjectId },
    },
    {
      timestamps: true,
    }
  );
  
  export interface IJobsData extends IJobs {
    _id: ObjectId;
    createdAt: Date;
    upadtedAt: Date;
  }
  
  const Jobs = mongoose.model<IJobs>("Jobs", JobsSchema);
  
  export default Jobs;