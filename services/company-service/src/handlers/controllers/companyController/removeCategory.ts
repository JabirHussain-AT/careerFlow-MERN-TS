import { Request, Response, NextFunction } from "express";

export = (dependencies: any): any => {
  const {
    usecases: { removeCategory_useCase },
  } = dependencies;


  const jobApplyController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    try {
        const { CategoryId} = req.params
        const data = await  removeCategory_useCase(dependencies).interactor( CategoryId )
        res.json({
            data : data ,
            success : true ,
            message: " remove categoy controller successfull  "
        })
    } catch (err: any) {

      console.log(err, "Error in the removing category  controller");
      res.status(500).json({ error: "Internal Server Error" });
      next()

    }
  };  

  return jobApplyController;
};
