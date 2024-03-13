import { Router } from "express";
import chatRoomController from "../../handlers/controller/chatRoomController";
import verifyuserAuth from "../../utils/middlewares/authCheck";

const chatRoomRoutes = (dependencies: any) => {
    const router = Router()
    const {
        createNewRoomController ,
        fetchChatUsersController

    } = chatRoomController(dependencies)


    router.post('/creat-chat-room',verifyuserAuth,createNewRoomController)
    router.get('/fetch-chat-users/:companyId/:limit',verifyuserAuth,fetchChatUsersController)

    return router;
}

export default chatRoomRoutes;