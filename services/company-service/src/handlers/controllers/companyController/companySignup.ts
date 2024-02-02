import { Request, Response, NextFunction } from "express";

export default (dependencies: any): any => {
  const {
    usecases: { login_useCase },
  } = dependencies;

  const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (err: any) {
      console.log(err, "err in the company signup controller");
    }
    return loginUser;
  };
};
