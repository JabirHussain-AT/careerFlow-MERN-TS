export const findJobs_useCase = (dependencies : any) : any =>{
    const {
        repositories : {
                companyRepo : { findJobs },
        }
    } = dependencies ;  
    console.log('now at fetching job use case ')

    if( !findJobs ) throw new Error('repository is required !')
    
    const interactor = async ( jobsDocs : any )=>{
        console.log('in interactor finding   job in company use case')
        const data =  await findJobs(jobsDocs)
        console.log(data,'______________ FROM FETCH JOB = COMPANY SERVICE')
        return data
    }
    return {interactor}
}
