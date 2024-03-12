export const saveMessage_useCase = ( dependencies: any) => {
    const {
        repositories: {
            messageRepo : {saveMessage}
        }
    } = dependencies;
    const interactor = async (messsageData:any) => {

        return await saveMessage(messsageData)
    }

    return { interactor }
}