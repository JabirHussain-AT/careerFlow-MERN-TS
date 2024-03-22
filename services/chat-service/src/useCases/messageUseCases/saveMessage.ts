import { IDependencies } from "../../entities/interfaces/IChatInterface";

export const saveMessage_useCase = ( dependencies: IDependencies ) => {
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