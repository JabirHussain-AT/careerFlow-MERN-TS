import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";

export = (dependencies: any): any => {
  const {
    usecases: { editJob_useCase },
  } = dependencies;

  const editJobController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {

        const jobData = {
          category : req.body.selectedCategory ,
          salary : req.body.salary ,
          jobDescription : req.body.jobDescription ,
          jobTitle : req.body.jobTitle ,
          requirements : req.body.requirements ,
          skills : req.body.skills ,
          jobType : req.body.selectedJobType ,
          companyId : req.body.companyId  ,
          vacancy : req.body.vacancy ,
          jobExpiry : req.body.jobExpiry
        }
        const data = editJob_useCase(dependencies).interactor(jobData)

      if(data){
        res.json({success:true})
      }
    } catch (err: any) {
      console.log(err, "Error in the company adding job controller");
      res.status(500).json({ error: "Internal Server Error" });
      next()
    }
  };  
  return editJobController;
};
