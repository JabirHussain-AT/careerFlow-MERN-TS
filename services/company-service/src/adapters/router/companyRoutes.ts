import express, { Request, Response } from "express";
import { companyController } from "../../handlers/controllers";
import verifyToken from "../../util/middlewares/authChecker";

export default (dependencies: any): any => {
  const router = express.Router();

  const { companySignupController, formUpdateController } =
    companyController(dependencies);

    //company-signup
    router.post("/sign-up", companySignupController);
    
    // company updating-form data
    router.post("/updateForm", formUpdateController);

    // middleware 
    router.use(verifyToken);

  return router;
};
