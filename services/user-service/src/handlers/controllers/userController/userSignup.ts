import { Request, Response, NextFunction } from "express";
import generateOtp from "../../../util/externalServices/nodemailer/generateOtp";
import { hashPassword } from "../../../util/externalServices/bcrypt/hashPass";
import { generateToken } from "../../../util/externalServices/jwt";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";
import { generatePassword } from "../../../util/externalServices/passwordGenerator/passGenerator";

export = (dependencies: any): any => {
  const {
    usecases: {
      signUp_useCase,
      findUserByEmail_useCase,
      saveAndSendOtp_useCase,
      verifyOtp_useCase,
      sendPass_useCase,
    },
  } = dependencies;

  const registerUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const userCredentials = req.body;

    // to check if the email is taken or not

    if (!userCredentials.otp && userCredentials.password) {
      try {
        const userExist = await findUserByEmail_useCase(
          dependencies
        ).interactor(userCredentials);

        if (userExist === false) {
          try {
            const { email } = userCredentials;
            const otp = generateOtp();

            await saveAndSendOtp_useCase(dependencies).interactor(otp, email);
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
        let otpVerified = false;
        if (userCredentials.otp) {
          const otp = userCredentials?.otp;
          otpVerified = await verifyOtp_useCase(dependencies).interactor(
            userCredentials.email,
            otp
          );
        }

        //if user is user signed through google
        //to check it is google sign in or not
        if (!userCredentials.password) {

          const userExist = await findUserByEmail_useCase(
            dependencies
          ).interactor(userCredentials);

          if(userExist) return next(ErrorResponse.forbidden('User Already Exists ! try another one'))

          userCredentials.password = await generatePassword(8);
          await sendPass_useCase(dependencies).interactor(
            userCredentials.password,
            userCredentials.email
          )
          }

        
        if (!otpVerified && userCredentials.otp) {
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
              return next(ErrorResponse.forbidden('User Already Exists ! try another one'))
            } else {
              // creating jwt token for furthor authentication
          

              

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
            console.log(err, "err occured while creating user ");
            next(err);
          }
        }
      } catch (err) {
        console.log(err, "err in the user signuo");
      }
    }
  };

  return registerUser;
};
