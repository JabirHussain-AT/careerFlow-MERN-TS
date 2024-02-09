import express, { Request, Response } from "express";
import { adminController } from "../../handlers/controllers";
import verifyToken from "../../util/middlewares/authChecker";

export = (dependencies: any): any => {
  const router = express.Router();

  const {  } = adminController(dependencies);

  // middleware passing
  router.use(verifyToken);
;

  return router;
};
