import { IDependencies } from "../../entities/intrefaces/IUserInterfaces";

export const fetchUsers_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      userRepo: { fetchUsers },
    },
  } = dependencies;

  if (!fetchUsers) throw new Error("repository is required  !");
  const interactor = async () => {
    return await fetchUsers();
  };
  return { interactor };
};
