import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";
import { IDependencies } from "../../../entities/intrefaces/IUserInterfaces";

export = (dependencies: IDependencies) => {
  const {
    usecases: { userExist_useCase },
  } = dependencies;

  const userExist = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body;
      const isUserExist = await userExist_useCase(dependencies).interactor(
        email
      );

      if (isUserExist) {
        return next(
          ErrorResponse.forbidden(
            "user Exist with this email , try another one"
          )
        );
      }

      res.json({ sucess: true, message: "no user exists ! " });
    } catch (err: unknown) {
      console.log(err + "  in the catch o f the user exists");
    }
  };
  return userExist;
};
