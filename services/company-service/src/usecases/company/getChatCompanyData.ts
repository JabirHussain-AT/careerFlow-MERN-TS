export const getChatCompanyData_useCase = (dependencies: any): any => {

    const {
        repositories : {
                companyRepo : {getChatCompanyData},
        }
    } = dependencies ;  
  
    if (!getChatCompanyData) throw new Error("repository is required  !");
    const interactor = async ( companyDataContainer ) => {
      return await getChatCompanyData( companyDataContainer);
    };
    return { interactor };
  };
  