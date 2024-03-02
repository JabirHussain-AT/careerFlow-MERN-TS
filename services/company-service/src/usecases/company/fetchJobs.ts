export const fetchJobs_useCase = (dependencies : any) : any =>{
    const {
        repositories : {
                companyRepo : {fetchJobs},
        }
    } = dependencies ;  
    // console.log('now at fetching job use case ')

    if(!fetchJobs) throw new Error('repository is required !')
    
    const interactor = async ( )=>{
        console.log('in interactor fetching   jobs in company use case')
        const data =  await fetchJobs()
        console.log(data,')))))))))))(((((((((((')
        return data
    }
    return {interactor}
}
