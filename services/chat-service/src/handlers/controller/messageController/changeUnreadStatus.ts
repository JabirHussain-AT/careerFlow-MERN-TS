import { Request, Response, NextFunction } from "express";

export = (dependencies: any): any => {
  const {
    usecases : { messageUseCases : { changeUnreadStatus_useCase }}
  } = dependencies;


  const changeUnreadStatus = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        
    const userId = req.params.userId

      const data = await changeUnreadStatus_useCase(dependencies).interactor(
        userId
      );
      if (data) {
        res.json({
            data : data ,
          success: true,
          message: "Successfully changed the status ",
        });
      } else {
        res.json({
            data : null ,
          success: true,
          message: "not  changed the status ",
        });
      }
    } catch (err: any) {
      console.log(err, "error - fetch unread messages count in chat service");
        res.status(500).json({ error: "Internal Server Error" });
        next();
    }
  };

  return changeUnreadStatus;
};
