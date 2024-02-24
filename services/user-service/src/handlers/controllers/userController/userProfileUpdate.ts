import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";

export = (dependencies: any): any => {
  const {
    usecases: { userProfileUpdate_useCase },
  } = dependencies;



  const userProfileUpdate = async (
    req: Request,
    res: Response,
    next: NextFunction


  ) => {

    try {


      console.log(req.body, " FROM Profile update");
      let userId = req.body.userId;

      const updateData: Record<string, any> = {};
      for (const key in req.body) {
        if (key !== "userId") {
          updateData[key] = req.body[key];
          (updateData.updateField = key),
            (updateData.updateValue = updateData[key]);
        }
      }

      const data = await userProfileUpdate_useCase(dependencies).interactor(
        userId,
        updateData
      );


      if (data !== false) {
        res.json({
          success: true,
          data: data,
          message: " successfully updated",
        });


      } else {
        return next(
          ErrorResponse.forbidden(
            "Issue in updating profile , please try again later "
          )
        );
      }

      
    } catch (err: any) {
      console.log(err + "  in the catch of the proifle update controller ");
      next();
    }
  };
  return userProfileUpdate;
};
