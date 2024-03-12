export const fetchuserChat_useCase = ( dependencies: any) => {
    const {
        repositories: {
            messageRepo : { fetchChatUserChat }
        }
    } = dependencies;
    const interactor = async (senderId : string , reciverId : string) => {

        return await fetchChatUserChat(senderId , reciverId)
    }

    return { interactor }
}