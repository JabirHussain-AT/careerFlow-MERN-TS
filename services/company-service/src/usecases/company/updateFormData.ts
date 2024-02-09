export const updateFormData_useCase = (dependencies : any) : any =>{
    const {
        repositories : {
                companyRepo : { updateFormData },
        }
    } = dependencies ;  
    console.log('from the signUP use cases in use cases-company ')


    if(!updateFormData) throw new Error('repository is required !')

    const interactor = (email : string , companyCredentials : any )=>{
        console.log('in interactor company - update form use case')
        return updateFormData(email , companyCredentials)
    }
    return {interactor}
}
