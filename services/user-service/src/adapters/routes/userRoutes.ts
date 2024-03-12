import express, { Request, Response } from 'express';
import { userController } from '../../handlers/controllers';
import verifyUserAuth from '../../util/middlewares/authChecker';
import verifyuserAuth from '../../util/middlewares/authCheck';

export = (dependencies: any): any => {
  const router = express.Router();

  const {
    userSignupController,
    userLoginController,
    userExistCheckController,
    userProfileUpdateController,
    updateBasicDetialsController,
    fetchUserDataController,
    getChatUserDataController
  } = userController(dependencies);

  // user-signup
  router.post('/sign-up', userSignupController);
  router.post('/logIn', userLoginController);
  router.post('/exists', userExistCheckController);
  router.get('/fetchUser/:id',verifyuserAuth, fetchUserDataController);

  router.post('/update-profile', verifyUserAuth, userProfileUpdateController);
  router.post('/get-chatUserDetials',verifyuserAuth,getChatUserDataController)
  router.post('/updateBasicDetials', verifyUserAuth, updateBasicDetialsController);


  return router;
};
