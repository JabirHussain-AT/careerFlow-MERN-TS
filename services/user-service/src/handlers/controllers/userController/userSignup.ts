import { Request, Response, NextFunction } from "express";
// import sigUpValidationSchema from
export = (dependencies: any): any => {
  const {
    usecases: { signUp_useCase, findUserByEmail_useCase },
  } = dependencies;

  const registerUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const userCredentials = req.body;
    //to check the email is taken or not ???

    if (!userCredentials.otp) {
      try {
        const userExist = await findUserByEmail_useCase(
          dependencies
        ).interactor(userCredentials);

        if (userExist === false) {
          res.json({
            success: true,
            message: "no user exists with this email",
          });

        } else {
          res.json({
            success: false,
            message: "User Exists With The Same Email , Try Another One",
          });
        }
      } catch (err) {
        console.log(err, "something went wrong ");
        next(err);
      }
    }else{
        
    }


  };

  return registerUser;
};
