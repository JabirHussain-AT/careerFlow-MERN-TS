import { Router } from "express";
import chatRoomController from "../../handlers/controller/chatRoomController";
// import verifyUserAuth from "../../utils/middlewares/verifyUserAuth";

const chatRoomRoutes = (dependencies: any) => {
    const router = Router()
    const {
        createNewRoomController ,
        fetchChatUsersController

    } = chatRoomController(dependencies)


    router.post('/creat-chat-room',createNewRoomController)
    router.get('/fetch-chat-users/:companyId/:limit',fetchChatUsersController)
    // router.patch(`/get-chat-room/with/:applicantId`, verifyUserAuth, getChatroomController)
    // router.get(`/get-current-user-chats`, verifyUserAuth, getCurrentUserChatRoomsController)

    return router;
}

export default chatRoomRoutes;