import { IDependencies } from "../../entities/interfaces/IChatInterface";

export const changeUnreadStatus_useCase = ( dependencies: IDependencies ) => {
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