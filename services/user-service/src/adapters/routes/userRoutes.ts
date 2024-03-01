import express,{Request , Response} from 'express'
import { userController } from '../../handlers/controllers'
import verifyToken from '../../util/middlewares/authChecker'


export = (dependencies : any) : any =>{
    const router = express.Router()

    const {
    userSignupController,
    userLoginController,
    userExistCheckController ,
    userProfileUpdateController ,
    updateBasicDetialsController ,
    fetchUserDataController
    } = userController(dependencies)


    
//user-signup
    router.post('/sign-up',userSignupController)
    router.post('/logIn',userLoginController)
    router.post('/exists',userExistCheckController)
    router.get('/fetchUser/:id',fetchUserDataController)

    router.post('/update-profile',userProfileUpdateController)
    router.post('/updateBasicDetials',updateBasicDetialsController)
    
// middleware passing
//    router.use(verifyToken)

    return router
}