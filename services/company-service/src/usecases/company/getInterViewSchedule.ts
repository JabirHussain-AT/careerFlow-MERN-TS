export const getInterViewSchedule_useCase = (dependencies : any) : any =>{
    const {
        repositories : {
                companyRepo : { getInterViewSchedule },
        }
    } = dependencies ;  

    if(!getInterViewSchedule) throw new Error('repository is required !')
    
    const interactor = async ( jobId : string  , applicantId )=>{
        const data =  await getInterViewSchedule(jobId , applicantId)
        return data
    }
    return {interactor}
}
