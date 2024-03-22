import { Request, Response, NextFunction } from "express";
import { IDependencies } from "../../../entities/Interfaces/ICompanyInterface";

export = (dependencies: IDependencies) => {
  const {
    usecases: { updateFormData_useCase },
  } = dependencies;

  const updateFormData = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { email } = req.body;
      const companyCredentials = req.body;

      delete companyCredentials.email;
      companyCredentials.stage = "completed";
      companyCredentials.status = "pending";

      const company = await updateFormData_useCase(dependencies).interactor(
        email,
        companyCredentials
      );
      res.json({
        company: company,
        success: true,
        message: "updated successfully from the company service",
      });
    } catch (err) {
      console.log(err, "Error in the company updateFormData controller");
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  return updateFormData;
};
