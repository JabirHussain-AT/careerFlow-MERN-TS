import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";

export = (dependencies: any): any => {
  const {
    usecases: { updateFormData_useCase },
  } = dependencies;

  const updateFormData = async (
    req : Request ,
    res : Response ,
    next : NextFunction
  ) =>{

    try{
        console.log('========== in the updataFD cntrller ',req.body)

    }catch(err : any){
        console.log(err, "Error in the company updateFormData controller");
        res.status(500).json({ error: "Internal Server Error" });
    }
  }
};
