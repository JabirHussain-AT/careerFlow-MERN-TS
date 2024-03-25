import express, { Request, Response } from 'express';
import { userController } from '../../handlers/controllers';
import verifyUserAuth from '../../util/middlewares/authChecker';
import verifyuserAuth from '../../util/middlewares/authCheck';
import { IDependencies } from '../../entities/intrefaces/IUserInterfaces';

export = (dependencies: IDependencies) => {
  const router = express.Router();

  const {
    userSignupController,
    userLoginController,
    userExistCheckController,
    userProfileUpdateController,
    updateBasicDetialsController,
    fetchUserDataController,
    getChatUserDataController,
    saveTheJobController ,
    resetPasswordController ,
    changePasswordController
  } = userController(dependencies);


  router.get('/fetchUser/:id',verifyuserAuth, fetchUserDataController);

  router.post('/sign-up', userSignupController);
  router.post('/logIn', userLoginController);
  router.post('/exists', userExistCheckController);
  
  router.put('/update-profile', verifyUserAuth, userProfileUpdateController);
  router.put('/updateBasicDetials', verifyUserAuth, updateBasicDetialsController);

  router.patch('/reset-password', verifyUserAuth, resetPasswordController);
  router.patch('/change-password', verifyUserAuth, changePasswordController);
  
  router.post('/get-chatUserDetials',verifyuserAuth,getChatUserDataController)
  router.post('/save-the-job/:userId/:jobId',verifyUserAuth,saveTheJobController)


  return router;
};
