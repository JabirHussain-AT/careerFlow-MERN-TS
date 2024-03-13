import { Request, Response, NextFunction } from "express";

export = (dependencies: any): any => {
  const {
    usecases: { getInterViewSchedule_useCase },
  } = dependencies;

  const getInterViewSchedule = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const jobId = req.params.jobId;
      const applicantId = req.params.applicantId

      const data = await getInterViewSchedule_useCase(dependencies).interactor(
       jobId , applicantId
      );

      if (data) {
        res.json({
          success: true,
          data: data,
          message: "sucessfully fetched interview schedule of applicant ",
        })
      }else{
        res.json({
            success: false,
            data: data,
            message: " not sucessfully fetched interview schedule of applicant ",
          })
      }
    } catch (err: any) {
      console.log(err, "Error in the user fetching  applicants and job controller");
      res.status(500).json({ error: "Internal Server Error" });
      next();
    }
  };
  return getInterViewSchedule;
};
