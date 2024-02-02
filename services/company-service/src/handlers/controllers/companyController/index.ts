import comapanySignupController from "./companySignup";

export default (dependencies: any) => {
  return {
    comapanySignupController: comapanySignupController(dependencies),
  };
};
