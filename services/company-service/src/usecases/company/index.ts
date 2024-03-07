import { signUp_useCase  }  from "./companySignup";
import { saveAndSendOtp_useCase } from './saveAndSendOtp'
import { sendPass_useCase } from "./sendPass";
import { verifyOtp_useCase } from "./verifyOtp"; 
import { updateFormData_useCase } from "./updateFormData";
import { fetchCompanies_useCase } from "./fetchingCompanies";
import { updateCompanyApprovel_useCase } from './updateApprovel'
import { sendStatus_useCase } from './sendStatus_useCase'
import { addJob_useCase } from './addJob'
import { editJob_useCase } from "./editJob"; 
import { fetchComJobs_useCase } from "./fetchComJobs";
import { changeStatus_useCase } from './changeStatusJob' 
import { preferedJobs_useCase } from './preferedJobs'
import { fetchJobs_useCase } from "./fetchJobs"; 
import { fetchJob_useCase } from "./fetchJob"; 
import { addCategory_useCase } from './addCategory'
import { fetchCategories_useCase } from './fetchCategories'
import {  findJobs_useCase } from './findJobs'
import { jobApply_useCase } from './jobApply' 
import { getMyJobApplications_useCase } from './getMyJobApplications'
import { changeJobApplicationStatus_useCase } from "./changeStatusJobApplicant";
import { getJobAndApplicantsCount_useCase } from "./getJobsAndApplicants";

export default  {
  signUp_useCase,
  saveAndSendOtp_useCase,
  sendPass_useCase ,
  verifyOtp_useCase ,
  updateFormData_useCase ,
  fetchCompanies_useCase ,
  updateCompanyApprovel_useCase,
  sendStatus_useCase,
  addJob_useCase ,
  editJob_useCase ,
  fetchComJobs_useCase ,
  changeStatus_useCase ,
  fetchJobs_useCase ,
  fetchJob_useCase ,
  preferedJobs_useCase,
  addCategory_useCase ,
  fetchCategories_useCase ,
  findJobs_useCase ,
  jobApply_useCase ,
  getMyJobApplications_useCase ,
  getJobAndApplicantsCount_useCase ,
  changeJobApplicationStatus_useCase
}
