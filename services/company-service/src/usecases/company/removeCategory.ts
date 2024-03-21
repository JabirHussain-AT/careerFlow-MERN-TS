
export const removeCategory_useCase = (dependencies: any): any => {
    const {
      repositories: {
        companyRepo: { removeCategory },
      },
    } = dependencies;
  
    if (!removeCategory) throw new Error("repository is required !");
  
    const interactor = async ( CategoryId : string ) => {
      const data = await removeCategory( CategoryId );
      return data;
    };
    return { interactor };
  };
  