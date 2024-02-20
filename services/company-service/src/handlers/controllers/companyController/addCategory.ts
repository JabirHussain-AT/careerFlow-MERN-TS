import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";

export = (dependencies: any): any => {
  const {
    usecases: { addCategory_useCase },
  } = dependencies;

  const addCategoryController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const category = req.body.category
        const data = addCategory_useCase(dependencies).interactor(category)
      if(data){
        res.json({success:true})
      }
    } catch (err: any) {
      console.log(err, "Error in the company adding job controller");
      res.status(500).json({ error: "Internal Server Error" });
      next()
    }
  };  
  return addCategoryController;
};
