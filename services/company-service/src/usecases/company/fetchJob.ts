export const fetchJob_useCase = (dependencies : any) : any =>{
    const {
        repositories : {
                companyRepo : { fetchJob },
        }
    } = dependencies ;  
    console.log('now at fetching job use case ')

    if( !fetchJob ) throw new Error('repository is required !')
    
    const interactor = async ( jobId : string )=>{
        console.log('in interactor fetching   job in company use case')
        const data =  await fetchJob(jobId)
        console.log(data,'______________ FROM FETCH JOB = COMPANY SERVICE')
        return data
    }
    return {interactor}
}
