export const fetchChatUsers_useCase = ( dependencies: any) => {
    const {
        repositories: {
            chatRepo : {fetchChatUsers}
        }
    } = dependencies;
    const interactor = async (companyId:string,limit : number | string ) => {

        return await fetchChatUsers(companyId,limit)
    }

    return { interactor }
}