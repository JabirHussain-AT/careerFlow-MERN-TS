export const addJob_useCase = (dependencies : any) : any =>{
    const {
        repositories : {
                companyRepo : {addJobInCompany},
        }
    } = dependencies ;  
    console.log('now at add job use case ')


    if(!addJobInCompany) throw new Error('repository is required !')

    const interactor = (companyData : any )=>{
        console.log('in interactor add  job in company use case')
        return addJobInCompany(companyData)
    }
    return {interactor}
}
