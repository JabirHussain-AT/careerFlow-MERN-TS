import companySignupController from "./companySignup";
import formUpdateController from "./formUpdateController";
import fetchCompaniesController from "./fetchCompanies";
import updateCompanyApprovelController from './updateApprovel'
import addJobController from "./addJob";
import editJobController from "./editJob"
import fetchComJobController from './fetchComJobs'
import changeStatusController from './changeController'
import fetchJobsController from "./fetchJobs";
import fetchJobController from "./fetchJob"
import addCategoryController from './addCategory'

export default (dependencies: any) => {
  return {
    companySignupController: companySignupController(dependencies),
    formUpdateController : formUpdateController(dependencies) ,
    fetchCompaniesController : fetchCompaniesController(dependencies) ,
    updateCompanyApprovelController : updateCompanyApprovelController(dependencies),
    addJobController:addJobController(dependencies) ,
    editJobController : editJobController(dependencies) ,
    fetchComJobController : fetchComJobController(dependencies) ,
    changeStatusController : changeStatusController(dependencies), 
    fetchJobsController : fetchJobsController(dependencies) ,
    fetchJobController : fetchJobController(dependencies) ,
    addCategoryController : addCategoryController(dependencies)
  };
};
