import companySignupController from "./companySignup";
import formUpdateController from "./formUpdateController";
import fetchCompaniesController from "./fetchCompanies";
import updateCompanyApprovelController from './updateApprovel'
import addJobController from "./addJob";

export default (dependencies: any) => {
  return {
    companySignupController: companySignupController(dependencies),
    formUpdateController : formUpdateController(dependencies) ,
    fetchCompaniesController : fetchCompaniesController(dependencies) ,
    updateCompanyApprovelController : updateCompanyApprovelController(dependencies),
    addJobController:addJobController(dependencies)
  };
};
