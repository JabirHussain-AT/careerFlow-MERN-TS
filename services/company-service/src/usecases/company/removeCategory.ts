import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";

export const removeCategory_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      companyRepo: { removeCategory },
    },
  } = dependencies;

  if (!removeCategory) throw new Error("repository is required !");

  const interactor = async (CategoryId: string) => {
    const data = await removeCategory(CategoryId);
    return data;
  };
  return { interactor };
};
