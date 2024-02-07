import express, { Request, Response } from "express";
import { adminController } from "../../handlers/controllers";
import verifyToken from "../../util/middlewares/authChecker";

export = (dependencies: any): any => {
  const router = express.Router();

  const { companyFetchController } = adminController(dependencies);

  // middleware passing
//   router.use(verifyToken);

  //fetch-companues
  console.log('i am here')
  router.get("/fetch-companies", companyFetchController);

  return router;
};
