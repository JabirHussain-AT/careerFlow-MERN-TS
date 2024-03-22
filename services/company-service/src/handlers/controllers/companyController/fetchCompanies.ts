// fetchCompanyController
import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";
import { IDependencies } from "../../../entities/Interfaces/ICompanyInterface";

export = (dependencies: IDependencies ) => {
  const {
    usecases: { fetchCompanies_useCase },
  } = dependencies;

  const fetchingCompanies = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await fetchCompanies_useCase(dependencies).interactor();
      res.json({
        data : data ,
        success: true,
        message: "fetched successfully from the company service",
      });
    } catch (err: any) {
      console.log(err, "Error in the company fetching controller");
      res.status(500).json({ error: "Internal Server Error" });
      next()
    }
  };
  return fetchingCompanies;
};
