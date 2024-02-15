export const editJob_useCase = (dependencies : any) : any =>{
    const {
        repositories : {
                companyRepo : {editJobInCompany},
        }
    } = dependencies ;  
    console.log('now at edit job use case ')

    if(!editJobInCompany) throw new Error('repository is required !')
    
    const interactor = (companyData : any )=>{
        console.log('in interactor edit   job in company use case')
        return editJobInCompany(companyData)
    }
    return {interactor}
}
