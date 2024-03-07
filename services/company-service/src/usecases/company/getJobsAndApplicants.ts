export const getJobAndApplicantsCount_useCase = (dependencies : any) : any =>{
    const {
        repositories : {
                companyRepo : { getJobsAndApplicantsCount },
        }
    } = dependencies ;  

    if(!getJobsAndApplicantsCount) throw new Error('repository is required !')
    
    const interactor = async ( companyId : string  )=>{
        const data =  await getJobsAndApplicantsCount(companyId)
        return data
    }
    return {interactor}
}
