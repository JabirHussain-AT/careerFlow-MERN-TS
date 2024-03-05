import express, { Request, Response } from "express";
import { adminController } from "../../handlers/controllers";
import verifyToken from "../../util/middlewares/authCheckerAdmin";

export = (dependencies: any): any => {
  const router = express.Router();

  const { fetchUsersController } = adminController(dependencies);

  router.get('/fetchUsers',verifyToken,fetchUsersController);

  return router;
};
