import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";
import { comparePasswords } from "../../../util/externalServices/bcrypt/bcryptComapre";
import { generateToken } from "../../../util/externalServices/jwt";

export = (dependencies: any): any => {
  const {
    usecases: { fetchUsers_useCase },
  } = dependencies;

  const fetchUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('its okay to be here ')
      const data = await fetchUsers_useCase(dependencies).interactor(  );


      res.json({ sucess: true, data : data, message: "no user exists ! " });
   
    } catch (err: any) {
      console.log(err + "  in the catch of the user exists");
    }
  };
  return fetchUsers;
};
