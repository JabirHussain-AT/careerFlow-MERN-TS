import { IDependencies } from "../../entities/intrefaces/IUserInterfaces";

export const login_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      userRepo: { loginVerify },
    },
  } = dependencies;

  if (!loginVerify) "repository is required";

  const interactor = async (email: string, password: string) => {
    try {
      let result = await loginVerify(email, password);
      return result;
    } catch (err) {
      return false;
    }
  };
  return { interactor };
};
