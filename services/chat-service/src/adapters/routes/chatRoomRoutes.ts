import { Router } from "express";
import chatRoomController from "../../handlers/controller/chatRoomController";
import verifyuserAuth from "../../utils/middlewares/authCheck";
import { IDependencies } from "../../entities/interfaces/IChatInterface";

const chatRoomRoutes = (dependencies: IDependencies ) => {
    const router = Router()
    const {
        createNewRoomController ,
        fetchChatUsersController

    } = chatRoomController(dependencies)


    router.get('/fetch-chat-users/:companyId/:limit',verifyuserAuth,fetchChatUsersController)
    router.post('/creat-chat-room',verifyuserAuth,createNewRoomController)

    return router;
}

export default chatRoomRoutes;