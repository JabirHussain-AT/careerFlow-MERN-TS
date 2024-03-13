export const changeUnreadStatus_useCase = ( dependencies: any) => {
    const {
        repositories: {
            messageRepo : { changeUnreadStatus }
        }
    } = dependencies;
    const interactor = async (userId : string) => {

        return await changeUnreadStatus(userId)
    }

    return { interactor }
}