import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";

export const getChartData_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      companyRepo: { getChartData },
    },
  } = dependencies;

  if (!getChartData) throw new Error("repository is required !");

  const interactor = async (companyId: string, filter: string) => {
    const data = await getChartData(companyId, filter);

    return data;
  };
  return { interactor };
};
