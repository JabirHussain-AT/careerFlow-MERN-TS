import userSignupController from "./userSignup";
import userLoginController from "./userLogin"
import userExistCheckController from './userExist'
import userProfileUpdateController from './userProfileUpdate'


export = (dependencies : any ) =>{
    return {
        userSignupController : userSignupController(dependencies),
        userLoginController : userLoginController(dependencies),
        userExistCheckController : userExistCheckController(dependencies) ,
        userProfileUpdateController : userProfileUpdateController(dependencies)
    }
}