import { Request, Response, NextFunction } from "express";
import generateOtp from "../../../util/externalServices/nodemailer/generateOtp";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";
import { hashPassword } from "../../../util/externalServices/bcrypt/hashPass";
import { generateToken } from "../../../util/externalServices/jwt";
import { generatePassword } from "../../../util/externalServices/passwordGenerator/passGenerator";

export = (dependencies: any): any => {
  const {
    usecases: { signUp_useCase, saveAndSendOtp_useCase, verifyOtp_useCase, sendPass_useCase },
  } = dependencies;

  const signUpUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userCredentials = req.body;

      if (!userCredentials.otp && userCredentials.password) {
        await handleOtplessSignup(userCredentials, res, next);
      } else {
        await handleOtpSignup(userCredentials, res, next);
      }

    } catch (err: any) {
      console.log(err, "Error in the company signup controller");
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  const handleOtplessSignup = async (
    userCredentials: any,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { email } = userCredentials;
      const otp = generateOtp();

      await saveAndSendOtp_useCase(dependencies).interactor(otp, email);

      res.json({
        success: true,
        message: "otp sent successfully from the company service",
      });
    } catch (err: any) {
      console.log(
        err,
        " <<< something went wrong in the user signup otp section >>> "
      );
      res.json({
        success: false,
        message: "Something went wrong in otp",
      });
    }
  };

  const handleOtpSignup = async (
    userCredentials: any,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let otpVerified = false;

      if (userCredentials.otp) {
        const otp = userCredentials?.otp;
        otpVerified = await verifyOtp_useCase(dependencies).interactor(
          userCredentials.email,
          otp
        );
      }



      console.log('========================')
      console.log(otpVerified)
      console.log('========================')


      if (!otpVerified && userCredentials.otp) {
        return next(ErrorResponse.forbidden("otp is invalied !"));
      } else {
        await handleUserSignup(userCredentials, res, next);
      }
    } catch (err: any) {
      console.log(err, "Error in otp verification or user signup");
      next(err);
    }
  };

  const handleUserSignup = async (
    userCredentials: any,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (!userCredentials.password) {
        userCredentials.password = await generatePassword(8);
        console.log(userCredentials.password ,' THIS IS THE PASS')
        await sendPass_useCase(dependencies).interactor(
          userCredentials.password,
          userCredentials.email
          );
          console.log(userCredentials.password ,' THIS IS THE PASS 2')
      }

      userCredentials.password = await hashPassword(userCredentials?.password);
      const user = await signUp_useCase(dependencies).interactor(
        userCredentials
      );

      if (!user) {
        return next(ErrorResponse.forbidden('User Already Exists! Try another one'));
      } else {

        let payload = {
          _id: String(user?.id),
          email:user?.email!,
          role: user?.role!,
        };

        const token = generateToken(payload);


        res.cookie("user_jwt", token, {
          httpOnly: true,
          maxAge: 7 * 24 * 60 * 60 * 1000,
        });  
        
        
        user.token = token;
        res.status(201).json(user);
       


      }
    } catch (err: any) {
      console.log(err, "Error occurred while creating user");
      next(err);
    }
  };

  return signUpUser;
};
