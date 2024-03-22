import { Request, Response, NextFunction } from "express";
import { IDependencies } from "../../../entities/interfaces/IChatInterface";

export = (dependencies: IDependencies  ) => {
  const {
    usecases: { chatUseCases :{
        fetchChatUsers_useCase 
    } },
  } = dependencies;

  const fetchChatUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
     
      const companyId = req.params.companyId
      const limit = req.params.limit
      const data  = await fetchChatUsers_useCase(dependencies).interactor(companyId , limit )
  
      res.json({
        data : data , 
        success : true ,
        message : 'fetching chat users'
      })

    } catch (err: any) {
      console.log(err, "error in the fetching chat users in chat service");
      res.status(500).json({ error: "Internal Server Error" });
      next();
    }
  };

  return fetchChatUsers;
};
