import express,{Request , Response} from 'express'
import { userController } from '../../handlers/controllers'


export = (dependencies : any) : any =>{
    const router = express.Router()

    const {
        userSignupController

    } = userController(dependencies)

    router.post('/sign-up',(req : Request , res : Response) =>{
        console.log('this is the data to be saved  ',req.body)
        res.send('its success happened in the user router ======= !!!')
    })

    return router
}