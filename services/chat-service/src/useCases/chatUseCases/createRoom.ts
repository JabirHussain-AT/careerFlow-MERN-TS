export const creatNewRoom_useCase = ( dependencies: any) => {
    const {
        repositories: {
            chatRepo : {createNewChatroom}
        }
    } = dependencies;
        console.log('its reaching here in use case')
    const interactor = async (roomDetials: {  roomCreater : string , roomJoiner : string  }) => {

        return await createNewChatroom(roomDetials)
    }

    return { interactor }
}