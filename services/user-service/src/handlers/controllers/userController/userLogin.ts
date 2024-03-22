import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";
import { comparePasswords } from "../../../util/externalServices/bcrypt/bcryptComapre";
import { generateToken } from "../../../util/externalServices/jwt";
import userExist from "./userExist";
import { IDependencies } from "../../../entities/intrefaces/IUserInterfaces";

export = (dependencies: IDependencies ) => {
  const {
    usecases: { login_useCase },
  } = dependencies;

  const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email  , password , googleAuth  } =req.body
      const isUserExist = await login_useCase(dependencies).interactor(
        email,
        password
      );

      if (!isUserExist) {
        return next(
          ErrorResponse.forbidden(
            "No user Exist with this email , please Signup"
          )
        );
      }

      let userVerify = await comparePasswords(
        password,
        isUserExist.password
      );

      if(isUserExist.isBlocked === true){
          return next(
            ErrorResponse.forbidden(
              "This User is Blocked By the Admin"
            )
          );
      }
    
      if (userVerify || googleAuth) {
       

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
    } catch (err : unknown  ) {
      console.log(err + "  in the catch of the user login");
    }
  };
  return loginUser;
};
