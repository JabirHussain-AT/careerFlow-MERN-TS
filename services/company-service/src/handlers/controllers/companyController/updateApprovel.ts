// fetchCompanyController
import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";

export = (dependencies: any): any => {
  const {
    usecases: {
       updateCompanyApprovel_useCase ,
       sendStatus_useCase
       },
  } = dependencies;

  const updateCompanyApprovel = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {


    try {
      const { companyId , status  } = req.body
      let reason  = ''

      if(req.body?.reason !== undefined ){
         reason = req.body?.reason 
      } 

      const data = await updateCompanyApprovel_useCase(dependencies).interactor(companyId , status , reason);
      await sendStatus_useCase(dependencies).interactor( reason )

      res.json({
        data : data ,
        success: true,
        message: "updated approvel status successfully from the company service",
      });


    } catch (err: any) {
      console.log(err, "Error in the company approvel status controller");
      next(err.message)
    }

  };
  return updateCompanyApprovel;
};
