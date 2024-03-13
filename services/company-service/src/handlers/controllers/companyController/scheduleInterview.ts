import { Request, Response, NextFunction } from "express";

export = (dependencies: any): any => {
  const {
    usecases: { scheduleInterView_useCase },
  } = dependencies;


  const scheduleInterview = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    try {
        
        const interviewData = req.body
        const data = await  scheduleInterView_useCase(dependencies).interactor(interviewData )
        res.json({
            data : data ,
            success : true ,
            message: "scheduled  interview for job  successfully completed "
        })
    } catch (err: any) {

      console.log(err, "Error occured when  the scheduling of interview  in the company form controller");
      res.status(500).json({ error: "Internal Server Error" });
      next()

    }
  };  

  return scheduleInterview;
};
