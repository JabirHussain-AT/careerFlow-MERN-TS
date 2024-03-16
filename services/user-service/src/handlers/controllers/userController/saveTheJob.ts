import { Request, Response, NextFunction } from "express";

export = (dependencies: any): any => {
  const {
    usecases: { saveTheJob_useCase },
  } = dependencies;

  const saveTheJob = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId, jobId } = req.params;
      const data = await saveTheJob_useCase(dependencies).interactor( userId , jobId );

      if(data ){
        res.json({success : true , data : data , message : ' updated successfully  '})
      }else{
        res.json({success : false , data : false , message : 'something went wrong in job saving '})
      }

    } catch (err: any) {
      console.log(err + "occured in the catch of the save the job");
    }
  };
  return saveTheJob;
};
