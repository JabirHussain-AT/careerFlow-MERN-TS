import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";

export const addCategory_useCase = (dependencies : IDependencies )  =>{
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
