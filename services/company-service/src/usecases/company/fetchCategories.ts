export const fetchCategories_useCase
= (dependencies : any) : any =>{
    const {
        repositories : {
                companyRepo : {fetchCategories},
        }
    } = dependencies ;  

    if(!fetchCategories) throw new Error('repository is required !')

    const interactor = (  )=>{
        console.log('in interactor fetch company categories  in company use case')
        return fetchCategories()
    }
    return {interactor}
}
