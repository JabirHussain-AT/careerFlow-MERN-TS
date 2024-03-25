import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";
import { IDependencies } from "../../../entities/intrefaces/IUserInterfaces";
import { generatePassword } from "../../../util/externalServices/passwordGenerator/passGenerator";
import { hashPassword } from "../../../util/externalServices/bcrypt/hashPass";
import { sendOtp } from "../../../util/externalServices/nodemailer/sendOtp";

export = (dependencies: IDependencies) => {
  const {
    usecases: { userExist_useCase, resetPassword_useCase },
  } = dependencies;

  const resetPasswordController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { email } = req.body;
      const isUserExist = await userExist_useCase(dependencies).interactor(
        email
      );

      if (!isUserExist) {
       return res.json({
          success: false,
          message: "User not existing with this email ",
        });
      } else {
        let generatedPassword = await generatePassword(8);
        await sendOtp(email, generatedPassword);
        generatedPassword = await hashPassword(generatedPassword);
        const password = await resetPassword_useCase(dependencies).interactor(
          email,
          generatedPassword,
        );
        res.json({
          success: true,
          message: " Password resetted Successfully",
        });
      }
    } catch (err: unknown) {
      console.log(err + "  in the catch o f the reset password");
    }
  };
  return resetPasswordController;
};
