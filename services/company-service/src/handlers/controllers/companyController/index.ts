import companySignupController from "./companySignup";
import formUpdateController from "./formUpdateController";

export default (dependencies: any) => {
  return {
    companySignupController: companySignupController(dependencies),
    formUpdateController : formUpdateController(dependencies)
  };
};
