export const fetchComJobs_useCase
= (dependencies : any) : any =>{
    const {
        repositories : {
                companyRepo : {fetchComJobInCompany},
        }
    } = dependencies ;  

    if(!fetchComJobInCompany) throw new Error('repository is required !')

    const interactor = (companyId  : any )=>{
        console.log('in interactor fetch company jobs  in company use case')
        return fetchComJobInCompany(companyId)
    }
    return {interactor}
}
