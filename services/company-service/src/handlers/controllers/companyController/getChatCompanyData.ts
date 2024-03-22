import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";
import { IDependencies } from "../../../entities/Interfaces/ICompanyInterface";

export = (dependencies: IDependencies )  => {
  const {
    usecases: { getChatCompanyData_useCase },
  } = dependencies;

  const getChatCompanyData = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const companyDataContainer = req.body;
      const data = await getChatCompanyData_useCase(dependencies).interactor(companyDataContainer)
      res.json({ success: true, message: "error chat users fetching  ! ", data: data });
    } catch (err: unknown ) {
      console.log(err + "  in the catch of the chatusers in company fetching ");
    }
  };
  return getChatCompanyData;
};
