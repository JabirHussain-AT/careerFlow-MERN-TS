import { Request, Response, NextFunction } from "express";
import { IDependencies } from "../../../entities/Interfaces/ICompanyInterface";

export = (dependencies: IDependencies ) => {
  const {
    usecases: { changeStatus_useCase },
  } = dependencies;



  const changeStatusController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
     
      const jobId = req.params.id ;
      const value = req.params.value ;

      const data = changeStatus_useCase(dependencies).interactor( jobId , value );

      if (data) {
        res.json({ success: true, data: data , message: "updatedSuccessfully" });
      }


    } catch (err: any) {
      console.log(err, "Error in the company change status  job controller");
      res.status(500).json({ error: "Internal Server Error" });
      next();
    }


  };
  return changeStatusController;
};
