import { Request, Response, NextFunction } from "express";
import { IDependencies } from "../../../entities/intrefaces/IUserInterfaces";
import { hashPassword } from "../../../util/externalServices/bcrypt/hashPass";
import { comparePasswords } from "../../../util/externalServices/bcrypt/bcryptComapre";

export = (dependencies: IDependencies) => {
  const {
    usecases: { fetchUser_useCase, resetPassword_useCase },
  } = dependencies;

  const changePasswordController = async (
    req: any,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { oldPassword, newPassword } = req.body;
      const userId = req.decodedUser;
      const userData = await fetchUser_useCase(dependencies).interactor(userId);
      if (userData) {
        let userVerify = await comparePasswords(oldPassword, userData.password);
        if (userVerify) {
          let generatedPassword = await hashPassword(newPassword);
          const result = await resetPassword_useCase(dependencies).interactor(
            userData?.email,
            generatedPassword
          );
          if (result) {
            res.json({
              success: true,
              message: " changed password successfully",
            });
          } else {
            res.json({
              success: false,
              message: "something went on wrong on change password ",
            });
          }
        } else {
          res.json({
            success: false,
            message: "The entered Old password is not matching  ",
          });
        }
      }
    } catch (err: unknown) {
      console.log(err + "  in the catch of the change password controller ");
      next(err); // Call 'next' function to pass the error to the error handling middleware
    }
  };
  return changePasswordController;
};
