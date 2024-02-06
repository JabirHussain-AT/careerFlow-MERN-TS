import express,{Request , Response} from 'express'
import { userController } from '../../handlers/controllers'
import verifyToken from '../../util/middlewares/authChecker'


export = (dependencies : any) : any =>{
    const router = express.Router()

    const {
    userSignupController,
    userLoginController,
    userExistCheckController
    } = userController(dependencies)


    
//user-signup
    router.post('/sign-up',userSignupController)
    router.post('/logIn',userLoginController)
    router.post('/exists',userExistCheckController)
    
// middleware passing
   router.use(verifyToken)

    return router
}