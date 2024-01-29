import express,{Request , Response} from 'express'
import { userController } from '../../handlers/controllers'


export = (dependencies : any) : any =>{
    const router = express.Router()

    const {
    userSignupController,
    userLoginController
    } = userController(dependencies)

//user-signup
    router.post('/sign-up',userSignupController)
    router.post('/logIn',userLoginController)

    return router
}