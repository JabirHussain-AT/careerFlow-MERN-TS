import express,{Request , Response} from 'express'
import { userController } from '../../handlers/controllers'


export = (dependencies : any) : any =>{
    const router = express.Router()

    const {
    userSignupController
    } = userController(dependencies)

    router.post('/sign-up',userSignupController)
    // router.post('/otp-request',(req : Request , res : Response)=>{
    //     console.log('otp request ,=====',req.body.email)
    // })

    return router
}