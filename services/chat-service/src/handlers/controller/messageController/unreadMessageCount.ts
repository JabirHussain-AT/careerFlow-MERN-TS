import { Request, Response, NextFunction } from "express";
import { IDependencies } from "../../../entities/interfaces/IChatInterface";

export = (dependencies: IDependencies) => {
  const {
    usecases: {
      messageUseCases: { unreadMessagesCount_useCase },
    },
  } = dependencies;

  const unreadMessageCount = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const applicantIds = req.body;

      const data = await unreadMessagesCount_useCase(dependencies).interactor(
        applicantIds
      );
      if (data) {
        res.json({
          data: data,
          success: true,
          message: "Successfully fetched ",
        });
      } else {
        res.json({
          data: null,
          success: true,
          message: "Successfully fetched ",
        });
      }
    } catch (err) {
      console.log(err, "error - fetch unread messages count in chat service");
      res.status(500).json({ error: "Internal Server Error" });
      next();
    }
  };

  return unreadMessageCount;
};
