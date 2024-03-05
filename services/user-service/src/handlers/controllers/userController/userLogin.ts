import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";
import { comparePasswords } from "../../../util/externalServices/bcrypt/bcryptComapre";
import { generateToken } from "../../../util/externalServices/jwt";

export = (dependencies: any): any => {
  const {
    usecases: { login_useCase },
  } = dependencies;

  const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userCredentials = req.body;
      console.log(userCredentials,'this is the one')
      const isUserExist = await login_useCase(dependencies).interactor(
        userCredentials.email,
        userCredentials.password
      );

      console.log(isUserExist, "is user exist or not");
      if (!isUserExist) {
        return next(
          ErrorResponse.forbidden(
            "No user Exist with this email , please Signup"
          )
        );
      }

      let userVerify = await comparePasswords(
        userCredentials.password,
        isUserExist.password
      );
      if (userVerify || userCredentials?.googleAuth) {

        let payload = {
          _id: String(isUserExist?.id),
          email:isUserExist?.email!,
          role: isUserExist?.role!,
        };

        const token = generateToken(payload);


        res.cookie("user_jwt", token, {
          httpOnly: true,
          maxAge: 7 * 24 * 60 * 60 * 1000,
        });  
        
        
       
        isUserExist.token = token;
        res.status(201).json(isUserExist);
      } else {
        return next(ErrorResponse.forbidden("invalid credentials !"));
      }
    } catch (err: any) {
      console.log(err + "  in the catch of the user login");
    }
  };
  return loginUser;
};
