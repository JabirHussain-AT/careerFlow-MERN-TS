import { Request, Response, NextFunction } from "express";

export = (dependencies: any): any => {
  const {
    usecases: { changeUserBlockSatus_useCase },
  } = dependencies;

  const changeBlockStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const userId = req.params.userId  
      const data = await changeUserBlockSatus_useCase(dependencies).interactor(userId);

      if(data){
        res.json({data :  data , success : true , message :  ' successfully changed block status '})
      }else{
        res.json({data :  data , success : true , message :  ' successfully changed block status '})
      }
   
    } catch (err: any) {
      console.log(err + "  in the catch of the change status block");
    }
  };
  return changeBlockStatus;
};
