import { IDependencies } from "../../entities/interfaces/IChatInterface";

export const fetchuserChat_useCase = ( dependencies: IDependencies ) => {
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