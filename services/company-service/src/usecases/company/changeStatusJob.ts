export const changeStatus_useCase = (dependencies : any) : any =>{
    const {
        repositories : {
                companyRepo : {changeJobStatus },
        }
    } = dependencies ;  

    console.log('now at change status job  use case ')


    if(!changeJobStatus) throw new Error('repository is required !')

    const interactor = (jobId : string , value : boolean )=>{
        console.log('in interactor add  job in company use case')
        return changeJobStatus(jobId , value)
    }
    return {interactor}
}
