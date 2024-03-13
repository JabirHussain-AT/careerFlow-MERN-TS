import { Router } from "express";
import messageControllers from "../../handlers/controller/messageController";
// import verifyUserAuth from "../../utils/middlewares/verifyUserAuth";
// import upload from "../../utils/externalServices/aws-s3/fileUpload";

const messageRoutes = ( dependencies: any) => {
    const router = Router();
    const {
        saveMessageController,
        fetchUserChatController ,
        unreadMessageCountController ,
        changeUnreadStatusController
    } = messageControllers(dependencies);

    router.get('/fetch-chat-userChat/:senderId/:recieverId',fetchUserChatController)
    router.get('/update-unread-messages/:userId',changeUnreadStatusController)
    router.post('/save-message', saveMessageController)
    router.post('/unread-messages-count', unreadMessageCountController)
    
    return router;
}


export default messageRoutes;