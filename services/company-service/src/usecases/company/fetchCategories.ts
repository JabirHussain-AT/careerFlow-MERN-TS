import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";

export const fetchCategories_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      companyRepo: { fetchCategories },
    },
  } = dependencies;

  if (!fetchCategories) throw new Error("repository is required !");

  const interactor = () => {
    return fetchCategories();
  };
  return { interactor };
};
