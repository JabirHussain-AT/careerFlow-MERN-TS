import userSignupController from "./userSignup";
export = (dependencies : any ) =>{
    return {
        userSignupController : userSignupController(dependencies)
    }
}