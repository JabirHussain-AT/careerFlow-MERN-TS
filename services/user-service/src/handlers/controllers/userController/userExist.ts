import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";
import { comparePasswords } from "../../../util/externalServices/bcrypt/bcryptComapre";
import { generateToken } from "../../../util/externalServices/jwt";

export = (dependencies: any): any => {
  const {
    usecases: { userExist_useCase },
  } = dependencies;

  const userExist = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body;
      const isUserExist = await userExist_useCase(dependencies).interactor(
        email
      );

      console.log(isUserExist, "is user exist or not");
      if (isUserExist) {
        return next(
          ErrorResponse.forbidden(
            "user Exist with this email , try another one"
          )
        );
      }
      


      res.json({ sucess: true, message: "no user exists ! " });

      
    } catch (err: any) {
      console.log(err + "  in the catch of the user exists");
    }
  };
  return userExist;
};
