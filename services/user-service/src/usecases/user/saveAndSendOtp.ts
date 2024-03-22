import { IDependencies } from "../../entities/intrefaces/IUserInterfaces";
import { sendOtp } from "../../util/externalServices/nodemailer/sendOtp";

export const saveAndSendOtp_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      userRepo: { saveOtp },
    },
  } = dependencies;

  if (!saveOtp) throw new Error(" repository is required ");

  const interactor = async (otp: number, user_email: string) => {
    try {
      await saveOtp(otp, user_email);

      const status = sendOtp(user_email, otp);

      if (!status) return false;
    } catch (err: unknown) {
      return err;
    }
  };
  return { interactor };
};
