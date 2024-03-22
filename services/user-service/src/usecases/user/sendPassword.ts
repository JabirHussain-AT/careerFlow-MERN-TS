import { IDependencies } from "../../entities/intrefaces/IUserInterfaces";
import { sendOtp } from "../../util/externalServices/nodemailer/sendOtp";

export const sendPass_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      userRepo: { createNewUser },
    },
  } = dependencies;

  if (!createNewUser) throw new Error("repository is required !");

  const interactor = (password: string, email: string) => {
    return sendOtp(email, password);
  };
  return { interactor };
};
