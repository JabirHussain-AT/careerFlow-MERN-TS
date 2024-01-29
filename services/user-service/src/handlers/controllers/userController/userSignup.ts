import { Request, Response, NextFunction } from "express";
import generateOtp from "../../../util/externalServices/nodemailer/generateOtp";
import { hashPassword } from "../../../util/externalServices/bcrypt/hashPass";
import { generateToken } from "../../../util/externalServices/jwt";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";

export = (dependencies: any): any => {
  const {
    usecases: {
      signUp_useCase,
      findUserByEmail_useCase,
      saveAndSendOtp_useCase,
      verifyOtp_useCase,
    },
  } = dependencies;

  const registerUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const userCredentials = req.body;

    // to check if the email is taken or not

    if (!userCredentials.otp) {
      try {
        const userExist = await findUserByEmail_useCase(
          dependencies
        ).interactor(userCredentials);

        if (userExist === false) {
          try {
            const { email } = userCredentials;
            const otp = generateOtp();

            await saveAndSendOtp_useCase(dependencies).interactor(otp, email);
            console.log("hellooo");
            res.json({
              success: true,
              message: "otp sent Successfully",
            });
          } catch (err) {
            console.log(
              err,
              " <<< something went wrong in the user signup otp section >>> "
            );
            res.json({
              success: false,
              message: "Something went wrong in otp",
            });
          }
        } else {
          // res.json({
          //   success: false,
          //   message: "User Exists With The Same Email, Try Another One",
          // });
          return next(
            ErrorResponse.forbidden(
              "Email already resgitered, try another email"
            )
          );
        }
      } catch (err) {
        console.log(err, "something went wrong ");
        next(err);
        return;
      }
    } else {
      //verify otp enetered by the user

      try {
        const otp = userCredentials?.otp;
        const otpVerified = await verifyOtp_useCase(dependencies).interactor(
          userCredentials.email,
          otp
        );

        if (!otpVerified) {
          return next(ErrorResponse.forbidden("otp is invalied !"));
        } else {
          try {
            // in this phase we need to do hash our password
            userCredentials.password = await hashPassword(
              userCredentials?.password
            );
            const user = await signUp_useCase(dependencies).interactor(
              userCredentials
            );

            if (!user) {
              return res.json({
                success: false,
                message: "Something Went wrong try again in create user",
              });
            } else {
              // creating jwt token for furthor authentication
              const token = generateToken(user?.id);
              res.cookie("user_jwt", token, {
                httpOnly: true,
                maxAge: 7 * 24 * 60 * 60 * 1000,
                sameSite: false,
              });
              user.token = token;
              res.status(201).json(user);
            }
          } catch (err: any) {
            console.log(err, "err occured while creating user ");
            next(err);
          }
        }
      } catch (err) {
        console.log(err,'err in the user signuo')
      }
    }
  };

  return registerUser;
};
