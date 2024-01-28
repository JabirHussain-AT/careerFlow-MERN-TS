import express,{Request , Response} from 'express'
import { userController } from '../../handlers/controllers'


export = (dependencies : any) : any =>{
    const router = express.Router()

    const {
    userSignupController,
    } = userController(dependencies)

//user-signup
    router.post('/sign-up',userSignupController)

    return router
}