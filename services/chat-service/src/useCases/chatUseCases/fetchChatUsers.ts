export const fetchChatUsers_useCase = ( dependencies: any) => {
    const {
        repositories: {
            chatRepo : {fetchChatUsers}
        }
    } = dependencies;
    const interactor = async (companyId:string) => {

        return await fetchChatUsers(companyId)
    }

    return { interactor }
}