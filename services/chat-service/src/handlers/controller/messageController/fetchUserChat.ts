import { Request, Response, NextFunction } from "express";

export = (dependencies: any): any => {
  const {
    usecases : { messageUseCases : { fetchuserChat_useCase }}
  } = dependencies;


  const saveMessageController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        
      const senderId = req.params?.senderId 
      const reciverId = req.params?.recieverId 

      const data = await fetchuserChat_useCase(dependencies).interactor(
      senderId , reciverId
      );
      if (data) {
        res.json({
            data : data ,
          success: true,
          message: "Successfully fetched ",
        });
      } else {
        res.json({
            data : null ,
          success: true,
          message: "Successfully updated ",
        });
      }
    } catch (err: any) {
      console.log(err, "error - fetchUserChat in the fetching chat users in chat service");
      //   res.status(500).json({ error: "Internal Server Error" });
      //   next();
    }
  };

  return saveMessageController;
};
