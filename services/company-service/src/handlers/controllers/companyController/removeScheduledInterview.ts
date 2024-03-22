import { Request, Response, NextFunction } from "express";
import { IDependencies } from "../../../entities/Interfaces/ICompanyInterface";

export = (dependencies: IDependencies ) => {
  const {
    usecases: { removeScheduledInterview_useCase },
  } = dependencies;

  const removeScheduledInterview = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { jobId, userId } = req.params;

      const data = await removeScheduledInterview_useCase(
        dependencies
      ).interactor(jobId, userId);
      if (data) {
        res.json({
          data: data,
          success: true,
          message: "removing the scheduled interview ",
        });
      } else {
        res.json({
          success: false,
          message: "removing the scheduled interview ",
        });
      }
    } catch (err: any) {
      console.log(
        err,
        "Error in the removing the scheduled interview in the company form controller"
      );
      res.status(500).json({ error: "Internal Server Error" });
      next();
    }
  };

  return removeScheduledInterview;
};
