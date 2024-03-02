export const getMyJobApplications_useCase = (dependencies : any) : any =>{
    const {
        repositories : {
                companyRepo : { getMyJobApplications },
        }
    } = dependencies ;  
    // console.log('now at get My application useCase ')

    if(!getMyJobApplications) throw new Error('repository is required !')
    
    const interactor = async ( userId : string  )=>{
        // console.log('in interactor  of the get my job applications ')
        const data =  await getMyJobApplications(userId)
        return data
    }
    return {interactor}
}
