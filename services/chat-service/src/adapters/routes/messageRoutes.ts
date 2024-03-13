import { Router } from "express";
import messageControllers from "../../handlers/controller/messageController";
import verifyUserAuth from "../../utils/middlewares/authCheck";

const messageRoutes = ( dependencies: any) => {
    const router = Router();
    const {
        saveMessageController,
        fetchUserChatController ,
        unreadMessageCountController ,
        changeUnreadStatusController
    } = messageControllers(dependencies);

    router.get('/fetch-chat-userChat/:senderId/:recieverId',verifyUserAuth,fetchUserChatController)
    router.get('/update-unread-messages/:userId',verifyUserAuth,changeUnreadStatusController)
    router.post('/save-message',verifyUserAuth, saveMessageController)
    router.post('/unread-messages-count',verifyUserAuth, unreadMessageCountController)
    
    return router;
}


export default messageRoutes;