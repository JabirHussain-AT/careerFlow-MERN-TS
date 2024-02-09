export const updateCompanyApprovel_useCase = (dependencies : any) : any=>{
    const {
        repositories :{
            companyRepo : { updateApprovel }
        }
    } = dependencies ;

    if(!updateApprovel) throw new Error("repository is required")
    
    const interactor =  async (companyId : any , status : boolean , reason?: string)  =>{
        try{    
                const data = await updateApprovel(companyId , status)
                return data
        }catch(err : any ){
            return false
        }
    }
    return {interactor}
}