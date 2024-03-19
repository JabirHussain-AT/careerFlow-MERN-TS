export const fetchJobs_useCase = (dependencies : any) : any =>{
    const {
        repositories : {
                companyRepo : {fetchJobs},
        }
    } = dependencies ;  
    // console.log('now at fetching job use case ')

    if(!fetchJobs) throw new Error('repository is required !')
    
    const interactor = async ( )=>{
        const data =  await fetchJobs()
        return data
    }
    return {interactor}
}
