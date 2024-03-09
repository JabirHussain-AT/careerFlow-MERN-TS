import { Router } from "express";
// import chatRoomControllers from "../../handlers/contollers/chatRoomControllers";
// import verifyUserAuth from "../../utils/middlewares/verifyUserAuth";

const chatRoomRoutes = (dependencies: any) => {
    const router = Router()
    // const {

    // } = chatRoomControllers(dependencies)

    // router.patch(`/get-chat-room/with/:applicantId`, verifyUserAuth, getChatroomController)
    // router.get(`/get-current-user-chats`, verifyUserAuth, getCurrentUserChatRoomsController)

    return router;
}

export default chatRoomRoutes;