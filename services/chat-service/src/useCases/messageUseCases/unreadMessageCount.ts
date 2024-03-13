export const unreadMessagesCount_useCase = ( dependencies: any) => {
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