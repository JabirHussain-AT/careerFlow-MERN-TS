import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";
import { IDependencies } from "../../../entities/intrefaces/IUserInterfaces";

export = (dependencies: IDependencies) => {
  const {
    usecases: { getChatUserData_useCase },
  } = dependencies;

  const getChatUserData = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userDataContainer = req.body;
      const data = await getChatUserData_useCase(dependencies).interactor(
        userDataContainer
      );
      res.json({
        success: true,
        message: "error chat users fetching  ! ",
        data: data,
      });
    } catch (err: unknown) {
      console.log(err + "  in the catch of the chatusers fetching ");
    }
  };
  return getChatUserData;
};
