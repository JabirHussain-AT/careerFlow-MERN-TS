import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";

export = (dependencies: any): any => {
  const {
    usecases: { addJob_useCase },
  } = dependencies;

  const addJobController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        console.log(req.body,'-----------------------')
        const data = addJob_useCase(dependencies).interactor({
            name : 'jabir',
            age : '2888'
        })
      if(data){
        res.json({success:true})
      }
    } catch (err: any) {
      console.log(err, "Error in the company adding job controller");
      res.status(500).json({ error: "Internal Server Error" });
      next()
    }
  };  
  return addJobController;
};
