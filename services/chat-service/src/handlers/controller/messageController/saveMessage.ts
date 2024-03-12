import { Request, Response, NextFunction } from "express";

export = (dependencies: any): any => {
  const {
    usecases : { messageUseCases : { saveMessage_useCase }}
  } = dependencies;
    console.log("🚀 ~ file: saveMessage.ts:7 ~ usecases:", saveMessage_useCase)

  const saveMessageController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let dataToSend = {
        senderId: req?.body?.senderId,
        reciverId: req?.body?.recieverId,
        message: req?.body?.content,
        latestMessage: req.body?.latestMessage,
      };

      const data = await saveMessage_useCase(dependencies).interactor(
        dataToSend
      );
      if (data) {
        res.json({
          success: true,
          message: "Successfully updated ",
        });
      } else {
        res.json({
          success: true,
          message: "Successfully updated ",
        });
      }
    } catch (err: any) {
      console.log(err, "error in the fetching chat users in chat service");
      //   res.status(500).json({ error: "Internal Server Error" });
      //   next();
    }
  };

  return saveMessageController;
};
