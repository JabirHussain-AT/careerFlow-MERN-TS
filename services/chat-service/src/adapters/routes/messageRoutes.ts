import { Router } from "express";
import messageControllers from "../../handlers/controller/messageController";
// import verifyUserAuth from "../../utils/middlewares/verifyUserAuth";
// import upload from "../../utils/externalServices/aws-s3/fileUpload";

const messageRoutes = ( dependencies: any) => {
    const router = Router();
    const {
        saveMessageController,
      
    } = messageControllers(dependencies);

    router.post('/save-message', saveMessageController)
    // router.post('/save-media-files', upload.array("files"), saveMediafilesController)
    // router.patch('/change-message-status', changeMessagesStatusAsReadController)
    // router.get('/get-unread-messages-count', getCountOfUnreadMessagesController)
    
    return router;
}


export default messageRoutes;