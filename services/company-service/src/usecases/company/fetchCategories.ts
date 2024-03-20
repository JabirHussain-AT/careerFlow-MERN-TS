export const fetchCategories_useCase
= (dependencies : any) : any =>{
    const {
        repositories : {
                companyRepo : {fetchCategories},
        }
    } = dependencies ;  

    if(!fetchCategories) throw new Error('repository is required !')

    const interactor = (  )=>{
        return fetchCategories()
    }
    return {interactor}
}
