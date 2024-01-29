import userSignupController from "./userSignup";
import userLoginController from "./userLogin"


export = (dependencies : any ) =>{
    return {
        userSignupController : userSignupController(dependencies),
        userLoginController : userLoginController(dependencies),
    }
}