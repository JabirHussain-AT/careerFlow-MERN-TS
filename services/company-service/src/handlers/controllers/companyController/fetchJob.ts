import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";

export = (dependencies: any): any => {
  const {
    usecases: { fetchJob_useCase },
  } = dependencies;

  const fetchJobController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
       const jobId = req.params.jobId 
       const data = await fetchJob_useCase(dependencies).interactor(jobId )
      if(data){
        res.json({success:true ,data : data , message : 'sucessfully fetched jobs '})
      }
    } catch (err: any) {
      console.log(err, "Error in the user fetching g job controller");
      res.status(500).json({ error: "Internal Server Error" });
      next()
    }
  };  
  return fetchJobController;
};
