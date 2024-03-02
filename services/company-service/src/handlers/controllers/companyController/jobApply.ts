import { Request, Response, NextFunction } from "express";

export = (dependencies: any): any => {
  const {
    usecases: { jobApply_useCase },
  } = dependencies;


  const jobApplyController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    try {
        const jobDocs = req.body 
        const jobId = jobDocs.jobId
        delete jobDocs.jobId 

        const data = await  jobApply_useCase(dependencies).interactor(jobId ,jobDocs )
        res.json({
            data : data ,
            success : true ,
            message: "applyed  successfully for the job "
        })
    } catch (err: any) {

      console.log(err, "Error in the finding jobs  in the company form controller");
      res.status(500).json({ error: "Internal Server Error" });
      next()

    }
  };  

  return jobApplyController;
};
