import { Request, Response, NextFunction } from "express";

export = (dependencies: any): any => {
  const {
    usecases: { findJobs_useCase },
  } = dependencies;


  const createNewRoom = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    try {
       console.log('hey')
    } catch (err: any) {

     console.log(err , 'error in the create new room chat service')
      res.status(500).json({ error: "Internal Server Error" });
      next()

    }
  };  

  return createNewRoom;
};
