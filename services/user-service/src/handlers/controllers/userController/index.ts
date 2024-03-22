import userSignupController from "./userSignup";
import userLoginController from "./userLogin"
import userExistCheckController from './userExist'
import userProfileUpdateController from './userProfileUpdate'
import updateBasicDetialsController from './updateBasicInfo'
import fetchUserDataController from './fetchUser'
import saveTheJobController from './saveTheJob'
import getChatUserDataController from './getChatUserData'
import { IDependencies } from "../../../entities/intrefaces/IUserInterfaces";


export = (dependencies : IDependencies ) =>{
    return {
        userSignupController : userSignupController(dependencies),
        userLoginController : userLoginController(dependencies),
        userExistCheckController : userExistCheckController(dependencies) ,
        userProfileUpdateController : userProfileUpdateController(dependencies) ,
        updateBasicDetialsController: updateBasicDetialsController(dependencies)  ,
        fetchUserDataController : fetchUserDataController(dependencies) ,
        getChatUserDataController : getChatUserDataController(dependencies) ,
        saveTheJobController : saveTheJobController(dependencies)
    }
}