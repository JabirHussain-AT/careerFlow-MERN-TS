import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";
import { sendOtp } from "../../util/externalServices/nodemailer/sendOtp";

export const saveAndSendOtp_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      companyRepo: { saveOtp },
    },
  } = dependencies;

  if (!saveOtp) throw new Error("repository is required");

  const interactor = async (otp: number, user_email: string) => {
    try {

      await saveOtp(otp, user_email);
      const status = sendOtp(user_email, otp);
      if (!status) return false;

    } catch (err: unknown ) {

      return false;

    }
  };
  return { interactor };
};
