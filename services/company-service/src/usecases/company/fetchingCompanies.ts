export const fetchCompanies_useCase = (dependencies : any) : any =>{
    const {
        repositories : {
                companyRepo : { fetchCompanies },
        }
    } = dependencies ;  

    if(!fetchCompanies) throw new Error('repository is required !')

    const interactor = ( )=>{
        return fetchCompanies()
    }   
    return {interactor}
}
