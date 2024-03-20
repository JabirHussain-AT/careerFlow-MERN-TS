import company from ".";
import { companyCollection, otpCollection, jobCollection } from "../..";
import companyDetialSend from "../../../messageBroker/kafka/producers/companyDetialSend";
import updateStage from "../../../messageBroker/kafka/producers/updateStages";
import updateStatus from "../../../messageBroker/kafka/producers/updateStatus";
import Company, { ICompanyData } from "../../schemas/companySchema";
import Jobs from "../../schemas/jobSchema";
import Category from "../../schemas/categorySchema";
import { IJobs } from "../../../../entities/jobEntity";
import mongoose, { ObjectId } from "mongoose";

export const createNewUser = async (
  userCredentials: ICompanyData
): Promise<ICompanyData | boolean> => {
  try {
    console.log(userCredentials, "-----------------");
    const newUser = await companyCollection.create(userCredentials);

    let data = {
      _id: newUser?._id,
      email: newUser?.email as string,
      role: "company",
      userName: newUser.userName,
      password: newUser?.password as string,
    };

    await companyDetialSend(data);

    return newUser as ICompanyData;
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

    setTimeout(() => {
      otpCollection.findOneAndDelete({ email: email });
    }, 120 * 1000);

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

export const updateFormData = async (
  email: string,
  companyCredentials: any
) => {
  try {
    let company = await companyCollection.findOneAndUpdate(
      { email: email },
      companyCredentials,
      { upsert: true, new: true }
    );
    if (company) {
      let data = {
        status: "pending",
        stage: "completed",
        email: company.email as string,
      };
      updateStage(data);
    }
    return company ?? false;
  } catch (err: any) {
    console.log(err, "================== in the updateFormData catch ");
  }
};

export const fetchCompanies = async (
  email: string,
  companyCredentials: any
) => {
  try {
    let company = await companyCollection.find().select("-password");
    return company ?? false;
  } catch (err: any) {
    console.log(err, "================== in the updateFormData catch ");
  }
};
export const updateApprovel = async (companyId, status) => {
  try {
    let value = status === true ? "approved" : "rejected";
    let company = await companyCollection
      .findOneAndUpdate(
        { _id: companyId },
        { approved: status, status: value },
        { upsert: true, new: true }
      )
      .select("-password");
    let companyEmail = company?.email ?? false;
    let data = {
      approved: status,
      status: value,
      email: companyEmail as string,
    };

    console.log("--------------------------------------");
    console.log(company, "<<>>><><><><><><<><");
    console.log("--------------------------------------");

    updateStatus(data);
    return company ?? false;
  } catch (err: any) {
    console.log(err, "================== in the updateFormData catch ");
  }
};

export const addJobInCompany = async (companyData) => {
  try {
    const job = await jobCollection.create(companyData);
    return true;
  } catch (err: any) {
    console.log(err, "================== in the add jobs catch ");
  }
};

export const editJobInCompany = async (jobData, jobId) => {
  try {
    const udpdatedData = await jobCollection.findOneAndUpdate(
      { _id: jobId },
      { $set: jobData },
      { new: true }
    );
    //  console.log('><><<><><<><><<><   :  ; ', udpdatedData )
    return udpdatedData;
  } catch (err: any) {
    console.log(err, "================== in the edit  jobs catch ");
  }
};

export const fetchComJobInCompany = async (companyId) => {
  try {
    const result = await jobCollection.find({ companyId: companyId });
    return result;
  } catch (err: any) {
    console.log(err, "================== in the edit  jobs catch ");
  }
};

export const changeJobStatus = async (jobId, value) => {
  try {
    const result = await jobCollection.findOneAndUpdate(
      { _id: jobId },
      { status: value },
      { new: true }
    );
    return result;
  } catch (error) {
    console.log(error, "error happened in the change status of jobs repo");
  }
};

export const fetchJobs = async () => {
  try {
    const result = await Jobs.find({}).populate("companyId");
    return result;
  } catch (error) {
    console.log(error, "error happened in the fetching jobs in  repo");
  }
};

export const fetchJob = async (jobId : string ) => {
  try {

    const result = await Jobs.findOne({ _id: jobId }).populate("companyId");
    return result;

  } catch (error) {
    console.log(error, "error happened in the fetching jobs in  repo");
  }
};

export const removeScheduledInterview = async (jobId: string, userId: string) => {
  try {
    const userid = new mongoose.Types.ObjectId(userId);
    
    const result = await Jobs.updateOne(
      { _id: jobId, "applicants.applicantId": userid },
      { $unset: { "applicants.$.schedule": "" } }
    );
    return result;
  } catch (error) {
    console.log(error, "error happened in the removing the scheduled interview from jobs in repo");
    throw error;
  }
};




export const addCategory = async (category) => {
  console.log("🚀 ~ file: companyRepo.ts:244 ~ addCategory ~ category:", category)
  try {
    const result = await Category.create({ category: category });
    return result;
  } catch (error) {
    console.log(error, "error happened in the adding category in  repo");
  }
};

export const fetchCategories = async () => {
  try {
    const result = await Category.find();

    return result;
  } catch (error) {
    console.log(
      error,
      "error happened in the fetching categories in company  repo"
    );
  }
};

export const findJobs = async (data: {
  page?: number;
  categories?: string[];
  salary?: string;
  jobType?: string;
  search?: string;
}): Promise<IJobs[] | boolean> => {
  try {
    let skip = 0;
    if (data && data.page) {
      skip = Number(data.page - 1) * 10;
    } else {
      skip = 0;
    }
    delete data.page;

    let category = data.categories;
    let jobType = data.jobType;
    let search = data.search;
    let salaryRange = data.salary;
    let fromSalary = 0;
    let toSalary = 0;
    const query: any = {};

    // Setting salary range
    if (data && data.salary) {
      if (data.salary === "Below 3 LPA") {
        fromSalary = 0;
        toSalary = 300000 / 12;
      } else if (data.salary === "3-10 LPA") {
        fromSalary = 300000 / 12;
        toSalary = 1000000 / 12;
      } else {
        fromSalary = 1000000 / 12;
        // No specific upper limit for 'More than 10 LPA'
      }
    }

    // Building conditions for the query object
    query.status = true;

    if (category && category.length > 0) query.category = { $in: category };
    if (jobType && jobType.length > 0) query.jobType = { $in: jobType };
    if (search !== "") {
      query.jobTitle = { $regex: new RegExp(`.*${search}.*`, "i") };
    }

    // Using fromSalary and toSalary directly in the query
    if (fromSalary > 0) {
      query.fromSalary = { $gte: fromSalary };
    }

    if (toSalary > 0) {
      query.toSalary = { $lte: toSalary };
    }

    let result = [];
    if (Object.keys(query).length > 0) {
      // Applying the query
      result = await Jobs.find(query)
        .populate("companyId")
        .skip(skip)
        .limit(10)
        .exec();
    } else {
      result = await Jobs.find({ status: true })
        .populate("companyId")
        .skip(skip)
        .limit(10)
        .exec();
    }

    //getting all the filter counts from the database
    const count = await Jobs.find({
      status: true,
      ...query,
    }).countDocuments();

    return [result, count] as any;
  } catch (error) {
    console.log(error, "Error occurred in the findJobs function");
    return false;
  }
};

export const jobApply = async (
  jobId: string,
  jobDocs: {
    applicantId: ObjectId;
    name: string;
    email: string;
    number: number;
    resume: string;
  }
) => {
  try {
    const data = await Jobs.findOneAndUpdate(
      { _id: jobId },
      {
        $push: {
          applicants: { $each: [jobDocs], $position: 0 }, // Push to the beginning of the array
        },
      },
      { new: true }
    );

    if (!data) {
      return false;
    } else {
      return data;
    }
  } catch (error) {
    console.log(error, "error happened in the job apply company  repo");
  }
};

export const getMyJobApplications = async (userId: string) => {
  try {
    const data = await Jobs.find(
      { "applicants.applicantId": userId, status: true },
      { "applicants.$": 1, jobTitle: 1 }
    ).populate("companyId");

    if (data) {
      return data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error, "error happened in the job apply company  repo");
  }
};

export const changeJobApplicationStatus = async (
  applicantId: string,
  jobId: string,
  value: string
) => {
  try {
    console.log("its in the change job application status repo ");
    const data = await Jobs.findOneAndUpdate(
      {
        _id: jobId,
        "applicants.applicantId": applicantId,
      },
      {
        $set: {
          "applicants.$.hiringStage": value,
        },
      },
      { new: true }
    );

    if (data) {
      return data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(
      error,
      "error happened in the job application change status - company  repo"
    );
  }
};

export const getPreferedJobs = async (preferedJobs: string, page: number) => {
  try {
    const data = await Jobs.find({
      jobTitle: { $in: preferedJobs },
    })
      .limit(page * 10)
      .populate("companyId");

    if (data) {
      return data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(
      error,
      "error happened in the fetching prefered jobs - company  repo"
    );
  }
};

export const getJobsAndApplicantsCount = async (companyId: string) => {
  try {
    const data = await Jobs.aggregate([
      {
        $match: {
          companyId: new mongoose.Types.ObjectId(companyId),
        },
      },
      {
        $group: {
          _id: null,
          jobCount: { $sum: 1 },
          totalApplicants: { $sum: { $size: "$applicants" } },
          totalApplicantsInApplyedStage: {
            $sum: {
              $size: {
                $filter: {
                  input: "$applicants",
                  as: "applicant",
                  cond: { $eq: ["$$applicant.hiringStage", "Applyed"] },
                },
              },
            },
          },
        },
      },
      {
        $project: {
          jobCount: 1,
          totalApplicants: 1,
          totalApplicantsInApplyedStage: 1,
          _id: 0,
        },
      },
    ]);

    if (data) {
      return data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(
      error,
      "error happened in the fetching preferred jobs - company repo"
    );
  }
};

export const getChartData = async (companyId: string, filter: string) => {
  try {
    const data = await Jobs.aggregate([
      {
        $match: {
          companyId: new mongoose.Types.ObjectId(companyId),
        },
      },
      {
        $group: {
          _id: filter,
          jobsPosted: { $sum: 1 },
          applicationsDone: { $sum: { $size: "$applicants" } },
        },
      },
    ]);
    if (data) {
      return data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(
      error,
      "error happened in the fetching preferred jobs - company repo"
    );
  }
};

export const getChatCompanyData = async (companyDataContainer: any) => {
  try {
    const result = [];
    let eachData = [];

    for (let i = 0; i < companyDataContainer[0].length; i++) {
      eachData = await companyCollection.findOne({
        _id: companyDataContainer[0][i]?.roomCreater,
      });
      result.push(eachData);
    }
    if (result) {
      return result;
    } else {
      return false;
    }
  } catch (err: any) {
    console.log(
      err,
      "====== err occured in the fetching caht company  in user repo"
    );
  }
};

export const scheduleInterview = async (interViewData: any) => {

  try {
    const jobId = interViewData?.jobId;
    const applicantId = interViewData?.applicantId;
    const InterviewRoom  = jobId + applicantId
    const { date, time, InterviewType, InterviewerName } = interViewData;

    const result = await Jobs.findOneAndUpdate(
      {
        _id: new mongoose.Types.ObjectId(jobId),
        "applicants.applicantId": new mongoose.Types.ObjectId(applicantId),
      },
      {
        $set: {
          "applicants.$.schedule": {
            date,
            time,
            InterviewType,
            InterviewerName,
            InterviewRoom
          },
        },
      },
      { new: true }
    );

    if (result) {
      return result;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error scheduling interview:", error);
    return false;
  }
};

export const getInterViewSchedule = async (jobId: any, applicantId: any) => {
  try {
    const result = await Jobs.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(jobId),
        },
      },
      {
        $unwind: "$applicants",
      },
      {
        $match: {
          "applicants.applicantId": new mongoose.Types.ObjectId(applicantId),
        },
      },
    ]);

    if (result) {
      return result;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error scheduling interview:", error);
    return false;
  }
};
