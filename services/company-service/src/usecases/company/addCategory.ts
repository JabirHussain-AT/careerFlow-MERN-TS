export const addCategory_useCase = (dependencies : any) : any =>{
    const {
        repositories : {
                companyRepo : {addCategory},
        }
    } = dependencies ;  


    if(!addCategory) throw new Error('repository is required !')

    const interactor = (category : any )=>{
        return addCategory(category)
    }
    return {interactor}
}
