import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";

export = (dependencies: any): any => {
  const {
    usecases: { addJob_useCase },
  } = dependencies;

  const addJobController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {


      // Salary conversion
      let salaryRange = req.body?.salary;
      let fromSalary = 0;
      let toSalary = 0;

      // Check if salaryRange is not undefined and is a non-empty string

      if (
        salaryRange &&
        typeof salaryRange === "string" &&
        salaryRange.length > 0
      ) {
        let salaryArray = salaryRange.split("-");

        // Convert the split strings to integers
        fromSalary = parseInt(salaryArray[0]) || 0;
        toSalary = parseInt(salaryArray[1]) || 0;
      } else {
        console.log("Invalid salary range");
      }
      // End of salary conversion

      const jobData = {
        category: req.body.selectedCategory,
        fromSalary: fromSalary,
        toSalary: toSalary,
        jobDescription: req.body.jobDescription,
        jobTitle: req.body.jobTitle,
        requirements: req.body.requirements,
        skills: req.body.skills,
        jobType: req.body.selectedJobType,
        companyId: req.body.companyId,
        vacancy: req.body.vacancy,
        jobExpiry: req.body.jobExpiry,
      };

      const data = await addJob_useCase(dependencies).interactor(jobData);
      if (data) {
        res.json({ success: true });
      }
    } catch (err: any) {
      console.log(err, "Error in the company adding job controller");
      res.status(500).json({ error: "Internal Server Error" });
      next();
    }
  };

  return addJobController;
};
