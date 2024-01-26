import { Request ,Response ,NextFunction } from "express";
// import sigUpValidationSchema from 
export  = (dependencies : any ) : any =>{
    const {
        usecases : {  signUp_useCase}
    } = dependencies

    const registerUser = async (
        req : Request ,
        res : Response,
        next : NextFunction
    )=>{
        const userCredentials = req.body()
        console.log(userCredentials,'=======> its on body hehhhh');
        
    }
}