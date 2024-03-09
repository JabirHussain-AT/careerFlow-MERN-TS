export const createNewChatroom_usecase = ( dependencies: any) => {
    // const {
    //     repositories: {
    //         chatRepo
    //     }
    // } = dependencies;

    const interactor = async (users: any) => {
        // return await chatRepo.createANewChatroom(users)
        return true
    }

    return { interactor }
}