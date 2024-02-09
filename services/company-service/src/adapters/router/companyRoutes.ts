import express, { Request, Response } from "express";
import { companyController } from "../../handlers/controllers";
import verifyToken from "../../util/middlewares/authChecker";

export default (dependencies: any): any => {
  const router = express.Router();

  const { 
    companySignupController, 
    formUpdateController  ,
    fetchCompaniesController ,
    updateCompanyApprovelController
   } =
    companyController(dependencies);

    //company-signup
    router.post("/sign-up", companySignupController);
    
    // company updating-form data
    router.post("/updateForm", formUpdateController);

    // middleware 
    // router.use(verifyToken);

    router.get("/fetch-companies" , fetchCompaniesController)
    router.post("/approve-companyStatus" , updateCompanyApprovelController)

  return router;
};
