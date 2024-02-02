import { Request, Response, NextFunction } from "express";

 export const companySignupController = (dependencies: any): any => {
  const {
    usecases: { signUp_useCase },
  } = dependencies;

  const signUpUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Your controller logic here
      res.json({success:true})
    } catch (err: any) {
      console.log(err, "Error in the company signup controller");
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  return signUpUser;
};

