export const getChartData_useCase = (dependencies: any): any => {
  const {
    repositories: {
      companyRepo: { getChartData },
    },
  } = dependencies;


  if (!getChartData) throw new Error("repository is required !");

  const interactor = async (companyId : string , filter : string) => {

    const data = await getChartData(companyId, filter);

    return data;
  };
  return { interactor };
};
