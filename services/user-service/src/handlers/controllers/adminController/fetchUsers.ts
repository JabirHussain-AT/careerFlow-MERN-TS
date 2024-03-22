import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";
import { comparePasswords } from "../../../util/externalServices/bcrypt/bcryptComapre";
import { generateToken } from "../../../util/externalServices/jwt";
import { IDependencies } from "../../../entities/intrefaces/IUserInterfaces";

export = (dependencies: IDependencies )  => {
  const {
    usecases: { fetchUsers_useCase },
  } = dependencies;

  const fetchUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      
      const data = await fetchUsers_useCase(dependencies).interactor(  );
      res.json({ sucess: true, data : data, message: "no user exists ! " });
   
    } catch (err: any) {
      console.log(err + "  in the catch of the user exists");
    }
  };
  return fetchUsers;
};
