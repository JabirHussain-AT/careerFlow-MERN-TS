import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";

export = (dependencies: any): any => {
  const {
    usecases: { getChartData_useCase },
  } = dependencies;


  const getChartDataController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    try {
        const companyId = req.params.companyId
        let  value = req.params.filter
        let filter = { }

        if(value === 'yearly'){
         filter = { $year : "$createdAt" }
        }else if( value === 'weekly'){
          filter = { $week : "$createdAt" }
        }else if(value === 'monthly'){
          filter = { $month : "$createdAt" }
        }


        const data = await  getChartData_useCase(dependencies).interactor(companyId , filter)
        res.json({
            data : data ,
            success : true ,
            message: "fetched chart data successfully from the company service"
        })
        
    } catch (err: any) {

      console.log(err, "Error in the fetching chart data in the company form controller");
      res.status(500).json({ error: "Internal Server Error" });
      next()

    }
  };  

  return getChartDataController;
};
