import { Request, Response, NextFunction } from "express";
import { IDependencies } from "../../../entities/Interfaces/ICompanyInterface";

export = (dependencies: IDependencies) => {
  const {
    usecases: { updateCompanyApprovel_useCase, sendStatus_useCase },
  } = dependencies;

  const updateCompanyApprovel = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { companyId, status, email } = req.body;
      let reason = "";
      let intro =
        " Your application for the registration evaluvated successfully ";

      if (req.body?.reason !== undefined) {
        reason = req.body?.reason;
      }

      const data = await updateCompanyApprovel_useCase(dependencies).interactor(
        companyId,
        status,
        reason
      );
      if (email !== undefined) {
        await sendStatus_useCase(dependencies).interactor(email, intro, reason);
      }

      res.json({
        data: data,
        success: true,
        message:
          "updated approvel status successfully from the company service",
      });
    } catch (err: any) {
      console.log(err, "Error in the company approvel status controller");
      next(err.message);
    }
  };
  return updateCompanyApprovel;
};
