import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";

export = (dependencies: any): any => {
  const {
    usecases: { fetchUser_useCase },
  } = dependencies;

  const fetchUserDataController = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.id ;
      const user = await fetchUser_useCase(dependencies).interactor(
       userId 
      );

      console.log('fetching user data  - in controller')
      if (user === false) {
        return next(
          ErrorResponse.forbidden(
            "user data fetching produced error "
          )
        );
      }
      res.json({ sucess: true, message: "error user fetching ! ", data : user  });
    } catch (err: any) {
      console.log(err + "  in the catch of the user fetching ");
    }
  };
  return fetchUserDataController;
};
