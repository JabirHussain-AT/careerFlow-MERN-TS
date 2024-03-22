import { IfUnknown } from "mongoose";
import { IDependencies } from "../../entities/intrefaces/IUserInterfaces";

export const verifyOtp_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      userRepo: { verifyOtp },
    },
  } = dependencies;

  if (!verifyOtp) throw new Error("Repository is required");

  const interactor = (user_email: string, otp: number): boolean => {
    try {
      return verifyOtp(otp, user_email);
    } catch (err: unknown) {
      console.log(err, "err occured in the catch verify otp use case");
      return false;
    }
  };
  return { interactor };
};
