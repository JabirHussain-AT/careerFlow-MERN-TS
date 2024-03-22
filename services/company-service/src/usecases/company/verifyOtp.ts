import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";

export const verifyOtp_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      companyRepo: { verifyOtp },
    },
  } = dependencies;

  if (!verifyOtp) throw new Error("Repository is required");

  const interactor = (user_email: string, otp: number): boolean => {
    try {
      return verifyOtp(otp, user_email);
    } catch (err) {
      return false;
    }
  };
  return { interactor };
};
