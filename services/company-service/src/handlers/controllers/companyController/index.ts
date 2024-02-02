import companySignupController from "./companySignup";

export default (dependencies: any) => {
  return {
    companySignupController: companySignupController(dependencies),
  };
};
