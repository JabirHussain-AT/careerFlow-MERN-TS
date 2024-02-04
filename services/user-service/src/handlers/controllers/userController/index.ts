import userSignupController from "./userSignup";
import userLoginController from "./userLogin"
import userExistCheckController from './userExist'


export = (dependencies : any ) =>{
    return {
        userSignupController : userSignupController(dependencies),
        userLoginController : userLoginController(dependencies),
        userExistCheckController : userExistCheckController(dependencies)
    }
}