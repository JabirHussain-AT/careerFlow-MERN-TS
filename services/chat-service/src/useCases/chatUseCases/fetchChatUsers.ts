import { IDependencies } from "../../entities/interfaces/IChatInterface";

export const fetchChatUsers_useCase = ( dependencies: IDependencies ) => {
    const {
        repositories: {
            chatRepo : {fetchChatUsers}
        }
    } = dependencies;
    const interactor = async (companyId : string , limit : number | string ) => {

        return await fetchChatUsers(companyId,limit)
    }

    return { interactor }
}