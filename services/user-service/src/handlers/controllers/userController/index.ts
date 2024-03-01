import userSignupController from "./userSignup";
import userLoginController from "./userLogin"
import userExistCheckController from './userExist'
import userProfileUpdateController from './userProfileUpdate'
import updateBasicDetialsController from './updateBasicInfo'


export = (dependencies : any ) =>{
    return {
        userSignupController : userSignupController(dependencies),
        userLoginController : userLoginController(dependencies),
        userExistCheckController : userExistCheckController(dependencies) ,
        userProfileUpdateController : userProfileUpdateController(dependencies) ,
        updateBasicDetialsController: updateBasicDetialsController(dependencies) 
    }
}