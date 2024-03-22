import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";
import { IDependencies } from "../../../entities/Interfaces/ICompanyInterface";

export = (dependencies: IDependencies )  => {
  const {
    usecases: { changeJobApplicationStatus_useCase  },
  } = dependencies;

  const changeJobApplicationStatus = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    try {
        const applicantId = req.body.applicantId 
        const jobId = req.body.jobId 
        const value = req.body.value 
        const response = await changeJobApplicationStatus_useCase(dependencies).interactor(applicantId , jobId , value )
        if(response !== false) {
            res.json({
                success : true ,
                message : 'updated job application status successfully ',
                data : response
            })
        }else{
            res.json({
                success : false ,
                message : ' not updated job application status successfully ',
                data : response
            })
        }

    } catch (err: any) {
      console.log(err, "Error in the change job application status change controller ");
      next(err.message);
    }
  };
  return changeJobApplicationStatus;
};
