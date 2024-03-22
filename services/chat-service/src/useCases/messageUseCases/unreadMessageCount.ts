import { IDependencies } from "../../entities/interfaces/IChatInterface";

export const unreadMessagesCount_useCase = ( dependencies: IDependencies ) => {
    const {
        repositories: {
            messageRepo : { getUnreadMessagesCount}
        }
    } = dependencies;
    const interactor = async (applicantIds) => {

        return await getUnreadMessagesCount(applicantIds)
    }

    return { interactor }
}