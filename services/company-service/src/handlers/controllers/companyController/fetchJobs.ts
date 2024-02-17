import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";

export = (dependencies: any): any => {
  const {
    usecases: { fetchJobs_useCase },
  } = dependencies;

  const fetchJobsController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
       const data = await fetchJobs_useCase(dependencies).interactor()
      if(data){
        res.json({success:true ,data : data , message : 'sucessfully fetched jobs '})
      }
    } catch (err: any) {
      console.log(err, "Error in the user fetching g job controller");
      res.status(500).json({ error: "Internal Server Error" });
      next()
    }
  };  
  return fetchJobsController;
};
