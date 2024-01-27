import { Request, Response, NextFunction } from "express";
import generateOtp from "../../../util/externalServices/nodemailer/generateOtp";

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
          res.json({
            success: false,
            message: "User Exists With The Same Email, Try Another One",
          });
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
          return res.status(401).json({
            success: false,
            message: "Otp is Invalid try another",
          });
        }else{
            try{
              const user = await signUp_useCase(dependencies).interactor(userCredentials)
              
              if (!user)
              return res.json({
                success: false,
                message: "Something Went wrong try again in create user",
              });
    

            }catch(err : any){

            }
        }

        
      } catch (err) {}
    }
  };

  return registerUser;
};
