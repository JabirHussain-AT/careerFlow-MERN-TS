import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";
import { comparePasswords } from "../../../util/externalServices/bcrypt/bcryptComapre";
import { generateToken } from "../../../util/externalServices/jwt";

export = (dependencies: any): any => {
  const {
    adminUseCases: {fetchCompanies_useCase}
  } = dependencies;

  const companyFetchController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await fetchCompanies_useCase(dependencies).interactor()
    } catch (err: any) {
      console.log(err + "  in the catch of th companyFetch ");
    }
  };
  return companyFetchController;
};
