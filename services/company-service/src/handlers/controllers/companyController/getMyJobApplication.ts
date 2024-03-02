import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";

export = (dependencies: any): any => {
  const {
    usecases: { getMyJobApplications_useCase },
  } = dependencies;

  const getMyJobApplications = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.params.userId;
      const data = await getMyJobApplications_useCase(dependencies).interactor(
        userId
      );

      if (data) {
        res.json({
          success: true,
          data: data,
          message: "sucessfully fetched jobs ",
        });
      }
    } catch (err: any) {
      console.log(err, "Error in the user fetching g job controller");
      res.status(500).json({ error: "Internal Server Error" });
      next();
    }
  };
  return getMyJobApplications;
};
