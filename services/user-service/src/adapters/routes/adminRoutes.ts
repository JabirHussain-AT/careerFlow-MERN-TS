import express, { Request, Response } from "express";
import { adminController } from "../../handlers/controllers";
import verifyToken from "../../util/middlewares/authCheckerAdmin";

export = (dependencies: any): any => {
  const router = express.Router();

  const { fetchUsersController, changeUserBlockStatusController } = adminController(dependencies);

  router.get('/fetchUsers',verifyToken,fetchUsersController);
  router.patch('/change-user-Block-status/:userId',changeUserBlockStatusController)

  return router;
};
